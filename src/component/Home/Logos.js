import React from 'react';
import airnb from '../airbnb.png'
import google from '../google.png'
import netflix from '../netflix.png'
import slack from '../slack.png'
import uber from '../uber.png'
const Logos = () => {
    return (
    <div className="container">
        <div className="row" style={{paddingTop:"20px",paddingBottom:"20px"}}>
            <div style={{padding:"5px"}} className="col-md-2 offset-1"><img className="img-responsive" style={{height:"40px"}}  src={airnb} alt=""></img></div>
            <div style={{padding:"5px"}} className="col-md-2"><img className="img-responsive" style={{height:"40px"}} src={google} alt=""></img></div>
            <div style={{padding:"5px"}} className="col-md-2"><img className="img-responsive" style={{height:"40px"}} src={netflix} alt=""></img></div>
            <div style={{padding:"5px"}} className="col-md-2"><img className="img-responsive" style={{height:"40px"}} src={slack} alt=""></img></div>
            <div style={{padding:"5px"}} className="col-md-2 offset-1"><img className="img-responsive"  style={{height:"40px"}} src={uber} alt=""></img></div>
        </div>
    </div>
    );
};

export default Logos;