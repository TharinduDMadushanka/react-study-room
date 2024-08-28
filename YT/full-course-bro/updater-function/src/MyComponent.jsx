import React,{useState} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);

    function incremenet(){

        //Uses the CURRENT state to calculate the NEXT state
        //set function do not trigger an update
        // React batches together state updates for performence reason
        // NEXT state becomes the CURRET state after an

        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1)
    }

    function decremenet(){
        setCount(count-1)
    }

    function reset(){
        setCount(0)
    }


    return(

        <div>
            <p>Count: {count}</p>

            <button onClick={incremenet} >Incremenet</button>
            <button onClick={reset} >reset</button>
            <button onClick={decremenet} >decremenet</button>

        </div>

    );

}

export default MyComponent