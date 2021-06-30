
import Text1 from "./Text1.jsx";
import CHeader from "./Header.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import React ,{useState,useEffect, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer.jsx";
const Loginregform=()=>
{

    // document.getElementById('mbody').setAttribute("style", "background-color:rgba(11, 8, 36, 0.87)");
    // {top:"50%",positiocn:"absolute",left:"50%"}
    return(
        <> 
                <ToastContainer/>

        <div style={{}} >
        <navbar>
        <CHeader/>
        </navbar>


        <center>
        <div  style={{}}>
        <Switch>

        <Route path="/loginandsignup/logout"  exact  component={Register}/>
        <Route path="/loginandsignup/login"  exact  component={Login}/>

        </Switch>
        
        </div>
        </center>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
        </>
    );

} 

export default Loginregform;