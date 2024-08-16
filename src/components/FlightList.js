import Flight from "./Flight";

function FlightList(){

    const flights = ["Flight 1", "Flight 2", "Flight 3", "Flight 4", "Flight 5", "Flight 6", "Flight 7", "Flight 8", "Flight 9", "Flight 10"]

    const flightComponents = flights.map((flight, index) => {
        return <Flight key={index}/>
    })

    return <div>{flightComponents}</div>
}

export default FlightList;