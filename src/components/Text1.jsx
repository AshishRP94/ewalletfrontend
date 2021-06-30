import React from 'react';

const Text1=(props)=>
{
    return (
        <>

        <div className="form-group">
            <label id={props.lid} for={props.id}>{props.lname}</label>
            <br/>
            <input style={{
                width:"40%",
                borderRadius:"20px 20px 20px 20px"
            }} onChange={(event)=>
            {
                console.log("---------------------------------------------------------------------------------------------------------------");
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


            }} type={props.type}  class={props.tclass} placeholder={props.lname} name={props.name} id={props.id}/>
        </div>
        </>

    );
}

export default Text1;