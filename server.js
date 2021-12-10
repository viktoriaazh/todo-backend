const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB");
})

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log("Server is running on port: 5000");
});