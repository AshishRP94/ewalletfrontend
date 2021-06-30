import React from "react";
import Text1 from "./Text1.jsx";
import {Link} from  'react-router-dom';
import Radio from './Radio.jsx';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import url from './BaseUrl';


const TransactionsRow=(props)=>
{
    return(
        <>
        <center>
            <div  style={{backgroundColor:"",padding:"0px 0px 0px 40px"}} className="row col-6">
            
            
            <div className="col-md-2 col-sm-1">
                <div className="row">
                    <h5>
                        {props.data1}
                    </h5>
                </div>
            </div>

            
            <div className="col-md-8 col-sm-1">
                <div className="row" >
                    <h5>
                    <img style={{width:"45px"}} src={props.src} alt={props.alt}/>
                        {props.data2}
                    </h5>

                </div>
            </div>
            
            <div className="col-md-2 col-sm-1">
                <div className="row">
                    <h5>
                        {props.data3}
                    </h5>
                </div>
            </div>

        </div>
        <br/>
        </center>
        </>



    );
}

export default TransactionsRow;