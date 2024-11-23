<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function handleChat(Request $request)
    {
        if ($request->isMethod('post')) {
            try {
                $user = Auth::user();
                $user_name = Auth::check() ? Auth::user()->name : 'Guest';

                $message = Message::create([
                    'user_name' =>  $user_name,
                    'message' => $request->message,
                    'user_id' => $user->id,
                ]);

                broadcast(new MessageSent($message, $user));

                return response()->json([
                    'status' => 'Message sent!',
                    'message' => $message->message,
                    'user_name' => $message->user_name,
                ]);
            } catch (\Exception $e) {
                \Log::error('Error while creating message: ' . $e->getMessage());
                return response()->json(['error' => 'Error sending message'], 500);
            }
        }

        $messages = Message::orderBy('created_at', 'asc')->get();
        return view('chat.index', compact('messages'));
    }
}
