import SCREEN from "../../models/screen.js";

export const AddScreens=async()=>{
    try {
        console.log("add screen section");
        const newScreen = new SCREEN({
            screen: 'SCREEN 2',
            movie: 'Maharaja',
            totalSeat: 100,
            times: ["9:30 AM","11:30 PM"]
        });

        const response = await newScreen.save();
        console.log("Screen added successfully:", response);

    } catch (error) {
        console.error("Error From AddScrees",error);
    }
}