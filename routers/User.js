import express from 'express' ;
const router = express.Router();


import { home } from '../controllers/User/Home.js'
import { booking,seatSelection,ticketGenerator } from '../controllers/User/Booking.js';
import { otpGeneration } from '../controllers/User/Otp.js';


router.get('/',home);
router.post('/booking',booking);
router.post('/seatSelection',seatSelection);
router.post('/ticketGenerator',ticketGenerator);
router.post('/otpGeneration',otpGeneration);








export default router;