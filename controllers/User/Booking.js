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
        totalSeats:{0:null,1:null,2:"booked",3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null,11:null,12:null,
          13:null,14:null,15:"booked",16:null,17:null,18:null,19:null,20:null,21:null,22:null,23:null,24:null,25:null,
          26:null,27:null,28:null,29:null,30:null
        },
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
