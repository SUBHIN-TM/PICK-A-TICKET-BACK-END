import express from 'express' ;
const router = express.Router();
import { AddUpcomingMovies } from '../controllers/admin/upComingMovies.js';
import { AddMovies } from '../controllers/admin/movies.js';
import { AddScreens } from '../controllers/admin/addScreen.js';


router.post('/UpComingSection',AddUpcomingMovies);
router.post('/AddMovies',AddMovies);
router.post('/AddScreens',AddScreens);



export default router;