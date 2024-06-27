import express from 'express' ;
const router = express.Router();
import { AddUpcomingMovies } from '../Controllers/Admin/UpComingMovies.js';
import { AddMovies } from '../Controllers/Admin/Movies.js';
import { AddScreens } from '../Controllers/Admin/AddScreen.js';


router.post('/UpComingSection',AddUpcomingMovies);
router.get('/AddMovies',AddMovies);
router.get('/AddScreens',AddScreens);



export default router;