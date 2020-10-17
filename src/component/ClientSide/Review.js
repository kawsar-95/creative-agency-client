import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';


const Review = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{
      const picture=loggedInUser.picture;


        fetch('https://creative-agency-99.herokuapp.com/placeReview',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({...data,picture})
        })
        .then(res =>res.json())

            .then(data=>{
                if(data){
                    alert("Thank you for the Review")
                }
            })

      };
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)} >



    <input className="form-control w-50" name="name" defaultValue={loggedInUser.name}  placeholder="Your Name/Company's Name" ref={register({ required: true })} />
    {errors.name && <span className="error">Name is required</span>}<br></br>


    <input name="title" className="form-control w-50"  placeholder="Company's Name & Designation" ref={register({ required: true })} />
    {errors.title && <span className="error">Designation is required</span>}<br></br>



    <textarea class="form-control mt-3 w-50" name="desc" id="exampleFormControlTextarea1" ref={register({ required: true })} placeholder="Your Message" rows="5"/>
    {errors.desc && <span className="error">Description is required</span>}<br></br>





      <input className="form-control" style={{ width:'10%',backgroundColor:"red",color:"white",fontSize:"22px",borderRadius:"15px"}} type="submit" />



  </form>
        </div>
    );
};

export default Review;