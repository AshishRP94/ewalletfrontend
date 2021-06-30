import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';

const Electricity=()=>
{
    // var index=0;
    // ,boards:[{board1:"",board2:"",board3:""}]
    

 
    
    const eboards=[{sr:"1",tvalue:"select",state:"select",boards:[{board1:"Select"}]},{tvalue:"andhrapradesh",state:"Andhra Pradesh",boards:[{board1:"Central Power Distribution Company Ltd. of Andhra Pradesh (APCPDCL)"},{board1:"Eastern Power Distribution Co Ltd (APEPDCL)"},{board1:"Southern Power Distribution Co Ltd (APSPDCL)"}]}
,{sr:"2",tvalue:"arunachalpradesh",state:"Arunachal Pradesh",boards:[{board1:"Department of Power, Government of Arunachal Pradesh"}]}
,{sr:"3",tvalue:"assam",state:"Assam",boards:[{board1:"Assam Power Distribution Company Ltd"}]}
,{sr:"4",tvalue:"bihar",state:"Bihar"    ,boards:[{board1:"North Bihar Power Distribution Company Ltd."},{board1:"South Bihar Power Distribution Company Ltd."}]
},{sr:"5",tvalue:"karnataka",state:"Karnataka" ,boards:[{board1:"Bangalore Electricity (BESCOM)"},{board1:"Chamundeshwari Electricity Supply Corporation Limited"},{board1:"Gulbarga Electricity Supply Company Limited (GESCOM)"},{board1:"Hubli Electricity"},{board1:"Mangalore Electricity Supply Co. Ltd (MESCOM)"}]
},{sr:"6",tvalue:"kerala",state:"Kerala",boards:[{board1:"Kannan Devan Hills Plantations Company Private Limited"},{board1:"Kerala State Electricity Board Ltd. (KSEBL)"}]},
{sr:"7",tvalue:"chhattisgarh",state:"Chhattisgarh"    ,boards:[{board1:"Electricity Department Chandigarh"}]
},{sr:"8",tvalue:"uttarpradesh",state:"Uttar Pradesh"    ,boards:[{board1:"Kanpur Electricity Supply Company Ltd"},{board1:"Noida Power Company"},{board1:"Torrent Power - Agra"},{board1:"Uttar Pradesh Power Corp Ltd (UPPCL) - RURAL"},{board1:"Uttar Pradesh Power Corp Ltd (UPPCL) - URBAN"}]
},{sr:"9",tvalue:"goa",state:"Goa",boards:[{board1:"Goa Electricity Department"}]
},{sr:"10",tvalue:"gujarat",state:"Gujarat",boards:[{board1:"Dakshin Gujarat Vij Company Limited (DGVCL)"},{board1:"Gift Power Company Limited"},{board1:"Madhya Gujarat Vij Company Limited (MGVCL)"},{board1:"Paschim Gujarat Vij Company Limited (PGVCL)"},{board1:"Torrent Power - Ahmedabad"},{board1:"Torrent Power - Surat"},{board1:"Uttar Gujarat Vij Company Limited (UGVCL)"}]
},{sr:"11",tvalue:"haryana",state:"Haryana",boards:[{board1:"Dakshin Haryana Bijli Vitran Nigam"},{board1:"Uttar Haryana Bijli Vitran Nigam Limited"}]
},{sr:"12",tvalue:"himachalpradesh",state:"Himachal Pradesh"    ,boards:[{board1:"Himachal Pradesh State Electricity Board"}]
},{sr:"13",tvalue:"jammuandkashmir",state:"Jammu and Kashmir"    ,boards:[{board1:"Jammu and Kashmir Power Development Department"}]
},{sr:"14",tvalue:"jharkhand",state:"Jharkhand"    ,boards:[{board1:"Jamshedpur Utilities & Services Company Ltd (JUSCO)"},{board1:"Jharkhand Bijli Vitran Nigam Limited (JBVNL)"}]
},{sr:"15",tvalue:"West Bengal",state:"westbengal"    ,boards:[{board1:"CESC Limited"},{board1:"India Power Corporation Limited (IPCL)"},{board1:"West Bengal State Electricity Distribution Co. Ltd (WBSEDCL)"}]
},{sr:"16",tvalue:"madhyapradesh",state:"Madhya Pradesh" ,boards:[{board1:"M.P. Madhya Kshetra Vidyut Vitaran - RURAL"},{board1:"M.P. Madhya Kshetra Vidyut Vitaran - URBAN"},{board1:"M.P. Paschim Kshetra Vidyut Vitaran"},{board1:"M.P. Paschim Kshetra Vidyut Vitaran"},{board1:"M.P. Poorv Kshetra Vidyut Vitaran - RURAL"},{board1:"M.P. Poorv Kshetra Vidyut Vitaran - NGB"},{board1:"M.P. Madhya Kshetra Vidyut Vitaran - Flat Rate Agriculture Bill"}]
},{sr:"17",tvalue:"maharashtra",state:"Maharashtra"    ,boards:[{board1:"Adani Electricity"},{board1:"B.E.S.T Mumbai"},{board1:"Maharashtra State Electricity Distribution Company Ltd ( MSEDCL)/ Mahavitran"},{board1:"Tata Power - Mumbai"},{board1:"Torrent Power - Shil, Mumbra & Kalwa"},{board1:"Torrent Power - Bhiwandi"}]
},{sr:"18",tvalue:"mizoram",state:"Mizoram"    ,boards:[{board1:"Power & Electricity Department - Mizoram"}]
},{sr:"19",tvalue:"nagaland",state:"Nagaland"    ,boards:[{board1:"Department of Power, Nagaland"}]
},{sr:"20",tvalue:"orissa",state:"Orissa"    ,boards:[{board1:"NESCO"},{board1:"TP Central Odisha Distribution Limited"},{board1:"SOUTHCO, Odisha"},{board1:"WESCO - Odisha"}]
},{sr:"21",tvalue:"punjab",state:"Punjab"    ,boards:[{board1:"Punjab State Power Corporation Ltd. (PSPCL)"}]
},{sr:"22",tvalue:"rajasthan",state:"Rajasthan"    ,boards:[{board1:"Ajmer Vidyut Vitran Nigam Limited (AVVNL)"},{board1:"Bharatpur Electricity Services Ltd. (BESL)"},{board1:"Bikaner Electricity Supply Limited (BkESL)"},{board1:"Jaipur Vidyut Vitran Nigam (JVVNL)"},{board1:"Jodhpur Vidyut Vitran Nigam Limited (JDVVNL)"},{board1:"Kota Electricity Distribution Limited (KEDL)"},{board1:"TP Ajmer Distribution Ltd (TPADL)"}]
},{sr:"23",tvalue:"sikkim",state:"Sikkim"    ,boards:[{board1:"Sikkim Power - RURAL",board2:"Sikkim Power - URBAN"}]
},{sr:"24",tvalue:"tamilnadu",state:"Tamil Nadu"    ,boards:[{board1:"Tamil Nadu Electricity Board (TNEB)"}]
},{sr:"25",tvalue:"telangana",state:"Telangana"    ,boards:[{board1:"Northern Power Distribution of Telangana Ltd"}]
},{sr:"26",tvalue:"uttarakhand",state:"Uttarakhand"    ,boards:[{board1:"Uttarakhand Power Corporation Limited"}]
},{sr:"27",tvalue:"tripura",state:"Tripura"    ,boards:[{board1:"Tripura Electricity"}]}];

eboards[1].boards.map((a)=>
{
    console.log(a);
});

useEffect(()=>
{
    document.title="Ewallet | Electricity";   
},[]);



const updateuserdetails=()=>
{
    console.log("update user details");
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


const [state,setstate]=useState("select");
const [index,setindex]=useState(0);

const username=localStorage.getItem('username');



 const [electricitydetails, setelectricitydetails] = useState({operators:"",eboard:"",customer_id:"",amount:"",username:username});

 
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
    
    
    //  axios.interceptors.request.use
    //  (
        //      config=>
        //      {
            //         console.log('in interceptors');
            //         getToken();
            //         var temp=window.localStorage.getItem('token');
            //        return config.headers.authorization=`${temp}`;
            //     }
    //     ,
    //     error=>
    //     {
        //        return console.log("error");
    //     }
    // );
    
        
    
    

    const senddata=(event)=>
    {

        // setelectricitydetails
        // (
            //     {
                //         ...electricitydetails,
                //         "username":username
                //     }
                // );
                
                getToken();
                var apiUrl=`${url}`;

                const authaxios=axios.create
                (
                    {
                        baseURL:apiUrl,
                        headers:
                        {
                            Authorization:`${Token}`,
                        },
                });
            
            console.log("called send data ");
            console.log(electricitydetails);
            console.log("-------"+window.localStorage.getItem('token'));
            console.log("-------"+Token);

        authaxios.post(`/saveelectricitydetails`,electricitydetails)
        .then((reponse)=>
        {
            console.log("update user details")
            updateuserdetails();
            console.log("sucess");
            toast("payment sucessfull");
        },
        (error)=>
        {
            toast.error("Transaction Failed");
            console.log(error);
            console.log("fail");

        });

        event.preventDefault();
    }


    const act=(event)=>
    {
        const val=event.target.value;

        
        console.log("val");
        console.log(val);

        console.log(eboards[val].tvalue);

        setindex((val));
        setelectricitydetails
        (
            {
                ...electricitydetails,
                operators:eboards[val].tvalue
            }
        );

        // var low=0;
        // var high=eboards.length-1;
        // var mid=0;
        // while(true)
        // {
        //     if(low>high)
        //     {
        //         console.log("not found");
        //         break;
        //     }

            
            
        //     console.log("high"+high);
        //     console.log("low"+low);
        //     console.log("mid=="+mid);
        //     mid=((low+high)>>1);
        //     if((eboards[mid].sr)===(val))
        //     {
          
        //         console.log("found");
        //         console.log(eboards[mid].sr);
        //         console.log(event.target.value);
        //         console.log("mid"+mid);


        //         setindex(mid);
        //         setelectricitydetails
        //         (
        //             {
        //                 ...electricitydetails,
        //                 operators:eboards[mid].tvalue
        //             }
        //         );
        //         break;
                
        //     }
        //     else if(((val)<eboards[mid].sr))
        //     {
        //         high=mid-1; 
        //     }
        //     else
        //     {
        //         low=mid+1;
        //     }
        // }

        // for(let i=0;i<eboards.length;i++)
        // {
        //     if(val===eboards[i].tvalue)
        //     {
        //         console.log("i="+i);
        //         setindex(i);
        //     }
        // }
        console.log(index);
    }


    const act1=(event)=>
    {
        setelectricitydetails
        (
            {
                ...electricitydetails,
                eboard:event.target.value
            }
        );
    }

    return(
        <>

        <ToastContainer/>
           <section className="form">
            <br/><br/>
            <div style={{}} className="bg-light text-dark">
               
                <center>        

                        <form onSubmit={senddata}>
                        <h3>Electricity</h3>
                       <span>Operators</span>
                       <br/>
                        <select onChange={act}   style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                            {
                                eboards.map((a)=>
                                <option  value={a.sr}>{a.state}</option>
                                )
                            }
                        </select>
                        <span>Select your Electricity Board</span>
                        <br/>
                        <select onChange={act1} style={{width:"40%",borderRadius:"20px 20px 20px 20px"}} class="form-select" aria-label="Default select example">
                            {
                                eboards[index].boards.map((a)=>
                                    <option>{a.board1}</option>
                                )

                            }
                        </select> 
                            <Text1 type="text"  name="customer_id" data={electricitydetails} fun={setelectricitydetails} lname="Customer id" id="eid"   tclass="form-control"/>
                            <Text1 type="text" name="amount" data={electricitydetails} fun={setelectricitydetails} lname="Pay Amount" id="eamt"  tclass="form-control"/>
                        <br/>
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
    

export default Electricity;