import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminDash from '../AdminDashboard/AdminDash';
import logo from '../logo.png'

const AdminSignIn = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [count,setCount]=useState(0);
    const [errorCount, setErrorCount] = useState(1)
    const onSubmit = (data) =>{

        console.log(data.email)

        fetch('https://creative-agency-99.herokuapp.com/filterAdmin?email='+data.email)
        .then(res=>res.json())
        .then(data=>{
            if(data){


            setCount(1);

            }
        else {
               alert ("You are not admin")
            }


        });


     };

    return (
        <div>
        <div className="container">

         <div className="row">
             <div style={{display:"center",margin:"auto", justifyContent:"center"}} className="mt-5 p-5">

         {  (count===0) &&  <h2 style={{letterSpacing:"-1px",color:"#111430",fontSize:"34px",fontWeight:"700"}} className="text-center mt-5">Admin <span style={{color:"#36A955"}}> Login Panel</span></h2>}
            {(count ===1) && <h2 style={{letterSpacing:"-1px",color:"#111430",fontSize:"34px",fontWeight:"700"}} className="text-center mt-5">Agency Admin <span style={{color:"#36A955"}}> Panel</span></h2>}
            <hr></hr> { count===0 && <div  style={{padding:"30px", border:"2px solid #C7C7C7", verticalAlign:"center"}}>

             <img className="img-responsive pt-5" alt="" src={logo}></img>

             <form onSubmit={handleSubmit(onSubmit)} >





    <input name="email" className="form-control-lg w-100 mt-3" placeholder="Enter Your Email" ref={register({ required: true })} />
    {errors.email && <span className="error">Email is required</span>}<br></br>

    <input className="form-control mt-2 mb-5" style={{ width:'50%',backgroundColor:"#111430",color:"white",fontSize:"22px",borderRadius:"15px"}} type="submit" />



  </form>
  {count===0 && <p className="text-success">Welcome to the Admin Panel</p> }
  </div>}

            </div>


             </div>



        </div>
    {count===1 && <AdminDash></AdminDash>}</div>


    );
};

export default AdminSignIn;