import React from 'react';
import frame from '../Frame.png'

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-4 offset-2 d-flex align-items-center">
                <div className="d-flex flex-column justify-content-start" style={{marginTop:"50px"}}>
                <h2 style={{letterSpacing:"-1px",color:"#111430",fontSize:"44px",fontWeight:"800"}} className="text-left">Let's Grow Your<br/> Brand To The<br/> Next Level</h2>
                <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Voluptate nulla quasi doloribus recusandae vitae<br></br> tempore voluptates ut cupiditate dolor. </p>
                <button className="btn w-50 " style={{background:"#111430",color:"white",paddingLeft:"15px",paddingRight:"15px"}}>Hire Us</button>
            </div></div>
            <div className="col-md-5 d-flex justify-content-start">
         <img className="img-responsive w-100 text-left" src={frame} alt=""></img>
            </div>
            
        </div>
    );
};

export default Header; 