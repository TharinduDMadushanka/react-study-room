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

function Main(props){
    // const name ='Tharindu'
    // const position= 'Student'
    return(
        <div>
            This is my Main Component
            <ul>
                <li>Hello pargraph</li>
                <li>name</li>
                <li>position</li>
            </ul>
            {props.children}
        </div>
        
    );
}

export default Main;