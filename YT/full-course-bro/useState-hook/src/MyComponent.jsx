import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
        // name="TDM"
        setName("TDM");
    }

    const incremenetAge =() =>{
        setAge(age+1);
    }

    const employeeState=() =>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incremenetAge}>Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={employeeState}>Emplyee Status</button>
        </div>
    );

}

export default MyComponent