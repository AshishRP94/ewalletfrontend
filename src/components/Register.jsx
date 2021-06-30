import React ,{useEffect} from 'react';
import Codes from "./Countrycodes.jsx";
import Text1 from "./Text1.jsx";
import Radio from "./Radio.jsx";
import {Link} from  'react-router-dom';
import Check from "./Check.jsx";
import pimg from "../img/pimg.JPG";
import axios from 'axios';
import {useState} from 'react';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';

const Register=()=>
{
    console.log(Codes);

    const [userdata,setuserdata] = useState({username:"",password:"",mobileno:"",email:"",walletamount:""})

    useEffect(()=>
    {
        document.title="Ewallet | Register";   
    },[]);


    const senddata=(event)=>
    {
        console.log("called send data ")
        const suburl="register";
        axios.post(`${url}/${suburl}`,userdata)
        .then((response)=>
        {
            if(response.data==="username_already_exists")
            {
                toast("Username exists")

            }
            else if(response.data==="sucess")
            {
                toast("sucessfully registered")

            }
            else
            {
                toast.error("internal server error")

            }
            console.log("sucess");

        },
        (error)=>
        {
            console.log("fail");

        });


        event.preventDefault();
    }
    
    return(
        <>
        <section className="form">
            <br/><br/><br/><br/><br/><br/><br/><br/>
             <div className="container col-lg-5 col-md-6 col-sm-12">
                <div style={{}} className="row">
                    <div style={{border:""}} className="card bg-light text-dark" >
                    {/* <form>
                    <center>
                    <br/>
                            <div style={{width:"50%",height:"8%"}} className="card bg-light text-dark">
                            <Link style={{textDecoration: "none"}} to="http://localhost:8080/oauth2/authorization/google"><img style={{width:"25px",height:"25px"}} src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" alt="google icon" />
                            <span style={{color:"black"}}> &nbsp; <button type="submit" onClick={()=>
                            {

                               window.location.replace("http://localhost:8080/oauth2/authorization/google");

                            }} class="btn btn-light">Sign in with Google</button></span></Link>
                            </div>
                            <hr/>
                    </center>
                    </form> */}
                        <form onSubmit={senddata}>

                        <h3>Create Account</h3>
                        <Text1 type="email" name="email" data={userdata} fun={setuserdata} lname="email" id="email" tclass="form-control"/>
                        <Text1 type="text" name="username" data={userdata} fun={setuserdata} lname="username" id="username" tclass="form-control"/>
                        <Text1 type="password" name="password" data={userdata} fun={setuserdata} lname="password" id="password" tclass="form-control"/>
                        <p style={{fontSize:"12px" }} className=" text-dark">password must be at least 6 characters</p>
                        <Text1 type="number" name="mobile" data={userdata} fun={setuserdata} lname="mobile no" id="mobileno" tclass="form-control"/>
                        <br/>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        &nbsp;
                        <button type="reset" class="btn btn-primary">Reset</button>
                        <Check text="By signing up, you agree to Terms and Conditions" id="terms"/>
                        <p>Already have an account? <Link to="/loginandsignup/login">Sign in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        </>
    );


}

export default Register;