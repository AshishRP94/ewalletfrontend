import React from "react";

const Radio=(props)=>
{

    return(
        <>
    <center>
    
    <div style={{}} className="form-check col-lg-2 col-md-2 col-sm-12">

     <label  className="form-check-label" for={props.id}>
        {props.lname}
    </label>
    <input onChange={(event)=>
        {
        const pre=document.getElementById("prepaid").checked;
        const post=document.getElementById("postpaid").checked;

        props.flag(true);

            if(pre==true)
            {
                // document.getElementById("plan").innerText="Recharge Amount";
                // document.getElementById("plan").placeholder="Recharge Amount";
                props.fun
                (
                    {
                        ...props.data,
                        rechargetype:"prepaid"
                    }
                );
            }
            if(post==true)
            {
                // document.getElementById("plan").innerText="Pay Bill";
                // document.getElementById("plan").placeholder ="Pay Bill";
                // console.log("hidden");
                // document.getElementById("rechargeplans").setAttribute("type", "hidden");
;
                
                props.fun
                (
                    {
                        ...props.data,
                        rechargetype:"postpaid"
                    }
                );
            }
        }}  className="form-check-input"  type="radio" name={props.name} id={props.id}/>   

    </div>
    </center>



        </>
        );
        
}

export default Radio;