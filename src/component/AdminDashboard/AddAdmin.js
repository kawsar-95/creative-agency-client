import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { UserContext } from '../../App';
const AddAdmin = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) =>{



        fetch('https://creative-agency-99.herokuapp.com/addAdmin',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({...data})
        })
        .then(res =>res.json())

            .then(data=>{
                if(data){
                    alert("New Admin Has Been")
                }
            })

      };
    return (
        <div>
         <form onSubmit={handleSubmit(onSubmit)} >





    <input name="email" className="form-control w-50" defaultValue={loggedInUser.email}  placeholder="Your Email" ref={register({ required: true })} />
    {errors.email && <span className="error">Email is required</span>}<br></br>

    <input className="form-control" style={{ width:'15%',backgroundColor:"#111430",color:"white",fontSize:"22px",borderRadius:"15px"}} type="submit" />



  </form>
        </div>
    );
};

export default AddAdmin;