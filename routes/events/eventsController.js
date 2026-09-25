const Event = require('./eventsModel')

const getEvents = async (req, res) => {
  try {
    // req.query.date
    // req.query.category

    // construct an object to pass in to our .find in order to filter by each given query
    const filterObject = {}

    if (req.query.category) {
      //if query exists, add it to our filterObject
      filterObject.category = req.query.category
    }

    if (req.query.date) {
      filterObject.date = req.query.date
    }

    // filter by price range
    // $gte - greater than or equal to
    // $lte - less than or equal to

    // query minPrice and maxPrice
    // {  price: { $gte: 50, $lte: 80 } }
    filterObject.price = {
        // if no minPrice, use 0 
        // if no maxPrice, use Infinity
        $gte: req.query.minPrice || 0,
        $lte: req.query.maxPrice || Infinity
    }

    const events = await Event.find(filterObject)
    res.json(events)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body)
    res.json(newEvent)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getEvents, createEvent }
