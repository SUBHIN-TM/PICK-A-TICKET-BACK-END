import MOVIES from "../../models/Movies.js";
import SCREEN from "../../models/Screen.js";
import UPCOMING from "../../models/UpComingMovies.js";

export const home=async(req,res)=>{
  try {
    console.log('Home Section');
    let ComingSoon=await UPCOMING.find()
    let movies=await MOVIES.find()
    let screens=await SCREEN.find()
    // console.log(movies);
    res.status(200).json({allData:movies,ComingSoon,screens})
    
  } catch (error) {
    console.error('Error From Home',error);
  }
}