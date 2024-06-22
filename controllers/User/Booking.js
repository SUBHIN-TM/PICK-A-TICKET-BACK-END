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
      console.log("existing", existingBooking);
      return res.status(200).json(existingBooking);
    } else {

      const newBooking = new BOOKING({
        movie: movie,
        date: date,
        time: time,
        screen: screen,
        totalSeats: [],
        bookingDetails: []
      });

      const savedBooking = await newBooking.save();
      console.log("created as new", savedBooking);
      return res.status(201).json(savedBooking);
    }
  } catch (error) {
    console.error('Booking add Section', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const seatSelection = async (req, res) => {
  try {
    console.log("Seat selection section");
    const objectId = req.body.selectedScreen.objectId
    const { selectedSeatNumbers, name, email, mobile, total } = req.body
    console.log(objectId, "\n", selectedSeatNumbers, "\n", name, "\n", email, "\n", mobile, "\n", total);

    const indexes = selectedSeatNumbers.map(num => parseInt(num.slice(1), 10));
    const response = await BOOKING.findByIdAndUpdate(
      objectId,
      {
        $push: {
          bookingDetails: {
            seatNumber: selectedSeatNumbers,
            name: name,
            mail: email,
            mobile: mobile,
            total: total,
            paymentId: 'success'
          }
        },
        $addToSet: {
          totalSeats: { $each: indexes }
        }
      },
      { new: true }
    );
    
    console.log(response.bookingDetails[response.bookingDetails.length - 1]);
    if (response) {
      res.status(200).json({ message: 'Booking Completed Successfully', details: response.bookingDetails[response.bookingDetails.length - 1] });
    } else {
      res.status(404).json({ message: 'Booking Not Completed' });
    }
  } catch (error) {
    console.error(error);
  }
}


export const ticketGenerator = async (req, res) => {
  try {
    console.log("Ticket generator section");
    // console.log(req.body);
    const { id } = req.body
    let allBookings = await BOOKING.find()
    let response = allBookings.reduce((acc, main) => {
      if (acc) return acc; // If we already found the result, return it
      const inner = main.bookingDetails.find(inner => inner._id.toString() === id);
      return inner ? { main, inner } : null;
    }, null);

    // console.log(response);
    if (response) {
      res.status(200).json({ details: response });
    } else {
      res.status(404).json({ message: 'Invalid Ticket ID' });
    }

  } catch (error) {
    console.error(error);
  }
}