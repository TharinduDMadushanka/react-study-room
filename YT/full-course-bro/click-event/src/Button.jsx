
function Button(){

    let count =0;

    // const handleClick = () => console.log("Clicked.!");

    const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }else{
            console.log(`${name} stop click me!`);
        }
    }
// 

    // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    return(
        // <button onClick={handleClick}>Click me😁</button>
        // <button onClick={() => handleClick2("TDM")}>Click me😁</button>

        <button onClick={() => handleClick("TDM")}>Click me😁</button>

    );

}

export default Button