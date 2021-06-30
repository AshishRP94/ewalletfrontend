import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';
import React ,{useState,useEffect, useContext} from 'react';


const TransferMoney=()=>
{
    
    useEffect(()=>
    {
        document.title="Ewallet | Home| Transfer Money";   
    },[]);


    
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
    
    
    var usernames="";
    if(localStorage.getItem('username')!==null)
    {
        usernames=localStorage.getItem('username');
    }
    

    const [tmoney,settmoney]=useState({username:usernames,tusername:"",money:""});

    
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

    
    const senddata=(event)=>
    {
        console.log("called send data ")
        console.log(tmoney);
        
        const suburl="savetransfermoneydetails";
        authaxios.post(`/${suburl}`,tmoney)
        .then((reponse)=>
        {
            updateuserdetails();
            toast("Money Transfered Sucessfully");
            console.log("sucess");
            // window.location.replace("http://localhost:3000/home");
        },
        (error)=>
        {
            toast.error("Transaction Failed");
            console.log("fail");
        });

        event.preventDefault();
    }

    return(
        <>
        <ToastContainer/>
        <section className="form">
            {/* <br/><br/><br/><br/><br/><br/><br/><br/> */}
            <br/>
            <br/>
            
                    <div style={{}} className="bg-light text-dark" >
                <center>
                        <form onSubmit={senddata}>
                        <Text1 type="text" name="tusername"  data={tmoney} fun={settmoney}  lname="Enter Username" id="tmno"  tclass="form-control"/>
                        <Text1 type="text" name="money"  data={tmoney} fun={settmoney}  lname="Enter Money" id="tmnmoney"  tclass="form-control"/>
                        <br/>
                        {/* {(rplan==="prepaid")?<Prepaid/>:<Postpaid/>} */}
                        <button type="submit" class="btn btn-primary">Proceed</button>
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


export default TransferMoney;