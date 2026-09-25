const Booking = require("./bookingsModel");
const Event = require("../events/eventsModel")

const createBooking = async (req,res) => {
    try {
        // creating a booking with a calculated totalPrice
        // totalPrice is NOT something we send in our request body

        // totalPrice = eventPrice * bookingQuantity

        // eventPrice 
        // Event model and event ID reference to find the event price we need

        const event = await Event.findById(req.body.event)

        const totalPrice = event.price * req.body.quantity;

        // giving the request body the correct total price
        req.body.totalPrice = totalPrice

        const newBooking =  await Booking.create(req.body);
        res.json(newBooking);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createBooking }