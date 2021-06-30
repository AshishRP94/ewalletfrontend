import React from 'react';
import Loginregform from "./components/Loginregform.jsx";
import  "./design/ewallet.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import "./design/ewallet.css"
import Transactions  from './components/Transactions.jsx';
import Account from './components/Account.jsx';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <>
    <BrowserRouter>
    <Switch>
    <Route path="/loginandsignup"  component={Loginregform}/>
    <Route path="/home"   exact  component={Home}/>
    <Home/>
    </Switch>
    </BrowserRouter> 
    {/* <Transactions/>
    {/* <Account/> */}
    </>

  );
}

export default App;
