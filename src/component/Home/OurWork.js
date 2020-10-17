import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../icons/carousel-1.png'
import carousel2 from '../icons/carousel-2.png'
import carousel3 from '../icons/carousel-3.png'
import works from './work.css'
const OurWork = () => {
    return (<div className="container" style={{background:"#000000"}}>      
          <h4 style={{fontWeight:"bold",color:"white",padding:"30px",marginTop:"40px"}} className="text-center">Here are some of  <span style={{color:"#7AB259"}}> our works</span></h4> 
           <Carousel autoplay>
            
        <div>
            <img style={{width:"auto",height:"450px"}} src={carousel1} />
          
        </div>
        <div>
            <img style={{width:"auto",height:"450px"}} src={carousel2} />
            
        </div>
        <div>
            <img style={{width:"auto",height:"450px"}} src={carousel3} />
         
        </div>
    </Carousel></div>
    );
};

export default OurWork;