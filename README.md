# Simple To-Do App Backend

## Project Description
This is a simple To-Do App Backend developed using Node.js, Express.js, MongoDB, and Mongoose.

Users can create, view, update, and delete tasks.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Task Fields
- title: Task name
- description: Task details
- completed: Task completion status

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | /todos | Create a new task |
| GET | /todos | Get all tasks |
| GET | /todos/:id | Get a single task |
| PUT | /todos/:id | Update a task |
| DELETE | /todos/:id | Delete a task |

## How to Run

1. Clone the repository.
2. Install dependencies:

   npm install

3. Start the server:

   npm run dev

Server runs on port 5000.

## Database
MongoDB is used as the database.