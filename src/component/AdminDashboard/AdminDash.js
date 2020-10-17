import React, { useContext, useState } from 'react';
import logo from '../logo.png';
import { UserContext } from '../../App';
import * as FaIcons from 'react-icons/fa';
import AdminServiceList from './AdminServiceList';
import AdminAddService from './AdminAddService';
import AddAdmin from './AddAdmin';
import { Link } from 'react-router-dom';
const AdminDash = () => {
    const [count,setCount]=useState(0);
  
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const handleOrders = () => {
        setCount(0);
        
    }
    const handleList = () => {
        setCount(1);
     
    }
    const handleReview = () => {
        setCount(2);
       
    }
    return (
        <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-md-2 ">
                    <img src={logo} className="w-75" alt=""></img>
                    <div className="d-flex flex-column pt-5 justify-content-start">
                    <button  style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default " onClick={()=>handleOrders()}><FaIcons.FaThList/> Service List</button>
                    <button style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default" onClick={()=>handleList()}><FaIcons.FaCogs/> Add Service</button>
                    <button style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700", textAlign:"center",marginBottom:"15px"}} className="btn btn-default" onClick={()=>handleReview()}><FaIcons.FaUserPlus/> Make Admin</button>
               </div>
                 
                </div>

                <div className="col-md-10 bg-light" >
                    <div >
   
    <h5 className="text-right">{loggedInUser.name}</h5>
                    </div>

                    <div style={{backgroundColor:"#F4F7FC",paddingTop:"20px"}}>{count===0 && <div>
                      <AdminServiceList/>  </div>}
                      {count===1 && <div>
                      <AdminAddService/>  </div>}
                      {count===2 && <div>
                     <AddAdmin/>  </div>}</div>
                  
                </div>
            </div>
            
        </div>
    );
};

export default AdminDash;