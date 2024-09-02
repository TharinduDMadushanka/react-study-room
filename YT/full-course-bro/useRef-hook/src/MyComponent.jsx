import { useEffect, useRef, useState } from "react"

function MyComponent(){

    // let [number, setNumber] = useState(0);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // console.log(ref)

    useEffect(() => {
        console.log("Component rendered..!")
        // console.log(inputRef)
    })

    // function handleClick(){
    //     setNumber(n => n+1)
    // }
    function handleClick1(){
        // ref.current++;
        // console.log(ref.current)
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Yellow";
    }


    return(

        <div>

            <button onClick={handleClick1}>
                Click Me 1
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>
                Click Me 2
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Click Me 3
            </button>
            <input ref={inputRef3} />
        </div>

        
    );

}

export default MyComponent