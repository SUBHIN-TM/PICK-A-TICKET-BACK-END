import express from 'express' ;
const router = express.Router();


import { home } from '../Controllers/User/Home.js'

router.get('/',home);



export default router;