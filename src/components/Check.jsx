import React from "react";

const Check=(props)=>
{
    return(
        <div className="form-check col-8">

        <input style={{}}  className="form-check-input" type="checkbox" value="" id={props.id}/>
          <label className="form-check-label" for={props.id}>
                {props.text} 
            </label>
        </div>
    );
}

export default Check;