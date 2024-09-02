import React,{useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);

    const [color, setColor] = useState("green")

    // when we click add btn the web title will update everytime clicked
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    // when we click add btn the web title will update only once
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // }, [])
    
    // when we click add btn the web title will update everytime clicked
    //it means do this code only the value(count)updates
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    function addCount(){
        setCount(c => c+1)
    }

    function subCount(){
        setCount(c => c-1)
    }

    function changeColor(){
        setColor(c => c=== "green" ? "red" : "green")
    }

    return(

        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Substract</button><br/>
            <button onClick={changeColor}>Change color</button>


        </>

    );

}

export default MyComponent