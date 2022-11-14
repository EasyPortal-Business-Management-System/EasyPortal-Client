import { React, useReducer } from "react";
import ListItem from "./ListItem";
import RosterInput from "./AddRoster";

const initialRoster = [
    { name: "McKenzie", roster: "Monday"},
    { name: "Darren", roster: "Tuesday"},
    { name: "McKenzie", roster: "Wednesday"},
    { name: "Molly", roster: "Thursday"},
    { name: "Jake", roster: "Friday"},
];

const [store, dispatch] = useReducer(reducer, initialState);

const Rosters = () => {
    const initialState = {
        rosters: initialRosters
    }

function setReviews() {
    dispatch({
        type: 'setRosters',
        data: reviews
    })
}

const addRosters = (roster) => {
    const newRoster = {
        // Placeholder should have a droplist to choose from employees with registered accounts
        name: "Employee",
        roster: roster
    };

    // setRosters(prevRosters => [...prevRosters, newRoster])
    let rosters = rosters.concat(newRoster)
    setRosters(rosters)
}
    
    return (
        <section id="viewrosters">
            <h1>Rosters Home Page</h1>
                <div>
                    <p>View rosters for employees here</p>
                        <ul>
                            {rosters.map(({name, roster}, id) => (
                                <ListItem key={id} name={name} roster={roster}></ListItem>
                            ))}
                        </ul>
                        <RosterInput addRosters={addRosters}/>
                </div>
        </section>
    )
}

export default Rosters