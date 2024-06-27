import express from 'express' ;
const router = express.Router();
import { AddUpcomingMovies } from '../controllers/admin/upComingMovies.js';
import { AddMovies } from '../controllers/admin/movies.js';
import { AddScreens } from '../controllers/admin/addScreen.js';


router.post('/UpComingSection',AddUpcomingMovies);
router.get('/AddMovies',AddMovies);
router.get('/AddScreens',AddScreens);



export default router;