import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';

 
const Login=()=>
{

    useEffect(()=>
    {
        document.title="Ewallet | login";   
    },[]);

    var Token="";






    const [logindetails,setlogindetails]=useState({username: "",password: ""});
    
    const getToken=()=>
    {
        if(localStorage.getItem('token')!=null)
        {
            Token=window.localStorage.getItem('token');
            console.log("Token");
            console.log(Token);
        }
        
    }

    var apiUrl=`${url}`;  

    const getuserdetails=()=>
    {
        console.log("get data of user");
        var param="";

        if(window.localStorage.getItem('username')!==null)
        {

            param=window.localStorage.getItem('username');
            console.log(param);
        }
        const authaxios=axios.create
            ({
                baseURL:apiUrl,
                headers:
                {
                    Authorization:`${window.localStorage.getItem('token')}`,
                },
            });

        

        console.log("param="+param)
        console.log("Token="+window.localStorage.getItem('token'))
        console.log("Token------------------="+Token)

        authaxios.get(`/get/${param}`)
        .then((response)=>
        {
            console.log(response);

            console.log(response.data.walletamount);
            const amt=response.data.walletamount;
            if(amt===null)
            {
                console.log("amt="+amt);
                window.localStorage.setItem('walletamount',0);
            }
            else
            {
                const amt1=parseInt(response.data.walletamount);
                console.log("amt1="+amt1);
                window.localStorage.setItem('walletamount',amt1);

            }
            console.log("sucess");
        },
        (error)=>
        {
            console.log(error);
            console.log("fail");

        });

    }

    const funlogin=(event)=>
    {
        console.log("call fun login")
        axios.post(`${url}/generatetoken`,logindetails)
        .then((response)=>
        {
            var token=JSON.stringify(response.data);
            token=token.substring(7,token.length-1);
            console.log(token);
            var bearer="Bearer ";
            var finaltoken=bearer.concat(token);
            window.localStorage.setItem('token',finaltoken);
            const username=logindetails.username;
            console.log("username")
            console.log(username)
            window.localStorage.setItem('username',username);
            console.log("sucess");
            console.log(window.localStorage.getItem('token'));
            const headeruser=document.getElementById("headeruser").innerText="";
            document.getElementById("headeruserlogout").innerText="logout";
            getToken();
            getuserdetails();
            window.location.replace("http://localhost:3000/home");
        },
        (error)=>
        {
            const headeruser=document.getElementById("headeruser").innerText;
            console.log("fail");
            toast.warn("Check Your Username And Password");
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
                    <br/>
                    <center>
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
                        
                    <form onSubmit={funlogin}>


                            <h3>Login From</h3>
                            <Text1 type="text" name="username" data={logindetails} fun={setlogindetails} lname="username" id="username" tclass="form-control dclass"/>
                            <Text1 type="password" name="password" data={logindetails} fun={setlogindetails} lname="password" id="password" tclass="form-control"/>
                            <br/>
                            <button type="submit" class="btn btn-primary">Submit</button>
                             &nbsp;
                            <button type="reset" class="btn btn-primary">Reset</button>
                            <p>Don't have an account? <Link to="/loginandsignup/logout">Sign up</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Login;