import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1>404 Page Note Found</h1>
            <h4>Try /about to see what EasyPortal is all about!</h4>
            <Link to="/login"><h5>Or log in to your account here</h5></Link>
        </div>
    )
}

export default NotFound;