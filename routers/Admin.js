import express from 'express' ;
const router = express.Router();
import { AddUpcomingMovies } from '../controllers/Admin/UpComingMovies.js';
import { AddMovies } from '../controllers/Admin/Movies.js';
import { AddScreens } from '../controllers/Admin/AddScreen.js';


router.post('/UpComingSection',AddUpcomingMovies);
router.get('/AddMovies',AddMovies);
router.get('/AddScreens',AddScreens);



export default router;