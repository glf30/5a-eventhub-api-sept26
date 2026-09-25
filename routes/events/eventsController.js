const Event = require("./eventsModel");

const getEvents = async (req,res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createEvent = async (req,res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getEvents, createEvent }