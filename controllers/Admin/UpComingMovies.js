import UPCOMING from '../../Models/UpComingMovies.js'
export const AddUpcomingMovies = async (req, res) => {
    try {
        console.log("Upcoming Movies ADDING Section");
        console.log(req.body);
        const newMovie = new UPCOMING({
            name: "sample", // Assuming the name is sent in the request body
            image: "Sample url" // Assuming the image URL is sent in the request body
        });

        // Save the new document to the database
       let result= await newMovie.save();
       console.log(result);
        res.status(200).send(" Upcoming movies added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}
