import { Fragment } from "react";

function Main({name,city,image,position}){
    
    return(
        <div>
            <img src= {image? `${image}`:`https://static.vecteezy.com/system/resources/thumbnails/029/785/081/small_2x/cute-pink-teddy-toy-bear-on-blurred-forest-autumn-background-photo.jpg`}
            alt="cardImage"
            />

            <div className="main-block-details">
                <h3>{!name?`no-name`:`${name}`}</h3>
                <p><span>{city}</span><span>{position}</span></p>
            </div>

        </div>
        
    );
}

export default Main;