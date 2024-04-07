import mongoose from 'mongoose';

const UpcomingMoviesSchema=new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
})

const UPCOMING=mongoose.model('UpComingMovies',UpcomingMoviesSchema,'UpComingMovies');
export default UPCOMING;