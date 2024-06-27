import UPCOMING from '../../models/upComingMovies.js'
export const  AddUpcomingMovies = async (req, res) => {
    try {
        console.log("Upcoming Movies ADDING Section");
        const ComingSoon =[{image:"https://res.cloudinary.com/dsgctlkzt/image/upload/v1719479080/PickaTicket/wtjidg4gfrwv3idf77nf.jpg",name:"ARM"},{image:"https://res.cloudinary.com/dsgctlkzt/image/upload/v1719479134/PickaTicket/sjjeqawnrrtgbxuycnw4.jpg",name:"Barroz"},{image:"https://res.cloudinary.com/dsgctlkzt/image/upload/v1719479183/PickaTicket/m4caxd12bmidkl0hywu8.jpg",name:"Thalavan"},{image:"https://res.cloudinary.com/dsgctlkzt/image/upload/v1719479250/PickaTicket/ywzualovyqdhixtqq8gf.jpg",name:"Pushpa"},{image:"https://res.cloudinary.com/dsgctlkzt/image/upload/v1719479354/PickaTicket/rzzbeqbwk3ge5lkp51mg.jpg",name:"Ram"},{image:"https://www.sandhyacinehouse.com/uploads/1705558971.jpg",name:"Varshanglku Sesham"}]
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

