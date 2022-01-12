import {useState} from "react";

function Color(){
    const [color, setColor] = useState("red")
    const [current, setCurrent] = useState("current")


    return (
        <>
            <h3>my {current} favorite color is {color}!</h3>
            <button
                type="button"
                onClick={() => {setColor("turquoise"); setCurrent("NEW")}}
                >Turquiose</button>
        </>
    )
}

export default Color