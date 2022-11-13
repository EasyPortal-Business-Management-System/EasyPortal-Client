import React from "react";

const Header = () => {
    return (
        <header>
            <h1>EasyPortal</h1>
            <h2>Business Managment System for Small Business</h2>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#login">Log In</a></li>
                    <li><a href="#register">Sign Up</a></li>
                    <li><a href="#viewrosters">View Rosters</a></li>
                    <li><a href="#addroster">Add Roster</a></li>
                    <li><a href="#editroster">Edit Roster</a></li>
                    <li><a href="#deleteroster">Delete Roster</a></li>
                    <li><a href="#paycalc">Pay Estimate</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header