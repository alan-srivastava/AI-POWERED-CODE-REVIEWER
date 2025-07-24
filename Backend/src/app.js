const express = require('express');
const aiRoutes= require('./routes/ai.routes');
const cors = require('cors');
const path = require('path');

const app = express()

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON bodies

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../../Frontend/dist')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/ai', aiRoutes);

// Serve frontend for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/dist/index.html'));
});

module.exports = app;
