import React from 'react';

const Text2=(props)=>
{
    return (
        <>

        <div className="form-group">
            <label id={props.lid} for={props.id}>{props.lname}</label>
            <br/>
            <input style={{
                width:"10%",
                borderRadius:"20px 20px 20px 20px"
            }} type={props.type}  class={props.tclass} placeholder={props.lname} name={props.id} id={props.id}/>
        </div>
        </>

    );
}

export default Text2;