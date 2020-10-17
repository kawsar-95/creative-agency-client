import React, { useEffect, useState } from 'react';

const AdminServiceList = () => {
    const [serviceList, setServiceList]=useState([])

    useEffect(() =>{
    fetch ('https://creative-agency-99.herokuapp.com/getServiceList')
    .then(res =>res.json())
    .then(data =>setServiceList(data))

    },[])


    return (

    <div className="row">
{serviceList.map(service =><div style={{height:"170px"}} className="col-md-3"><div className="card-deck d-flex align-items-center">
  <div class="card">
    <img className="img-responsive mt-5" style={{width:"100px",borderRadius:"100%",justifyContent:"center",margin:"auto",textAlign:"center",paddingTop:"10px"}} src={service.picture} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h6 style={{fontWeight:"bold",fontFamily: "'Poppins', sans-serif"}} class="card-title">{service.name}</h6>
      <p style={{ fontFamily: "'Poppins', sans-serif",fontSize:"14px"}} class="card-text">{service.details}</p>
    <p style={{ fontFamily: "'Poppins', sans-serif",fontWeight:"700"}}
     className="text-danger">{service.price}</p>

    </div>
  </div>

</div></div>

)}

    </div>

    );
};

export default AdminServiceList;