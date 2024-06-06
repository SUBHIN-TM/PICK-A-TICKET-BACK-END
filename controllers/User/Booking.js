import BOOKING from "../../Models/Bookings.js";

export const booking = async (req, res) => {
  try {
    console.log('Booking add Section');
    const { screen, time, movie, selectedDate } = req.body;

    const date = selectedDate.split("T")[0]
    console.log(date);
    const existingBooking = await BOOKING.findOne({
      movie: movie,
      date: date,
      time: time,
      screen: screen
    });

    if (existingBooking) {
        console.log("existing",existingBooking);
      return res.status(200).json(existingBooking);
    } else {
      const newBooking = new BOOKING({
        movie: movie,
        date: date,
        time: time,
        screen: screen,
        bookingDetails: []
      });

      const savedBooking = await newBooking.save();
      console.log("created as new",savedBooking);
      return res.status(201).json(savedBooking);
    }
  } catch (error) {
    console.error('Booking add Section', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
