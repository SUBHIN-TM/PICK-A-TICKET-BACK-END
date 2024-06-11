import express from 'express' ;
const router = express.Router();


import { home } from '../Controllers/User/Home.js'
import { booking,seatSelection,ticketGenerator } from '../Controllers/User/Booking.js';

router.get('/',home);
router.post('/booking',booking);
router.post('/seatSelection',seatSelection);
router.post('/ticketGenerator',ticketGenerator);






export default router;