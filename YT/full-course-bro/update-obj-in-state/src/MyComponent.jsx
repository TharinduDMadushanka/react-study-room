import React,{useState} from "react"

function MyComponent(){

    const [car, setCar] = useState({year:2024 ,
                                    make: "Ford" ,
                                    model:"Mustang"});

    function handleYear(event){
        // setCar({year: 2024, make: "Ford", model: "Mustang", year: 2025});
        // spread operator
        setCar(c => ({...c, year: event.target.value}));
    }  

    function handleMake(event){
        setCar(c => ({...c, make: event.target.value}));
    } 

    function handleModel(event){
        setCar(c => ({...c, model: event.target.value}));
    }                                

    return(
        
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYear}/><br/>
            <input type="text" value={car.make} onChange={handleMake}/><br/>
            <input type="text" value={car.model} onChange={handleModel}/><br/>
        </div>
        
    );

}

export default MyComponent