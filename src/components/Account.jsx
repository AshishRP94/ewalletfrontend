import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';



const Account=(props)=>
{

    
    useEffect(()=>
    {
        document.title="Ewallet | Home| Account";   
    },[]);


    const senddetails1=()=>
    {

    }

    
    const senddetails2=()=>
    {
        
    }

    
    const senddetails3=()=>
    {
        
    }

    // data={electricitydetails} fun={setelectricitydetails}
    return(
        <>
        <div className="container-fluid">
        <center>

                
                <span>{props.name}</span>
                <h4>Update Account Details</h4>
                <form  onSubmit={senddetails1}>
                    <Text1 type="text"  name="updatemobileno"  lname="Update Mobile no" id="umobileno"   tclass="form-control"/>
                    <br/>
                    <button type="submit" class="btn btn-primary">Update Mobile No</button>
                </form>

                <br/>
                <br/>


                <form onSubmit={senddetails2}>
                    <Text1 type="text"  name="updatemaileno"  lname="Update Email no" id="uemail"   tclass="form-control"/>
                    <br/>
                    <button type="submit" class="btn btn-primary">Update Email No</button>
                </form>

                <br/>
                <br/>


                <form onSubmit={senddetails3}>
                    <Text1 type="text"  name="updatepassword"  lname="Update Password" id="upassword"   tclass="form-control"/>
                    <br/>
                    <button type="submit" class="btn btn-primary">Update Password</button>
                </form>


        </center>

            </div>
        </>

    );
}


export default Account