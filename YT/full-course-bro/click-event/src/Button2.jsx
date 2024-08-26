
function Button2(){

    // const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "Yow!";


    return(

        <button onClick={(e) => handleClick(e)}>Click me😁</button>

    );

}

export default Button2