import React ,{useState,useEffect, useContext} from 'react';
import {Link} from  'react-router-dom';
import CHeader from "./Header.jsx";
import { Switch, Route } from 'react-router-dom';
import MobileRecharge from './MobileRecharge.jsx';
import Dth from "./Dth.jsx";
import Electricity from "./Electricity.jsx";
import AddMoney from './AddMoney.jsx';
import TransferMoney from './TransferMoney.jsx';
import Transactions from './Transactions.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer.jsx';




const Home = (props) => {
    // document.getElementById("prepaid").checked=true;


    useEffect(()=>
    {
        document.title="Ewallet | Home|Money";
        // console.log("foooooo");
        if(window.localStorage.getItem('username')!==null)
        {

        }

        if(window.localStorage.getItem('token')!==null)
        {
            // console.log("foooooo");
            const headeruser=document.getElementById("headeruser").innerText="";
            document.getElementById("headeruserlogout").innerText="logout";
        }
    },[]);

  return (
      <>
      <CHeader/>

      <div className="btn-warning" style={{width:"100%"}} >
            {

            /*<br/>
            <br/>
            <br/>
            <br/> 
            <br/> */}
        </div>

      <div  className="bg-light text-dark ">

      {/* <i class="fa-solid fa-user"></i> */}
      </div>

      <div className="card container-fluid ">
            <div className= "row col-12">
                <div style={{height:"100%",padding:"0% 0% 15% 0%"}} className="col-2 bg-light text-dark ">
                <br/>
                <br/>
                <div className="row">
                    <Link to="/home"><img style={{width:"30px"}} src="https://s.freecharge.in/desktop/images/icon_prepaid_new.png"/><br/>Mobile</Link>
                </div>

                <br/>

                <div className="row">
                    <Link to="/home/electricity"><img style={{width:"35px"}} src="https://s.freecharge.in/desktop/images/icon_electricity_new.png"/><br/>electricity</Link>
                </div>
                <br/>


                <div className="row">
                    <Link to="/home/transfermoney"><img style={{width:"55px"}} src="https://m.media-amazon.com/images/G/31/apay/dashboard/corporateGifting._CB427013910_.png"/><br/>Transfer Money</Link>
                </div>

                <br/>

                <div className="row">
                    <Link to="/home/dth"><img style={{width:"35px"}} src="https://s.freecharge.in/desktop/images/icon_dth_new.png?v=2"/><br/> dth</Link>
                </div>

            </div>

            


            


         

                <div style={{}} className=" card col-10 bg-light">

                   
                    {/* <div className="row">
                        <div class="alert alert-primary" role="alert">
                        <br/>
                        </div>
                    </div>  */}

                    <div style={{display:"flex",justifyContent: "flex-end",float:"right"}}>
                        <img style={{width:"40px"}} src="https://img.icons8.com/ios/50/000000/wallet--v1.png" alt="wallet img"/>
                        <h4 id="ewamount1" style={{}}>:{window.localStorage.getItem('walletamount')}$</h4>
                    </div>

                <div className="row">
                <Switch>
                   <Route path="/home"   exact  component={MobileRecharge}/>
                   <Route path="/home/dth"  exact  component={Dth}/>
                   <Route path="/home/electricity"  exact  component={Electricity}/>
                   <Route path="/home/addmoney"  exact  component={AddMoney}/>
                   <Route path="/home/transfermoney"  exact  component={TransferMoney}/>
                   <Route path="/home/transactions"  exact  component={Transactions}/>
                </Switch>

                </div>
          
                </div>

            </div>
      </div>

      <Footer/>
      </>
  );
}

export default Home;