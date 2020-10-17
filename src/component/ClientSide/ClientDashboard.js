import React, { useContext, useState } from 'react';
import Order from './Order';
import Review from './Review';
import ServiceList from './ServiceList';
import logo from '../logo.png';
import { UserContext } from '../../App';
import * as FaIcons from 'react-icons/fa';
import dashboard from './ClientDashboard.css'



const ClientDashboard = () => {
   
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Order");
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const handleOrders = () => {
        setCount(0);
        setName("Order");
    }
    const handleList = () => {
        setCount(1);
        setName("Service List");
    }
    const handleReview = () => {
        setCount(2);
        setName("Review");
    }

    const handleSignOut = () => {
        const newUser={
            name:"",
            email:""
        }
        setLoggedInUser(newUser)
    }
    return (
        <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-md-2 ">
                    <img src={logo} className="w-75" alt=""></img>
                    <div className="d-flex flex-column pt-5 justify-content-start">
                    <button  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default " onClick={()=>handleOrders()}><FaIcons.FaShoppingCart/> Order</button>
                    <button style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default" onClick={()=>handleList()}><FaIcons.FaDev/> Service List</button>
                    <button style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default" onClick={()=>handleReview()}><FaIcons.FaIcons/> Review</button>
                    <button style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default" onClick={()=>handleSignOut()}><FaIcons.FaSignOutAlt/> Sign Out</button>
                    
                    </div>

                </div>

                <div className="col-md-10 bg-light" >
                    <div >
    <h5 className="text-left mt-3">{name}</h5>
    <h5 className="text-right">{loggedInUser.name}</h5>
                    </div>

                    <div style={{backgroundColor:"#F4F7FC",paddingTop:"20px"}}>{count===0 && <div>
                      <Order></Order>  </div>}
                      {count===1 && <div>
                      <ServiceList/>  </div>}
                      {count===2 && <div>
                      <Review></Review>  </div>}</div>
                  
                </div>
            </div>
            
        </div>
    );
};

export default ClientDashboard;