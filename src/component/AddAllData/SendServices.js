import React from 'react';

const SendServices = () => {
    const feedbacks = [
        { name:"Nash Patrick",
          desc:"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
          picture:"https://i.ibb.co/7Q35RxB/customer-1.png",
          title:"CEO, Manpol"
      },
      { name:"Mirriam Barron",
      desc:"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      picture:"https://i.ibb.co/XY9DHq7/customer-2.png",
      title:"CEO, Manpol"
  },
  { name:"Bria Malone",
  desc:"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  picture:"https://i.ibb.co/mCtNKdx/customer-3.png",
  title:"CEO, Manpol" }


   ]
    const handleData = ()=>{

        fetch('https://creative-agency-99.herokuapp.com.comcy-parijat.herokuapp.com/addAllFeedbacks',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(feedbacks)
        })
      }
        return (
            <div>
         <button onClick={handleData()}>Add All Feedbacks</button>
            </div>
        );
    };

export default SendServices;