import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
    movie:{type:String},
    date:{type:String},
    time:{type:String},
    screen:{type:String},
    totalSeats:{ type: Map,
        of: String},
    bookingDetails:[{
    seatNumber:[{type:String}],
    name:{type:String},
    mail:{type:String},
    mobile:{type:Number},
    total:{type:Number},
    paymentId:{type:String}
}]
},{versionKey:false,timestamps:true})

const BOOKING=mongoose.model('Booking',bookingSchema,'Booking')
export default BOOKING;