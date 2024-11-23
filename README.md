# Chat Application

## Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Setup and Usage](#setup-and-usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction
This project is a real-time chat platform developed with **Laravel** and **WebSockets**. It provides an instant messaging experience by leveraging Laravel's backend capabilities and WebSocket technology. Users can chat in real-time with other authenticated users.

---

## Key Features
- **Instant Messaging:** Users can exchange messages in real time using WebSockets and Laravel Echo.
- **User Authentication:** Secure registration, login, and logout functionality.
- **Interactive Chat Interface:** Messages are displayed dynamically in a responsive chat window.
- **Real-Time Broadcasting:** Updates are instantly shared with other users in the same chat channel.

---

## Setup and Usage

### Prerequisites:
- PHP 8.3 or later.
- Composer installed on your system.

### Steps to Deploy:

1. **Install Dependencies:**
   ```bash
   composer install
   ```

2. **Configure Environment Variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with the following:
     ```
     BROADCAST_DRIVER=pusher
     PUSHER_APP_ID=your_app_id
     PUSHER_APP_KEY=your_app_key
     PUSHER_APP_SECRET=your_app_secret
     PUSHER_APP_CLUSTER=your_app_cluster
     ```

3. **Run Database Migrations:**
   ```bash
   php artisan migrate
   ```

4. **Start Local Development Server:**
   ```bash
   php artisan serve
   ```
   The application will be accessible at `http://localhost:8000`.

5. **Start the WebSocket Server:**
   ```bash
   php artisan websockets:serve
   ```

### Application Usage:
- **Homepage:** Navigate to `/` to log in or register.
- **Chat:** After logging in, access the chat interface at `/chat`.
- **Authentication:** Use `/register` and `/login` routes for user management.
- **Logout:** Securely log out using `/logout`.

---

## Directory Structure

### Key Folders and Files:
- **`app/Http/Controllers/`:** Contains application controllers:
  - `ChatController.php` - Manages chat logic.
  - `AuthController.php` - Handles user authentication.
  - `HomeController.php` - Displays the homepage.
  
- **`routes/`:** Defines application routes:
  - `web.php` - Main routes for pages and functionalities.
  - `channels.php` - WebSocket channels and event routes.

- **`resources/js/`:** JavaScript for interactivity and WebSocket management:
  - `app.js` - Manages WebSocket and chat interactions.
  - `bootstrap.js` - Sets up WebSocket and Pusher configuration.

- **`resources/views/`:** Blade templates for the UI:
  - `chat/index.blade.php` - Chat interface.
  - `auth/login.blade.php` - Login page.
  - `auth/register.blade.php` - Registration page.
  - `home.blade.php` - Homepage layout.

- **`.env`:** Environment configuration file.

- **`composer.json`:** Dependency manager configuration.

- **`vite.config.js`:** Asset compilation settings.

---

## Contributing
Contributions are welcome! For bug fixes or feature suggestions:
- Fork the repository.
- Make changes in a new branch.
- Submit a pull request.

For issues or feedback, please open a ticket in the issue tracker.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
