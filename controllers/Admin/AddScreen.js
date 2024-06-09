import SCREEN from "../../Models/Screen.js";

export const AddScreens=async()=>{
    try {
        console.log("add screen section");
        const newScreen = new SCREEN({
            screen: 'SCREEN 2',
            movie: 'Anchakkallakokkan',
            totalSeat: 100,
            times: ["10:00 AM","1:30PM","7:00 PM", "10:00 PM"]
        });

        const response = await newScreen.save();
        console.log("Screen added successfully:", response);

    } catch (error) {
        console.error("Error From AddScrees",error);
    }
}