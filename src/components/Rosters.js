import { React, useReducer } from "react";
import ListItem from "./ListItem";
import RosterInput from "./AddRoster";
import reducer from "../utils/RostersReducer";

const initialRoster = [
    { name: "McKenzie", roster: "Monday"},
    { name: "Darren", roster: "Tuesday"},
    { name: "McKenzie", roster: "Wednesday"},
    { name: "Molly", roster: "Thursday"},
    { name: "Jake", roster: "Friday"},
];

const Rosters = () => {
    const initialState = {
        rosters: initialRoster,
        isShowEditBox: false,
        editBoxMessage: "",
        selectedRosterId: null
    }

    const [store, dispatch] = useReducer(reducer, initialState);
    const {rosters, isShowEditBox, editBoxMessage } = store;


    function setRosters(newRoster) {
        dispatch({
            type: 'setRosters',
            data: newRoster
        })
    }

    function initialiseEditBox(id) {
        dispatch({
            type: 'initialiseEditBox',
            data: id
        })
    }

    function deleteRosters(id) {
        dispatch({
            type: 'deleteRosters',
            data: id
        })
    }

    function updateEditBoxMessage(e) {
        let message = e.target.value;
        dispatch({
            type: 'updateEditBoxMessage',
            data: message
        })
    }

    function saveRoster() {
        dispatch({
            type: 'saveRoster'
        })
    }

    const addRosters = (roster) => {
        const newRoster = {
            // Placeholder should have a droplist to choose from employees with registered accounts
            name: "Employee",
            roster: roster
        };

        // setRosters(prevRosters => [...prevRosters, newRoster])
        setRosters(newRoster);
    };

    
    
    return (
        <section id="viewrosters">
            <h1>Rosters Home Page</h1>
                <div>
                    <p>View rosters for employees here</p>
                        <ul>
                            {rosters.map(({name, roster}, id) => (
                                <div>
                                <ListItem key={`${id}-item`} name={name} roster={roster}></ListItem>
                                <button key={`${id}-button`} onClick={() => initialiseEditBox(id)}>Edit</button>
                                <button key={`${id}-button`} onClick={() => deleteRosters(id)}>Delete</button>
                                </div>
                            ))}
                        </ul>
                        {
                            isShowEditBox &&
                            <>
                            <h3>Edit the roster below</h3>
                            <textarea onChange={updateEditBoxMessage} value={editBoxMessage} rows="4" cols="30"></textarea>
                            <button onClick={saveRoster}>Save</button>
                            </>
                        }
                        <RosterInput addRosters={addRosters}/>
                </div>
        </section>
    )
}

export default Rosters