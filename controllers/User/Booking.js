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
      const createTotalSeats = (numSeats) => {
        const totalSeats = {};
        for (let i = 0; i <= numSeats; i++) {
          totalSeats[i] = null;
        }
        return totalSeats;
      };

      const newBooking = new BOOKING({
        movie: movie,
        date: date,
        time: time,
        screen: screen,
        totalSeats:createTotalSeats(121),
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


export const seatSelection=async(req,res)=>{
  try {
    console.log("Seat selection section");
    // console.log(req.body);
    const objectId=req.body.selectedScreen.objectId
    const{selectedSeatNumbers,name,email,mobile,total}=req.body
    console.log(objectId,"\n",selectedSeatNumbers,"\n",name,"\n",email,"\n",mobile,"\n",total);
   
    const indexes = selectedSeatNumbers.map(num => parseInt(num.slice(1), 10));
    console.log(indexes); // Output: [0, 1]
    const totalSeatsUpdate = indexes.reduce((acc, index) => {
      acc[`totalSeats.${index}`] = "BOOKED";
      return acc;
  }, {});

    const response=await BOOKING.findByIdAndUpdate(
      objectId,
      {
        $set:totalSeatsUpdate,
        $push:{
          bookingDetails:{
            seatNumber:selectedSeatNumbers,
            name:name,
            mail:email,
            mobile:mobile,
            total:total,
            paymentId:'success'
          }
        }
      },
      {new:true}
    )
    console.log(response);
  } catch (error) {
   console.error(error); 
  }
}