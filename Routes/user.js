import express from 'express' ;
const router = express.Router();


import { home } from '../Controllers/userControllers.js';


router.get('/',home);




export default router;