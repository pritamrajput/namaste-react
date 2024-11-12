import { useEffect, useState } from "react";

const User = (props) => {
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(1);
    console.log(props);

    useEffect(()=>{
        const timer = setInterval(() => {
          console.log("Namaste React OP");
        }, 1000);

        return ()=>{
          clearInterval(timer); 
        };

    },[])
    

    return (
       <div key={2} className="user-card">
            <h1>{count}</h1>
            <button
            onClick={()=>{
               
                setCount(count + 2);
            }}
            >count increase</button>
            <h1>{count2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : {props.location}</h3>
            <h4>Contact : @Impritam18</h4>
       </div>
    );
}

export default User;