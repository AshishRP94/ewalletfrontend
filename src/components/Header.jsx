import React, { useState } from 'react';
import {Link} from  'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <>
    {/* "text-center */}
    <center>
        <Navbar color="warning"  light expand="md">
        <NavbarBrand href="/">  
         <span  style={{}}>

         {
          (window.localStorage.getItem('username')===null)
          ?
          <>

          </>
          :
         "Welcome "+window.localStorage.getItem('username')
        }



         </span>&nbsp;
         </NavbarBrand>
         <NavbarToggler onClick={toggle} />
        {/* &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{position:"absolute",left:"45%"}} className="mr-auto" navbar>

 
            <NavItem>
              <Link className="nav-link" to="/home/addmoney"><h6>Add Money</h6></Link>
            </NavItem> 

            <NavItem>
            <Link className="nav-link" to="/home/transactions"><h6>Transactions</h6></Link>
            </NavItem> 


            {/* <NavItem>
              <Link className="nav-link" to="/transactions">Wallet</Link>
            </NavItem>  */}

            <NavItem>
             <h6> <Link id="headeruser" style={{ }} className="nav-link" to="/loginandsignup/login">Login</Link></h6>
            </NavItem>
            
            <NavItem>
            <h6>  <Link onClick={(event)=>
              {
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('username');
                window.localStorage.removeItem('walletamount');
                document.getElementById("headeruserlogout").innerText="";
                document.getElementById("headeruser").innerText="login";
                console.log("local storage cleared");
                window.location.replace("http://localhost:3000/loginandsignup/login");

              }} id="headeruserlogout" style={{}} className="nav-link" to=" "></Link></h6>
            </NavItem> 


            </Nav>
            </Collapse>

      </Navbar>

      
      {/* <NavItem>
              <img src="../ewalletimg/walleticon.jpeg" alt="" />
      </NavItem> */}
      
    </center>
    </>
  );
}

export default Header;