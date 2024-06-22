import springedge from "springedge";

export const otpGeneration = (req, res) => {
  try {
    console.log("OTP SECTION");
    let {otp,mobile}=req.body
    console.log(`${otp} 91${mobile}`);
    const params = {
      'sender': 'SEDEMO', 
      'apikey': '621492a44a89m36c2209zs4l7e74672cj', 
      'to': [`91${mobile}`],
      'message': `Hello ${otp}, This is a test message from spring edge`, 
      'format': 'json'
    };

    springedge.messages.send(params, 5000, function (err, response) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Failed to send OTP' });
      }
      console.log(response);
     return  res.status(200).json({ message: 'OTP sent successfully', response });
    });

  } catch (error) {
    console.error("Error in OTP Generation:", error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};


export const ticketSend=(mobile,ticketID)=>{
    console.log("Ticket id sending section",mobile,ticketID);
    let tickeDetails=`Ticket: ${ticketID}`
    console.log(tickeDetails);
    return new Promise((resolve,reject)=>{
        const params = {
            'sender': 'SEDEMO', 
            'apikey': '621492a44a89m36c2209zs4l7e74672cj', 
            'to': [`91${mobile}`],
            'message': `Hello ${tickeDetails}, This is a test message from spring edge`, 
            'format': 'json'
          };
          springedge.messages.send(params, 5000, function (err, response) {
            if (err) {
              console.log(err);
              reject({ error: 'Failed to send Ticket ID' });
            }
            console.log(response);
            resolve({ message: 'Ticket ID sent successfully', response });
          });

    })

}