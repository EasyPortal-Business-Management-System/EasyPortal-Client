import { React, useState } from "react";
import ListItem from "./ListItem";

const Rosters = () => {
const [value, setValue] = useState("");

    const arr= [
        { name: "McKenzie", roster: "Monday"},
        { name: "Darren", roster: "Tuesday"},
        { name: "McKenzie", roster: "Wednesday"},
        { name: "Molly", roster: "Thursday"},
        { name: "Jake", roster: "Friday"},
    ];
    
    const handleOnChange = (e) => {
        setValue(e.target.value);
    }
    
    return (
        <section id="#viewrosters">
            <h1>Rosters Home Page</h1>
                <div>
                    <p>View rosters for employees here</p>
                        <ul>
                            {arr.map(({name, roster}, id) => (
                                <ListItem key={id} name={name} roster={roster}></ListItem>
                            ))}
                        </ul>

                    <h3>Add a shift to roster</h3>
                    <textarea onChange={handleOnChange} rows="2" columns="25"></textarea>
                    <p>Value: {value} </p>
                </div>
        </section>
    )
}

export default Rosters