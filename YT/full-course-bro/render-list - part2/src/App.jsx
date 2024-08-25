import List from "./List"

function App() {
  
    const fruits = [{id: 1, name :"apple", calories: 95},
                  {id: 2, name: "banana", calories: 45},
                  {id: 3, name :"orange", calories: 105},
                  {id: 4, name :"coconut", calories:115 },
                  {id: 5, name :"mango", calories: 45}];

    const vegitables = [{id: 6, name :"potato", calories: 195},
                    {id: 7, name: "carrot", calories: 145},
                    {id: 8, name :"peacles", calories: 105},
                    {id: 9, name :"beans", calories:155 },
                    {id: 10, name :"tomato", calories: 135}];              
    
    const users = [];   
                                 
return ( 

  <>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    <List items={vegitables} category="Vegitables"/>

    {users.length > 0 ? <List items={users} category="Users"/> : "No user fount"}
  </>

)

}

export default App
