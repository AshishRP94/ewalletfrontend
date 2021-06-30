import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import Text3 from "./Text3.jsx";
import Text2 from "./Text3.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';

const MobileRecharge=()=>
{
    
    
    
    const [rplan,setrplan]=useState();

    useEffect(()=>
    {
        document.title="Ewallet | Mobile Recharge";   
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
    


    const mplans=[{no:"0",Detail:"Select",Amount:"Select",Validity:"Select"}
    ,{no:"1",Detail:"140 Local SMS. Maximum 100 SMS per Day",Amount:"13",Validity:"5 Days"},
    {no:"2",Detail:"200 Local and STD SMS. Maximum 100 SMS per Day",Amount:"26",Validity:"14 days"},
    {no:"3",Detail:"340 Local and STD SMS. Maximum 100 SMS per Day",Amount:"34",Validity:"28 days"},
    {no:"4",Detail:"450 Local and STD SMS. Maximum 100 SMS per Day",Amount:"42",Validity:"28 days"},
    {no:"5",Detail:"700 Local and STD SMS. Maximum 100 SMS per Day",Amount:"62",Validity:"28 days"},
    {no:"6",Detail:"1000 Local and STD SMS. Maximum 100 SMS per Day",Amount:"88",Validity:"28 days"},
    {no:"7",Detail:"2400 Local and STD SMS. Maximum 100 SMS per Day",Amount:"218",Validity:"28 days"}]


    const states=[{tvalue:"select",state:"select"},{tvalue:"andhrapradesh",state:"Andhra Pradesh"},{tvalue:"arunachalpradesh",state:"Arunachal Pradesh"},{tvalue:"assam",state:"Assam"},{tvalue:"bihar",state:"Bihar"},{value:"karnataka",state:"Karnataka"},
                {tvalue:"kerala",state:"Kerala"},{tvalue:"chhattisgarh",state:"Chhattisgarh"},{tvalue:"uttarpradesh",state:"Uttar Pradesh"},{tvalue:"goa",state:"Goa"},{tvalue:"gujarat",state:"Gujarat"},
                {tvalue:"haryana",state:"Haryana"},{tvalue:"himachalpradesh",state:"Himachal Pradesh"},{tvalue:"jammuandkashmir",state:"Jammu and Kashmir"},{tvalue:"jharkhand",state:"Jharkhand"},{tvalue:"West Bengal",state:"westbengal"},
                {tvalue:"madhyapradesh",state:"Madhya Pradesh"},{tvalue:"maharashtra",state:"Maharashtra"},{tvalue:"manipur",state:"Manipur"},{tvalue:"mizoram",state:"Mizoram"},{tvalue:"nagaland",state:"Nagaland"},{tvalue:"orissa",state:"Orissa"},
                {tvalue:"punjab",state:"Punjab"},{tvalue:"rajasthan",state:"Rajasthan"},{tvalue:"sikkim",state:"Sikkim"},{tvalue:"tamilnadu",state:"Tamil Nadu"},{tvalue:"telangana",state:"Telangana"},{tvalue:"uttarakhand",state:"Uttarakhand"},
                {tvalue:"tripura",state:"Tripura"}
                ];

    const [amt, setamt] = useState(0);
    console.log(states);

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


    var usernames="";
    if(localStorage.getItem('username')!==null)
    {
        usernames=localStorage.getItem('username');
    }

    const [mobilerecharge,setmobilerecharge]=useState({username:usernames,rechargetype:"",mnumber:"",operator:"",circle:"",plans:"null",amt_paid:""});



    const act=(event)=>
    {
        console.log("act="+event.target.value)



        var low=1;
        var high=mplans.length-1;
        var mid=0;
        while(true)
        {
            if(low>high)
            {
                break;
            }
            mid=((low+high)>>1);
            if((mplans[mid].no)===(event.target.value))
            {
                setamt(mplans[mid].Amount);
                setmobilerecharge
                (
                    {
                        ...mobilerecharge,
                        amt_paid:amt
                    }
                );
                
                setmobilerecharge
                (
                    {
                        ...mobilerecharge,
                        plans:mplans[mid].Detail
                    }
                );
                console.log("found");
                console.log(mplans[mid].no);
                console.log(event.target.value);
                break;
                
            }
            else if((mplans[mid].no)>(event.target.value))
            {
                high=mid-1;  
            }
            else
            {
                low=mid+1;
            }
        }


        // for(let i=0;i<mplans.length;i++)
        // {
        //     if(mplans[i].no===event.target.value)
        //     {
        //         setamt(mplans[i].Amount);
        //         setmobilerecharge
        //         (
        //             {
        //                 ...mobilerecharge,
        //                 amt_paid:amt
        //             }
        //         );
        //     }
        // }
    }

 


    const senddata=(event)=>
    {
        console.log("called send data"+Token)
        console.log(mobilerecharge);

        
        getToken();
        console.log("send data--");
        console.log("Token"+Token);
        console.log("Token"+window.localStorage.getItem('token'));


        
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
            

        
        authaxios.post(`/savemobilerechargedetails`,mobilerecharge)
        .then((response)=>
        {
            console.log("sucess");
            console.log(response);
            updateuserdetails();
            toast("Payment Sucessfull");
            // window.location.replace("http://localhost:3000/home");
        },
        (error)=>
        {
            console.log("fail");
            console.log(error);
            toast.error("Transaction Failed");

        });
        event.preventDefault();
    }


    const [flag1,setflag1]=useState(false);


    return(
        <>
        <ToastContainer/>
        <section className="form">
            <br/>
            <br/>
                <div style={{}} className="bg-light text-dark" >
                <center>
                        <form onSubmit={senddata}>
                        <h3>Mobile Recharge/Payment</h3>

                        <Radio  name="rechargetype" flag={setflag1}  data={mobilerecharge} fun={setmobilerecharge}  id="prepaid"  lname="prepaid"/>
                        <Radio  name="rechargetype" flag={setflag1}  data={mobilerecharge} fun={setmobilerecharge}  id="postpaid" lname="postpaid"/>
                        <Text1 type="number" name="number"  data={mobilerecharge} fun={setmobilerecharge}  lname="mobile phone number" id="number" tclass="form-control"/>
                        <span>Operator</span>
                        <select onChange={
                            (event)=>
                            {
                                setmobilerecharge
                                (
                                    {
                                        ...mobilerecharge,
                                    operator:event.target.value
                                    }
                                );
                            }
                        } style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                            <option  value="select">Select</option>
                            <option  value="aitel">Airtel</option>
                            <option  value="bsnl">Bsnl</option>
                            <option  value="vi">Vi</option>
                            <option  value="jio">Jio</option>
                        </select>
 

                        <span>Circle</span>
                        <select onChange={(event)=>
                        {
                            setmobilerecharge
                            (
                                {
                                    ...mobilerecharge,
                                    circle:event.target.value
                                }
                            );

                        }} style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                        {
                            states.map((a)=>
                            <option value={a.vaue}>{a.state}</option>)
                        }
                        </select>

                        {(flag1===false)
                        ?
                        <>

                        </>
                        :
                        <>
                        {(document.getElementById("prepaid").checked===true)
                        ?
                        <>
                        <span>Plans</span>
                        <select onChange={act} style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} id="rechargeplans" class="form-select" aria-label="Default select example">
                        {
                            mplans.map((a)=>
                            <option value={a.no}>{a.Detail}</option>)
                        }
                        </select>
                        <Text3 lid="plan"  type="text" name="amt_paid"  val={amt}  lname="Recharge Amount"   id="mrechargeamount" tclass="form-control"/>

                        </>
                        :

                        <>
                        <Text3 lid="plan"  type="text" name="amt_paid" data={mobilerecharge} fun={setmobilerecharge}  lname="Pay Bill"  id="mrechargeamount" tclass="form-control"/>
                        </>
                    
                        }
                        </>
                        }

                      

                     
                        
                        


                   
                        



                        {/* <Postpaid/> */}

                       

                        <br/>
                        {/* {(rplan==="prepaid")?<Prepaid/>:<Postpaid/>} */}
                        <button type="submit" class="btn btn-primary">Pay</button>
                        &nbsp;
                        <button type="reset" class="btn btn-primary">Reset</button>

                        </form>
                </center>
                </div>
            </section>

        </>
    );
}


export default MobileRecharge;