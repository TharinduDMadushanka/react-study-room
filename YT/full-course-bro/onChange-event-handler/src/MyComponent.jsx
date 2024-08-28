import React, {useState} from "react"

function MyComponent(){
    
    // input String
    const [name, setName]= useState("Guest");

    // input number
    const [quantity, setQuantity] = useState(1);

    // textArea
    const [comment, setComment] = useState("");

    //select
    const [payment, setPayment] = useState("");

    // radio
    const [shipping, setShipping] = useState("Delivery");



    // input String
    function handleNameChange(event){
        setName(event.target.value);
    }

    // input number
    function handleQtyChange(event){
        setQuantity(event.target.value);
    }
    // textArea
    function handleComntChange(event){
        setComment(event.target.value)
    }

    //select
    function handlePayChange(event){
        setPayment(event.target.value)
    }

    // radio
    function handleShipping(event){
        setShipping(event.target.value)
    }



    return(
        <div>
             {/* input String */}
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p><hr/>


            {/* input number */}
            <input value={quantity} onChange={handleQtyChange} type="number"/>
            <p>QTY: {quantity}</p><hr/>


            {/* textArea */}
            <textarea value={comment} onChange={handleComntChange} placeholder="Leave a Comment.."/>
            <p>Comment: {comment}</p><hr/>


            {/* select */}
            <select value={payment} onChange={handlePayChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p><hr/>
            

            {/* radio */}
            <label>
                <input type="radio" value="Pick up" checked={shipping === "Pick up"}
                               onChange={handleShipping} />
                Pick up
            </label>
            <br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"}
                               onChange={handleShipping} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );

}

export default MyComponent