// function Main(){
//     return(
//         <div>
//             This is my Main Component
//             <ul>
//                 <li>Hello pargraph</li>
//             </ul>
//         </div>
        
//     );
// }

const name ='Tharindu'
const position= 'Student'

const myObj ={
    name:'obj Tharindu',
    position:'obj Student',
    city:'Galle'
}

function Main(props){
    // object destructuring
    const {city} = myObj

    // const name ='Tharindu'
    // const position= 'Student'
    return(
        <div>
            This is my Main Component
            <ul>
                <li>Hello pargraph</li>
                <li>name</li>
                <li>{city}</li>
                <li>position</li>
                <li>myObj.name</li>
                <li>myObj.position</li>
            </ul>
            {props.children}
        </div>
        
    );
}

export default Main;