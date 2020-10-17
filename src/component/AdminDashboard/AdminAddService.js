import React, { useState } from 'react';

const AdminAddService = () => {
    const [info,setInfo]=useState({})
    const [file,setFile]=useState(null)
    const handleBlur =e =>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile=e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('details', info.details)

        fetch('https://creative-agency-99.herokuapp.com/addAService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert('New Service Has Been Added')
         document.getElementById('exampleName').value=""
         document.getElementById('exampleDetails').value=""
         document.getElementById('exampleFile').value=""

        })
        .catch(error => {
          console.error(error)
        })

    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
  <div class="form-group">

    <input onBlur={handleBlur} name="name" type="text" class="form-control w-50" id="exampleName" placeholder="Service Name" aria-describedby="emailHelp"/>

  </div>
  <div class="form-group">

  <textarea onBlur={handleBlur} class="form-control mt-3 w-50" name="details" id="exampleDetails" placeholder="Service Details" rows="5"/>
  </div>

  <div class="form-group">

    <input onChange={handleFileChange} type="file" placeholder="upload image" class="form-control w-50 pb-3" id="exampleFile"/>
  </div>

  <button  type="submit" class="btn btn-primary text-left d-flex justify-content-start">Submit</button>
</form>
        </div>
    );
};

export default AdminAddService;