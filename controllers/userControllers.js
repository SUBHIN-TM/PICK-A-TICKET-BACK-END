export const home = (req, res) => {
  console.log("Home section");
  const allData=[
    {
      _id:1,
      name: 'Premalu',
      language:'Malayalam',
      duration: "2Hr 36 Mins",
      image: "https://www.sandhyacinehouse.com/uploads/1707217228.jpg",
      shows: [{
        screen: 'SCREEN - 1',
        time: '8.00 AM',
        seat: 100
      },
      {
        screen: 'SCREEN - 1',
        time: '11.30 AM',
        seat: 100 
      },
      {
        screen: 'SCREEN - 1',
        time: '2.00 PM',
        seat: 100 
      },
      {
        screen: 'SCREEN - 1',
        time: '5.30 PM',
        seat: 100 
      }]
    },
    {
      _id:2,
      name: 'Manjummal Boys',
      language:'Malayalam',
      duration: "2Hr 15 Mins",
      image: "https://www.sandhyacinehouse.com/uploads/1707195045.jpg",
      shows: [{
        screen: 'SCREEN - 2',
        time: '8.00 AM',
        seat: 100
      },
      {
        screen: 'SCREEN - 2',
        time: '11.30 AM',
        seat: 100
      },
      {
        screen:' SCREEN - 2',
        time: '2.00 PM',
        seat: 100 
      },
      {
        screen: 'SCREEN - 2',
        time: '5.30 PM',
        seat: 100 
      }]
    },
    {
      _id:3,
      name: 'Anchakkallakokkan',
      language:'Malayalam',
      duration: "2Hr 6 Mins",
      image: "https://www.sandhyacinehouse.com/uploads/1710842600.jpg",
      shows: [{
        screen: 'SCREEN - 3',
        time: '8.00 AM',
        seat: 100
      },
      {
        screen: 'SCREEN - 3',
        time: '11.30 AM',
        seat: 100
      },
      {
        screen:' SCREEN - 3',
        time: '2.00 PM',
        seat: 100 
      },
      {
        screen:' SCREEN - 3',
        time: '5.30 PM',
        seat: 100 
      }]
    }
  ]


  const ComingSoon =[{image:"https://www.sandhyacinehouse.com/uploads/1706082271.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1706165793.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1688814153.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1706166208.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1711173149.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1711173475.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1695969063.jpg"},{image:"https://www.sandhyacinehouse.com/uploads/1705558971.jpg"}]
 

  res.status(200).json({allData,ComingSoon})
}

