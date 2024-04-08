import MOVIES from "../../Models/Movies.js";
import UPCOMING from "../../Models/UpComingMovies.js";

export const home=async(req,res)=>{
  try {
    console.log('Home Section');
    let ComingSoon=await UPCOMING.find()
    let movies=await MOVIES.find()
    // console.log(ComingSoon,movies);
    res.status(200).json({allData:movies,ComingSoon})
    
  } catch (error) {
    console.error('Error From Home',error);
  }
}