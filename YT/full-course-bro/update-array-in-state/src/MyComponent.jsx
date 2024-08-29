import React,{useState} from "react";

function MyComponent(){

    const [foods, setFoods] = useState(["Kottu"]);

    function handleAdd(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        // setFoods([newFood]);
        setFoods(f => [...f, newFood]);

    }

    function handleRemove(index){
        
        setFoods(foods.filter((_, i) => i !== index))
        // _ means ignore it
    }

    return(
        
        <div>
            <h1>Lis of Food</h1>

            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemove(index)} >{food}</li> )}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food"/>
            <button onClick={handleAdd}>Add Food</button>

        </div>

    );

}

export default MyComponent