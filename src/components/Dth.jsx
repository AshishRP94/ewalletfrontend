import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';

const Dth=()=>
{
    
    useEffect(()=>
    {
        document.title="Ewallet | Dth";   
    },[]);

    const updateuserdetails=()=>
    {
        const apiUrl=`${url}`;
        const authaxios=axios.create
        ({
            baseURL:apiUrl,
            headers:
            {
                Authorization:`${Token}`,
            },
        });

        const param=localStorage.getItem('username');
        authaxios.get(`/get/${param}`)
        .then((response)=>
        {
            console.log(response);
            // console.log(response.data.walletamount);
            const amt=response.data.walletamount;
            if(amt===null)
            {
                console.log("amt="+amt);
                window.localStorage.setItem('walletamount',0);
                document.getElementById('ewamount1').innerText=window.localStorage.getItem('walletamount'); 

            }
            else
            {
                const amt1=parseInt(response.data.walletamount);
                console.log("amt1="+amt1);
                window.localStorage.setItem('walletamount',amt1);
                document.getElementById('ewamount1').innerText=window.localStorage.getItem('walletamount'); 
            }
            console.log("sucess");
        },
        (error)=>
        {
            console.log(error);
            console.log("fail");

        });

    }

    
    
    var Token="";
    const getToken=()=>
    {
        if(localStorage.getItem('token')!==null)
        {
            Token=window.localStorage.getItem('token');
            console.log("Token");
            console.log(Token);
        }
    }
    getToken();
    
    
    var usernames="";
    if(localStorage.getItem('username')!==null)
    {
        usernames=localStorage.getItem('username');
    }
    
    
    
    
    var apiUrl=`${url}`;
    
    const authaxios=axios.create(
        {
            baseURL:apiUrl,
            headers:
            {
                Authorization:`${Token}`,
            },
        }
        );
        
        const [dthdata, setdthdata] = useState({username:usernames,operator:"",subscriberid:"",amt:""})
        
        const act=(event)=>
        {
            setdthdata
            (
                {
                    ...dthdata,
                    operator:event.target.value
                }
                );
            }
            const senddata=(event)=>
            {

                getToken();

                var apiUrl=`${url}`;
        
                const authaxios=axios.create(
                    {
                        baseURL:apiUrl,
                        headers:
                        {
                            Authorization:`${Token}`,
                        },
                    }
                );

                console.log("called send data ")
                const suburl="savedthdetails";
                authaxios.post(`/${suburl}`,dthdata)
        .then((reponse)=>
        {
            console.log("sucess");
            updateuserdetails();
            toast("Payment Sucessfull ");
            // window.location.replace("http://localhost:3000/home");
            
        },
        (error)=>
        {
            console.log("fail");

        });

        event.preventDefault();


    }

    return(
        <>
        <ToastContainer/>
        <section className="form">
            <br/>
            <br/>
            <div style={{}} className="bg-light text-dark" >
                <center>
                        <form onSubmit={senddata}>
                        <h3>Dth</h3>
                        Operator
                        <select onChange={act} style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                            <option  value="d2h">d2h</option>
                            <option  value="tatasky">tata sky</option>
                            <option  value="dishtv">dishtv</option>
                            <option  value="sundirect">sundirect</option>
                            <option  value="airteldigitaltv">airtel digital tv</option>
                        </select>
                            <Text1 type="number" name="subscriberid" data={dthdata} fun={setdthdata}  lname="Subscriber id" id="dthsid"  tclass="form-control"/>
                            <Text1 type="text" name="amt" data={dthdata} fun={setdthdata} lname="Amount" id="dthamount" tclass="form-control"/>
                        <br/>
                        <button type="submit" class="btn btn-primary">Pay</button>
                        &nbsp;
                        <button type="reset" class="btn btn-primary">Reset</button>

                        </form>
                </center>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </section>

        </>



    );
}

export default Dth;