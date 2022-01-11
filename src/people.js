import React from "react";

// class Person extends React.Component{
//     render()
//     {
//         return <h2>This is a person</h2>
//     }
// }

function Person(props) {
    return <span>This is a {props.emotion} person!</span>
}

function Home() {
    const homeInfo = {sqft : 1700, beds : 3, baths : 3}
    return (
        <>
            <span>This is my home <Person emotion={'Happy'}/> that lives in my home!</span>
            <p>Here is my house info: it is {homeInfo.sqft} sqft and has {homeInfo.beds} beds.</p>
        </>
    )
}

export default Home

//in html events are not camelcase
// IN HTML: <button onclick="fire()">click here to see if there is a fire</button>
// IN JSX:  <button onClick={fire}>click here to see if there is a fire</button>