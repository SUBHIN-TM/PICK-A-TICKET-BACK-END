import express from 'express' ;
const router = express.Router();


import { home } from '../Controllers/User/Home.js'
import { booking } from '../Controllers/User/Booking.js';

router.get('/',home);
router.post('/booking',booking);




export default router;