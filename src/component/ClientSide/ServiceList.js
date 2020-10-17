import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const ServiceList = () => {
    const [services,setServices] =useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);


   useEffect(() =>{
       fetch ('https://creative-agency-99.herokuapp.com/serviceList?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>{

           setServices(data);

       });



   },[])

    return (
        <div className="row" >
            <div className="offset-1"></div>
            {services.map(service =><div style={{height:"150px",verticalAlign:"Center"}} className="col-md-3 bg-light pt-3 pb-3 d-flex flex-column align-items-center">
    <h5 className="mt-3"  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700"}}>Service Type: {service.description}</h5>
    <h6  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"600"}}>Details: {service.details}</h6>
    <h6  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"600",color:"red"}}>Price: {service.price}</h6>


                </div>
                )}
        </div>
    );
};

export default ServiceList;