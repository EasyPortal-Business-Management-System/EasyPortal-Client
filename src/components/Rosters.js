import { React, useState } from "react";
import ListItem from "./ListItem";
import RosterInput from "./AddRoster";

const initialRoster = [
    { name: "McKenzie", roster: "Monday"},
    { name: "Darren", roster: "Tuesday"},
    { name: "McKenzie", roster: "Wednesday"},
    { name: "Molly", roster: "Thursday"},
    { name: "Jake", roster: "Friday"},
];

const Rosters = () => {
const [rosters, setRosters] = useState(initialRoster);

const addRosters = (roster) => {
    const newRoster = {
        name: "Employee Name",
        roster: roster
    };

    setRosters(prevRosters => [...prevRosters, newRoster])


}
    
    return (
        <section id="#viewrosters">
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