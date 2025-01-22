const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

// GET all todos
router.get('/', todoController.getAllTodos);

// GET single todo
router.get('/:id', todoController.getTodoById);

// CREATE todo
router.post('/', todoController.createTodo);

// UPDATE todo
router.put('/:id', todoController.updateTodo);

// DELETE todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router; 