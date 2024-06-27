import UPCOMING from '../../models/upComingMovies.js'
export const  AddUpcomingMovies = async (req, res) => {
    try {
        console.log("Upcoming Movies ADDING Section");
        const ComingSoon =[{image:"https://www.sandhyacinehouse.com/uploads/1706082271.jpg",name:"Avesham"},{image:"https://www.sandhyacinehouse.com/uploads/1706165793.jpg",name:"Turbo"},{image:"https://www.sandhyacinehouse.com/uploads/1688814153.jpg",name:"Barroz"},{image:"https://www.sandhyacinehouse.com/uploads/1706166208.jpg",name:"Thalavan"},{image:"https://www.sandhyacinehouse.com/uploads/1711173149.jpg",name:"Pavi Care Taker"},{image:"https://www.sandhyacinehouse.com/uploads/1711173475.jpg",name:"Nadikar"},{image:"https://www.sandhyacinehouse.com/uploads/1695969063.jpg",name:"Ram"},{image:"https://www.sandhyacinehouse.com/uploads/1705558971.jpg",name:"Varshanglku Sesham"}]
        const result=await Promise.all(ComingSoon.map((data)=>{
            const write=new UPCOMING({
                name:data.name,
                image:data.image
            });
            return write.save();
        }))
     
       console.log(result);
        res.status(200).send(" Upcoming movies added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error",error);
    }
}

