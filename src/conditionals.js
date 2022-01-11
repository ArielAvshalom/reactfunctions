function WonChess(props) {
    const won = props.wonGame
    if (won) {
        return <h1>You won the game hooray!</h1>
    }
    return <h6>Boo hoo we lost...</h6>
}


function AnyoneHome(props){
    const people = props.people
    return (
        <>
            <h3>Here is my home</h3>
            {people.length > 0 &&
                <p>
                    There are {people.lenght} home right now
                </p>}
        </>
    )
}

function AnyoneHome2(props){
    const peoplePresent = props.peoplePresent
    return (
        <>
            {peoplePresent ? <h1>Someone is here</h1> : <p>No one is home</p>}
        </>
    )
}



export default WonChess