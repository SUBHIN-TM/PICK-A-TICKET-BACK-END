import MOVIES from "../../models/movies.js";
import SCREEN from "../../models/screen.js";
import UPCOMING from "../../models/upComingMovies.js";

export const home=async(req,res)=>{
  try {
    console.log('Home Section');
    let ComingSoon=await UPCOMING.find()
    let movies = await MOVIES.find().sort({"name":1});
    let screens=await SCREEN.find()
    console.log(movies);
    res.status(200).json({allData:movies,ComingSoon,screens})
    
  } catch (error) {
    console.error('Error From Home',error);
  }
}