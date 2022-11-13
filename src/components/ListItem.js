import React from "react";

const ListItem = (props) => {
    return (
        <li><b>{props.name}:</b> {props.roster}</li>
    );
};

export default ListItem;