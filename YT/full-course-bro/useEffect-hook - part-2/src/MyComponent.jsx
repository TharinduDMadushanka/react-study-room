import React,{useState, useEffect} from "react";

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // now ok only add 2 listerns
    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     console.log("Event Lister added..!")
    // }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Lister added..!")

        return() => {
            // cleanup code
            window.removeEventListener("resize", handleResize)
            console.log("Event Lister removed..!")
        }
    }, [])

    useEffect(() => {
        document.title = `size: ${width} x ${height}`
    }, [width, height])

    // if we set like this when change the resolution it give new event lister
    // window.addEventListener("resize", handleResize);
    // console.log("Event Lister added..!")

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(

        <>
           <p>Window width: {width}px</p>
           <p>Window height: {height}px</p>
        </>

    );

}

export default MyComponent