

function Main({children,name,city,position}){

    
    return(
        <div>
            This is my Main Component
            <ul>
                <li>{name}</li>
                <li>{city}</li>
                <li>{position}</li>
            </ul>
            {children}
        </div>
        
    );
}

export default Main;