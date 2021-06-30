import React ,{useState,useEffect, useContext} from 'react';

const Footer=()=>
{
    return(
        <>
        <div style={{backgroundColor:"black"}}>
            <br/>
                <center>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <h5 style={{color:"white"}}>Register For Free</h5>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-outline-light">Sign Up</button>
                </div>

                <div>
                    <span style={{color:"white"}}>©2020 Copyright: ewallet.com</span>   
                </div>

                </center>
            <br/>
        </div>
        </>
    );

}


export default Footer;