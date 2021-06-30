import React ,{useState,useEffect, useContext} from 'react';
import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import axios from 'axios';
import url from './BaseUrl';
import { ToastContainer, toast } from 'react-toastify';
import TransactionsRow from "./TransactionsRow.jsx";

const Transactions=()=>
{
    useEffect(()=>
{
    document.title="Ewallet | Home| Transactions";   

    getaddmoneydetails();
    getmoneyrecharge();
    getdthdetails();
    getelectricitydetails();
    getmoneytransferdetails();
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



 const  [addmoney, setaddmoney] = useState([]);
 const  [electricity,setelectricity] = useState([]);
 const  [dth, setdth] = useState([]);
 const  [transfermoney, settransfermoney] = useState([]);
 const  [mobilerecharge, setmobilerecharge] = useState([]);


 


  const getaddmoneydetails=()=>
  {
      console.log("called send data"+Token);

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
          

      const param=window.localStorage.getItem('username');
      authaxios.get(`/findalladdmoneydetails/${param}`)
      .then((response)=>
      {
          console.log("sucess");
          console.log(response);
            if(response.data.length===0)
            {
            }
            else
            {
                console.log(response.data);
                setaddmoney(response.data);
            }
      },
      (error)=>
      {
          console.log("fail");
          console.log(error);
          toast.error("Transaction Failed");

      });
  }



  const getmoneyrecharge=()=>
  {
      console.log("called send data"+Token);

    //   getToken();
      console.log("send data--");
      console.log("Token"+Token);

      var apiUrl=`${url}`;
      
      const authaxios=axios.create(
          {
              baseURL:apiUrl,
              headers:
              {
                  Authorization:`${Token}`,
              },
          });
          

      const param=window.localStorage.getItem('username');
      authaxios.get(`/findallmobilerechargedetails/${param}`)
      .then((response)=>
      {
          console.log("sucess");
          console.log(response);
          if(response.data.length===0)
          {

          }
          else
          {
            console.log(response.data);
              setmobilerecharge(response.data);
          }

      },
      (error)=>
      {
          console.log("fail");
          console.log(error);
          toast.error("Transaction Failed");

      });
  }

  



  const getdthdetails=()=>
  {
      console.log("dthhhhhhhh");

    //   getToken();
    //   console.log("send data--");
    //   console.log("Token"+Token);
    //   console.log("Token"+window.localStorage.getItem('token'));

      var apiUrl=`${url}`;
      
      const authaxios=axios.create(
          {
              baseURL:apiUrl,
              headers:
              {
                  Authorization:`${Token}`,
              },
          });
          

      const param=window.localStorage.getItem('username');
      authaxios.get(`/findalldthdetails/${param}`)
      .then((response)=>
      {
          console.log("sucess");
        //   console.log(response);
      
            if(response.data.length===0)
            {
             

            }
            else
            {
                console.log(response.data);
                setdth(response.data);

            }
        
        //   console.log('dth');
        //   console.log(dth);
          // window.location.replace("http://localhost:3000/home");
      },
      (error)=>
      {
          console.log("fail");
          console.log(error);
          toast.error("Transaction Failed");

      });
  }
  


  const getelectricitydetails=()=>
  {
      console.log("called send data"+Token);

    //   getToken();
    //   console.log("send data--");
    //   console.log("Token"+Token);
    //   console.log("Token"+window.localStorage.getItem('token'));

      var apiUrl=`${url}`;
      
      const authaxios=axios.create(
          {
              baseURL:apiUrl,
              headers:
              {
                  Authorization:`${Token}`,
              },
          });
          

      const param=window.localStorage.getItem('username');
      console.log('param='+param);
      authaxios.get(`/findallelectricitydetails/${param}`)
      .then((response)=>
      {
          console.log("sucess");
        //   console.log(response);
        if(response.data.length===0)
        {

        }
        else
        {
            console.log(response.data);
            setelectricity(response.data);

            // electricity.map((a,i)=>
            // <TransactionsRow src="https://s.freecharge.in/desktop/images/icon_electricity_new.png" alt="electricity img" data1={i} data2="Electricity" data3={a.amount}/>
            // )
        }
      },
      (error)=>
      {
          console.log("fail");
          console.log(error);
          toast.error("Transaction Failed");

      });
  }

  const getmoneytransferdetails=()=>
  {


      var apiUrl=`${url}`;
      
      const authaxios=axios.create(
          {
              baseURL:apiUrl,
              headers:
              {
                  Authorization:`${Token}`,
              },
          });
          

      const param=window.localStorage.getItem('username');
      authaxios.get(`/findalltransfermoneydetails/${param}`)
      .then((response)=>
      {
          console.log("sucess");
          if(response.data.length===0)
          {

          }
          else
          {
              console.log(response.data);
             settransfermoney(response.data);
          }
    
        // window.location.replace("http://localhost:3000/home");
      },
      (error)=>
      {
          console.log("fail");
          console.log(error);
          toast.error("Transaction Failed");

      });
  }









    return(
        <>
        <TransactionsRow src="" alt="" data1="Sr.No" data2="Transctions" data3="Amt"/>
        <h4>
           Dth Payments
        </h4>

        {
            (dth.length===0)
            ?
            <>
            <center>
                <h5>No Payments Made Till Now</h5>
            </center>
            </>

            :
            <>

            </>
        }
        

        {
            dth.map((para,i)=>
            {
                return(
                    <>
                     <TransactionsRow src="https://s.freecharge.in/desktop/images/icon_dth_new.png?v=2" alt="dth img" data1={i} data2="Dth" data3={para.amt}/>
                    </>
                )
            })
        }

        <h4>
           Electricity Payments
        </h4>

        {
            (electricity.length===0)
            ?
            <>
            <center>
                <h5>No Payments Made Till Now</h5>
            </center>
            </>

            :
            <>

            </>
        }
        
        {
            electricity.map((para,i)=>
            {
                return(
                    <>
                     <TransactionsRow src="https://s.freecharge.in/desktop/images/icon_electricity_new.png" alt="electricity img" data1={i} data2="Electricity" data3={para.amount}/>
                    </>
                )
            })
        }

        <h4>
           MobileRecharge Payments
        </h4>

        {
            (mobilerecharge.length===0)
            ?
            <>
            <center>
                <h5>No Payments Made Till Now</h5>
            </center>
            </>

            :
            <>

            </>
        }

        {
            mobilerecharge.map((para,i)=>
            {
                return(
                    <>
                     <TransactionsRow src="https://s.freecharge.in/desktop/images/icon_prepaid_new.png" alt="mobile recharge img" data1={i} data2="Mobile" data3={para.amt_paid}/>
                    </>
                )
            })
        }


        <h4>
           AddMoney Payments
        </h4>

        {
            (addmoney.length===0)
            ?
            <>
            <center>
                <h5>No Payments Made Till Now</h5>
            </center>
            </>

            :
            <>

            </>
        }

        {
            addmoney.map((para,i)=>
            {
                return(
                    <>
                     <TransactionsRow src="https://s.freecharge.in/desktop/images/icon_prepaid_new.png" alt="electricity img" data1={i} data2="Mobile" data3={para.money}/>
                    </>
                )
            })
        }


        <h4>
            Transfer Money
        </h4>


        {
            (transfermoney.length===0)
            ?
            <>
            <center>
                <h5>No Payments Made Till Now</h5>
            </center>
            </>

            :
            <>

            </>
        }

  
        

        {
            transfermoney.map((para,i)=>
            {
                return(
                    <>
                     <TransactionsRow src="https://m.media-amazon.com/images/G/31/apay/dashboard/corporateGifting._CB427013910_.png " alt="electricity img" data1={i} data2="Transfer Money" data3={para.money}/>
                    </>
                )
            })
        }

    

        </>
    );

}


export default Transactions