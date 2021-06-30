import React from 'react';

const Text3=(props)=>
{
    return (
        <>

        <div className="form-group">
            <label id={props.lid} for={props.id}>{props.lname}</label>
            <br/>
            <input style={{
                width:"10%",
                borderRadius:"20px 20px 20px 20px"
            }} 
            
            onChange={(event)=>
            {
                console.log(event.target.value);
                const name=props.name;
                const value=event.target.value;

                props.fun(
                        {
                        ...props.data,
                        [name]:value
                        }
                    );

                console.log("data");
                console.log(props.data);

            }} type={props.type}  class={props.tclass} value={props.val} placeholder={props.lname} name={props.id} id={props.id}/>
        </div>
        </>

    );
}

export default Text3;