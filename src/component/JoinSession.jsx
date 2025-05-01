import { useState } from 'react';
import '../static/Home.css'
import { postSession } from '../api/memberApi';

function JoinSession() {

   const [formData, setFormData] = useState({username : "", email : "", mobile : "", date : "", trainer : ""})
       function handleChange(e){
        setFormData(preval => ({...preval, [e.target.name] : e.target.value}))
    }
    async function handleSubmit(e){
        e.preventDefault()
        if(formData.mobile.length !== 10){
            alert("Mobile will be 10 numbers")
            return
        }
        try {
            await postSession(formData);
            alert('Successfully joined the fitness session');
            setFormData({username: "", email: "", mobile: "", date: "", trainer: ""});
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    }
  return (
    <>
      <div className="container-fluid text-light" style={{backgroundColor : "#5d989f"}}>
        <div className="container-fluid mt-5 py-5">
          <div className="row mt-5">
            <div className="col-4 m-auto">
              <h1>Join our Session</h1>
              <form action="" onSubmit={handleSubmit}>
                <div className="input-group mb-3" id="join-input">
                <span className="input-group-text" id="basic-addon1">Username</span>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    placeholder="email-id"
                    aria-label="email-id"
                    aria-describedby="basic-addon1"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Mobile No</span>
                  <input
                    type="number"
                    className="form-control bg-dark text-light"
                    placeholder="Mobile no"
                    aria-label="mobile no"
                    aria-describedby="basic-addon1"
                    name='mobile'
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="Date"
                    className="form-control bg-dark text-light"
                    placeholder="username"
                    aria-label="username"
                    aria-describedby="basic-addon1"
                    min={new Date().toISOString().split("T")[0]}
                    name='date'
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <select
                    className="form-select bg-dark text-light"
                    aria-label="Default select example"
                    name='trainer'
                    value={formData.trainer}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Train With us">Tain With us</option>
                    <option value="Yoga Class">Yoga class</option>
                    <option value="Book Session">Book Session</option>
                  </select>
                </div>
                <button className="btn btn-success" type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinSession;
