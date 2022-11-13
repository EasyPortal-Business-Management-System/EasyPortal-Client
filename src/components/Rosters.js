import React from "react";
import ListItem from "./ListItem";

const Rosters = () => {
    const arr= [
        { name: "McKenzie", roster: "Monday"},
        { name: "Darren", roster: "Tuesday"},
        { name: "McKenzie", roster: "Wednesday"},
        { name: "Molly", roster: "Thursday"},
        { name: "Jake", roster: "Friday"},
    ];
    
    
    return (
        <section id="#viewrosters">
            <h1>Rosters Home Page</h1>
                <div>
                    <p>View rosters for employees here</p>
                    <article>
                        <ul>
                            {arr.map(({name, roster}, id) => (
                                <ListItem key={id} name={name} roster={roster}></ListItem>
                            ))}
                        </ul>
                    </article>
                </div>
        </section>
    )
}

export default Rosters