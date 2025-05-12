import React,{useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);

    const incrememt= () => setCount(count+1);
    const decrememt= () => setCount(count-1);
    

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={incrememt}>Increment</button>
            <button onClick={decrememt}>decrement</button>
        </div>
    );
}

export default Counter;