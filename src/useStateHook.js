import {useState} from "react";

function FormWithHook() {
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Your name is: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                type="text"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type = "submit"/>
        </form>
    )
}

export default FormWithHook