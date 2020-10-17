import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import services from './services.css'

const Services = () => {
  const [services, setServices]= useState([])
  const [newServices,setNewServices]=useState([])
  useEffect(() =>{

  fetch  ('https://creative-agency-99.herokuapp.com/services')
  .then(res=>res.json())
  .then(data=>setServices(data))

  },[])
  useEffect(() =>{

    fetch  ('https://creative-agency-99.herokuapp.com/addNewService')
    .then(res=>res.json())
    .then(data=>setNewServices(data))

    },[])


    return (
        <div className="container">
                <h4 style={{fontWeight:"bold",padding:"30px",marginTop:"40px"}} className="text-center">Provide Awesome <span style={{color:"#7AB259"}}> Services</span></h4>
        <div className="row">

            {
              services.map(service =>
               <div className="col-md-4 serviceStyle"> <Link to="/clientDash/"><div className="service">

                    <img  className="img-responsive w-25" alt="" src={service.picture}></img>
                    <h5 className="service" style={{textDecoration:"none"}} className="hStyle">{service.name}</h5>
                    <p className="service"><small>{service.desc}</small></p></div></Link>




                  </div>)
            }
             {
              newServices.map(service =>
               <div className="col-md-4 serviceStyle"> <Link to="/clientDash/"><div className="service">

                    <img className="img-responsive w-25" alt="" src={`data:image/png;base64,${service.image.img}`}></img>
                    <h5 className="hStyle">{service.name}</h5>
                    <p><small>{service.details}</small></p></div></Link>




                  </div>)
            }
        </div>
        </div>
    );
};

export default Services;