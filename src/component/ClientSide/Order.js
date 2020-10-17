import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { UserContext } from '../../App';

const Order = () => {

    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{



        fetch('https://creative-agency-99.herokuapp.com/placeOrder',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({...data,name:loggedInUser.name,picture:loggedInUser.picture})
        })
        .then(res =>res.json())

            .then(data=>{
                if(data){
                    alert("Your Order Has Been Placed")
                }
            })

      };
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)} >



    <input className="form-control w-50" name="name" defaultValue={loggedInUser.name}  placeholder="Your Name/Company's Name" ref={register({ required: true })} />
    {errors.name && <span className="error">Name is required</span>}<br></br>


    <input name="email" className="form-control w-50" defaultValue={loggedInUser.email}  placeholder="Your Email" ref={register({ required: true })} />
    {errors.email && <span className="error">Email is required</span>}<br></br>


    <input className="form-control w-50" name="description" placeholder="Service Name"  ref={register({ required: true })} />
    {errors.description && <span className="error">Description is required</span>}<br></br>

    <textarea class="form-control mt-3 w-50" name="details" id="exampleFormControlTextarea1" ref={register({ required: true })} placeholder="Your Message" rows="5"/>
    {errors.details && <span className="error">Detail is required</span>}<br></br>
    <input className="form-control w-50" name="price" placeholder="Price"  ref={register({ required: true })} />
    {errors.price && <span className="error">Price is required</span>}<br></br>




      <input className="form-control" style={{ width:'50%',backgroundColor:"#111430",color:"white",fontSize:"22px",borderRadius:"15px"}} type="submit" />



  </form>
        </div>
    );
};

export default Order;