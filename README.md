<<<<<<< HEAD
# Project-Using-MERN-
=======
# MERN Task Manager App

## Overview
MERN Task Manager is a full-stack task management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, update, delete, and manage tasks efficiently.

## Features
- User authentication (JWT-based login and registration)
- Create, update, and delete tasks
- Task categorization and filtering
- Responsive UI using React and Tailwind CSS
- RESTful API backend with Express.js
- MongoDB as the database
- Error handling and validation

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt.js
- **State Management:** React Context API

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- MongoDB (local or Atlas cloud database)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/mern-task-manager.git
   cd mern-task-manager
   ```

2. **Backend Setup**
   ```sh
   cd backend
   npm install
   ```
   - Create a `.env` file inside `backend` and add the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```sh
     npm start
     ```

3. **Frontend Setup**
   ```sh
   cd ../frontend
   npm install
   ```
   - Create a `.env` file inside `frontend` and add:
     ```env
     REACT_APP_API_URL=http://localhost:5000
     ```
   - Start the frontend server:
     ```sh
     npm start
     ```

4. **Access the App**
   - Open `http://localhost:3000` in your browser.

## API Endpoints
| Method | Endpoint       | Description               |
|--------|---------------|---------------------------|
| POST   | /api/users    | Register a new user       |
| POST   | /api/users/login | User login             |
| GET    | /api/tasks    | Fetch all tasks          |
| POST   | /api/tasks    | Create a new task        |
| PUT    | /api/tasks/:id | Update a task           |
| DELETE | /api/tasks/:id | Delete a task           |

## Contributing
Feel free to fork this repo and submit pull requests. Suggestions and improvements are always welcome!

## License
This project is licensed under the MIT License.
>>>>>>> e6e844e (Initial commit)
# PROJECT_MERN_INT
