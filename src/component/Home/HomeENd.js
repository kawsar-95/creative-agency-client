import React from 'react';

const HomeENd = () => {
    return (
        <div className="container-fluid pt-5 mt-5 pb-5" style={{background:"#FBD062"}}>
            <div className="row">
                <div className="col-md-5 offset-1">
                <h2 style={{letterSpacing:"-1px",color:"#111430",fontSize:"34px",fontWeight:"700"}} className="text-left mt-5">Let us handle your<br/> project, professionally </h2>
                <p className="text-left mt-3">With well written codes, we build amazing apps for all<br></br> platforms, mobile and web apps in general. </p>
                </div>
                <div className="col-md-5">
                <form>
  <div class="form-group">
    
    <input type="text" class="form-control w-75"  id="formGroupExampleInput" placeholder="Your Email Address"></input>
  </div>
  <div class="form-group">

    <input type="text" class="form-control w-75" id="formGroupExampleInput2" placeholder="Your Name / Company's Name"></input>
    <textarea class="form-control mt-3 w-75" id="exampleFormControlTextarea1" placeholder="Your Message" rows="5"></textarea>
    <button style={{background: '#111430',color:"white"}} className="btn btn-default pl-5 pr-5 mt-3 text-left d-flex flex-column justify-content-start">Send</button>
  </div>
</form>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5 pt-5">
                <div >
                    <p >copyright Orange labs 2020</p>
                </div>

            </div>
        </div>
    );
};

export default HomeENd;