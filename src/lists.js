function Car(props) {
    return <li>This is a {props.brand} with this id: {props.id}.</li>
}

function Garage() {
    const cars = [
        {id: 1, brand : 'Mercedes Benz'},
        //'Aston Marten',
        //'Lamborghini',
        {id : 2, brand : 'BMW'},
        {id : 3, brand : 'Toyota'},
        {id : 4, brand :'Tesla'},
        {id : 5, brand : 'Honda'}
        //'Ferrari'
    ]

    return(
        <>
            <h1>I have these cars in my garage</h1>
            <ul>
                {cars.map((car) => <Car id= {car.id} brand = {car.brand} />)}
            </ul>
        </>
    )
}

export default Garage