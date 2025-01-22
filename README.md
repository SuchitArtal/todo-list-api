# Todo List API

A RESTful Todo API built with Express.js and MongoDB. Features CRUD operations for managing tasks with proper error handling and data persistence. Uses Mongoose ODM for MongoDB interactions and includes middleware for error handling and CORS support.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)

## Features
- ✨ Complete CRUD operations for todo items
- 📝 MongoDB integration using Mongoose
- 🔄 RESTful API endpoints
- ⚡ Express middleware implementation
- 🛡️ Error handling and validation
- 🌐 CORS enabled

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure 
```
todo-list-api/
├── src/
│ ├── controllers/
│ │ └── todo.controller.js
│ ├── models/
│ │ └── todo.model.js
│ ├── routes/
│ │ └── todo.routes.js
│ └── index.js
├── .env
├── .gitignore
└── package.json
```
## API Endpoints

### Todos
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/todos | Get all todos |
| GET    | /api/todos/:id | Get a specific todo |
| POST   | /api/todos | Create a new todo |
| PUT    | /api/todos/:id | Update a todo |
| DELETE | /api/todos/:id | Delete a todo |

## Getting Started

1. **Clone the repository**
bash
`git clone https://github.com/SuchitArtal/todo-list-api.git`
`cd todo-list-api`

2. **Install dependencies**
bash
`npm install`

3. **Set up environment variables**
Create a `.env` file in the root directory and add:

`env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todo-api
`

4. **Start MongoDB**
Make sure MongoDB is running on your system

5. **Run the application**
bash
`npm start`

bash
#Development
`npm run dev`

#Production
`npm start`

## API Documentation

### Todo Object Structure
```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "createdAt": "date"
}
```

### API Responses

#### Success Responses
- 200: Operation successful
- 201: Resource created
- 204: Resource deleted

#### Error Responses
- 400: Bad Request
- 404: Resource not found
- 500: Internal server error

## Error Handling
The API returns error responses in the following format:
```json
{
  "message": "Error message description"
}
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
ISC
