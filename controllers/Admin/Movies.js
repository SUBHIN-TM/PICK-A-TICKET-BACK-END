import MOVIES from "../../models/Movies.js";
import path from 'path'

console.log();
export const AddMovies=async()=>{
    try {
        console.log("Add Movies Section");
const allData=[
    {
      name: 'Premalu',
      language:'Malayalam',
      duration: "2Hr 36 Mins",
      date:"from - to",
      ticketPrice:'500',
      image: "https://www.sandhyacinehouse.com/uploads/1707217228.jpg",
      ticket:150,
      type:"2D",
      genre:"Comedy,Romance",
      releaseRange:{from: new Date("2024-06-06"),
                    to:new Date("2024-06-30")}
    },
    {
      name: 'Manjummal Boys',
      language:'Malayalam',
      duration: "2Hr 15 Mins",
      image: "https://www.sandhyacinehouse.com/uploads/1707195045.jpg",
      ticket:150,
      type:"2D",
      genre:"Horror,Thriller",
      releaseRange:{from: new Date("2024-06-06"),
                    to:new Date("2024-06-30")}
    },
    {
      name: 'Maharaja',
      language:'Tamil',
      duration: "2Hr 6 Mins",
      image: "https://res.cloudinary.com/dsgctlkzt/image/upload/v1719047823/PickaTicket/maharaja_kdh9q6.jpg",
      ticket:150,
      type:"2D",
      genre:"Action,Drama,Thriller",
      releaseRange:{from: new Date("2024-06-07"),
                    to:new Date("2024-06-30")}
    }
  ]

  let result=await Promise.all(
    allData.map((data)=>{
     let write=new MOVIES({
      name:data.name,
      type:data.type,
      language:data.language,
      duration:data.duration,
      image:data.image,
      ticket:data.ticket,
      genre:data.genre,
      releaseRange:data.releaseRange
     })
    return write.save()
    })
  )
  console.log(result)      
    } catch (error) {
        console.error("Error From AddMovies",error);
    }
    }
    


