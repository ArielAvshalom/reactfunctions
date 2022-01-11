import React from "react";

function FireAlert() {
    const fire = (alarm_message) => {
        alert(alarm_message);
    }

    return (
        <button onDoubleClick={() => fire("There is not a fire!")}>check for fire</button>
    )
}


export default FireAlert
