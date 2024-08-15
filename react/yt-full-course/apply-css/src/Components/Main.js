import { Fragment } from "react";

function Main({name,city,position}){
    
    return(
        <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/029/785/081/small_2x/cute-pink-teddy-toy-bear-on-blurred-forest-autumn-background-photo.jpg" alt="cardImage"/>

            <div>
                <h3>{name}</h3>
                <p><span>{city}</span><span>{position}</span></p>
            </div>

        </div>
        
    );
}

export default Main;