const express = require('express');
const logger = require("morgan");

const connectToMongoDB = require("./database/connectToMongoDB")

const app = express();

const PORT = 3000;

// Middleware
app.use(logger("dev"))
app.use(express.json())

const usersRouter = require("./routes/users/usersRouter");
app.use("/api/v1/users", usersRouter)

const eventsRouter = require("./routes/events/eventsRouter");
app.use("/api/v1/events", eventsRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
    connectToMongoDB()
})