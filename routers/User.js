import express from 'express' ;
const router = express.Router();


import { home } from '../controllers/user/home.js'
import { booking,seatSelection,ticketGenerator } from '../controllers/user/booking.js';
import { otpGeneration } from '../controllers/user/otp.js';


router.get('/',home);
router.post('/booking',booking);
router.post('/seatSelection',seatSelection);
router.post('/ticketGenerator',ticketGenerator);
router.post('/otpGeneration',otpGeneration);








export default router;