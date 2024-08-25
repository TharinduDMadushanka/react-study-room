
function List(){

    const fruits = [{id: 1, name :"apple", calories: 95},
                    {id: 2, name: "banana", calories: 45},
                    {id: 3, name :"orange", calories: 105},
                    {id: 4, name :"coconut", calories:115 },
                    {id: 5, name :"mango", calories: 45}];

    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    // Alphabetical sort
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); 

    // reverse Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); 

    //Numerica order
    // fruits.sort((a,b) => a.calories - b.calories);

    //reverse Numerica order
    // fruits.sort((a,b) => b.calories - a.calories);

    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}: &nbsp;
    //     <b>{fruit.calories}</b></li>);

    /** 
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                      {lowCalFruit.name}: &nbsp;
                                                      <b>{lowCalFruit.calories}</b></li>);

    */

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>);                                                  

    // return(fruits);
    // return(<ul>{listItems}</ul>);
    return(<ol>{listItems}</ol>);

}

export default List