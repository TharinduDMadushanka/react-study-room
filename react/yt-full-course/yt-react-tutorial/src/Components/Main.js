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

function Main(props){
    return(
        <div>
            This is my Main Component
            <ul>
                <li>Hello pargraph</li>
                <li>{props.children}</li>
            </ul>
        </div>
        
    );
}

export default Main;