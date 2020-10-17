import React, { useEffect, useState } from 'react';

const FeedBack = () => {
 const [feedbacks,setFeedbacks] =useState()
 useEffect(() =>{

    fetch  ('https://creative-agency-99.herokuapp.com/feedbacks')
    .then(res=>res.json())
    .then(data=>setFeedbacks(data))

    },[])

    return (
       <div className="container pb-5 mt-5">
             <h4 style={{fontWeight:"bold",color:"black",padding:"30px",marginTop:"40px"}} className="text-center">Clients<span style={{color:"#7AB259"}}> Feedback</span></h4>
            <div className="row">
                {/* <div className="offset-3"></div> */}
            {feedbacks && feedbacks.map((feedback=><div style={{border: '1px solid #E5E5E5',borderRadius:"8px",height:"170px"}} className=" offset-1 col-md-3 mt-3">
               <div className="d-flex flex-row justify-content-start pt-2">

               <div>
              <img style={{width:"7vh",borderRadius:"50%"}} src={feedback.picture} alt=""></img>
               </div>
               <div className="mt-2 ml-2 text-left"> <h5  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"800"}}>{feedback.name}</h5>
    <h6  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"600"}}>{feedback.title}</h6></div>
               </div>
               <div>
               <p className="text-muted text-left"><small>{feedback.desc}</small></p>
               </div>


            </div>))}

        </div>
       </div>
    );
};

export default FeedBack;