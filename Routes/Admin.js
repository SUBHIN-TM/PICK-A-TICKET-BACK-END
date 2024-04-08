import express from 'express' ;
const router = express.Router();
import { AddUpcomingMovies } from '../Controllers/Admin/UpComingMovies.js';
import { AddMovies } from '../Controllers/Admin/Movies.js';


router.post('/UpComingSection',AddUpcomingMovies);
router.get('/AddMovies',AddMovies);


export default router;