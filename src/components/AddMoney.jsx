import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import Text2 from "./Text2.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';

const AddMoney=()=>
{
    const [pmode,setpmode]=useState("null");
    
    var Token="";

    const updateuserdetails=()=>
    {
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

       
    useEffect(()=>
    {
        document.title="Ewallet | Home| AddMoney";   
    },[]);



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


    const [addmoney, setaddmoney] = useState({username:usernames,mode:"null",money:"null",bank:"null",accno:"null",crn:"null"
    ,bankingpassword:"null",cardnumber:"null",month:"null",year:"null",ccv:"null"})

    const act=(event)=>
    {
        setpmode(event.target.value);
        setaddmoney(
            {
                ...addmoney,
                mode:event.target.value
            }
        );
    }

    const act1=(event)=>
    {
        setaddmoney(
            {
                ...addmoney,
                bank:event.target.value
            }
        );
    }
    // var bool=true;

    const senddata=(event)=>
    {
        const suburl="saveaddmoneydetails";
        console.log("called send data ")
        console.log(addmoney);
  
        authaxios.post(`/${suburl}`,addmoney)
        .then((reponse)=>
        {
            updateuserdetails();
            console.log("yoooooooo");
            localStorage.setItem('walletamount',40000000);
            toast("Money Added Sucessfully")
            console.log("sucess");
        },
        (error)=>
        {
            toast.error("Transaction Failed")
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
            <div style={{}}  className="bg-light text-dark" >
                <center>
                        <form onSubmit={senddata}>
                        <h3>Add Money</h3>

                        <Text1 type="number" name="money" data={addmoney} fun={setaddmoney} lname="Add Money" id="admoney" tclass="form-control"/>
                        <span>Select Payment Mode</span>
                        <select onChange={act}  style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                            <option  value="select">Select</option>
                            <option  value="netbanking">NetBanking</option>
                            <option  value="creditcard">Credit Card/Debit Card</option>
                        </select>
                        {(pmode==="netbanking")
                        ?
                        <>
                            <Text1 type="text" name="cardnumber" data={addmoney} fun={setaddmoney}lname="Card Number" id="adcreditno"  tclass="form-control dclass"/>
                            <Text2 type="text" name="month"  data={addmoney} fun={setaddmoney} lname="Month" id="admonth"  tclass="form-control dclass"/>
                            <Text2 type="text" name="year"  data={addmoney} fun={setaddmoney} lname="Year" id="adyear"  tclass="form-control dclass"/>
                            <Text2 type="number" name="ccv"  data={addmoney} fun={setaddmoney} lname="Ccv" id="adccv"  tclass="form-control dclass"/>
                        </>
                        :
                        (pmode==="creditcard")
                        ?
                        <>
                        <p>Select your Bank</p>
                        <select onChange={act1}  style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                            <option  value="select">Select</option>
                            <option  value="hdfcbank">HDFC Bank</option>
                            <option  value="axisbank">Axis Bank</option>
                            <option  value="kotakbank">Kotak Bank</option>
                            <option  value="punjabnationalbank">Punjab National Bank</option>
                            <option  value="icicibank">ICICI Bank</option>
                        </select>
                        <Text1 type="password" name="accno"  data={addmoney} fun={setaddmoney} lname="Enter Account Number" id="adaccno"  tclass="form-control"/>
                        <Text1 type="text" name="crn"  data={addmoney} fun={setaddmoney} lname="Enter Crn" id="adcrn"  tclass="form-control"/>
                        <Text1 type="password" name="bankingpassword"  data={addmoney} fun={setaddmoney}  lname="Enter Net Banking Password" id="adpass"  tclass="form-control"/>
                        </>
                        :
                        <>
                        </>
                        }

                        {/* <Postpaid/> */}

                       

                        <br/>
                        {/* {(rplan==="prepaid")?<Prepaid/>:<Postpaid/>} */}
                        <button type="submit" class="btn btn-primary">Submit</button>
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

export default AddMoney;