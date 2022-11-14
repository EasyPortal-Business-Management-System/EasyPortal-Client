import { React, useState } from "react";

function RosterInput (props) {
	const [value, setValue] = useState("");
	const handleOnChange = (e) => {
        setValue(e.target.value);
    }
    
	return(
        <section id="#addroster">
			<h3>Add a shift to roster</h3>
                    <textarea onChange={handleOnChange} rows="2" columns="25"></textarea>
                    <p>Value: {value} </p>
                    <button onClick={() => props.addRosters(value)}>Add shift</button>
        </section>
	)
}

export default RosterInput