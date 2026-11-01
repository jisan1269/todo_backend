
const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/todoDB')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));


// 1. Create a new Todo
app.post('/todos', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        const savedTodo = await newTodo.save();

        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// 2. Get all Todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// 3. Get a single Todo by ID
app.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ message: 'Invalid Todo ID' });
    }
});


// 4. Update a Todo
app.put('/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// 5. Delete a Todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Invalid Todo ID' });
    }
});


// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
