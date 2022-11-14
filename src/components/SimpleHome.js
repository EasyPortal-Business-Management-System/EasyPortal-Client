import React from "react";
import SignIn from "./LogIn";
import SignUp from "./Register";

const Home = () => {
    return (
        <section id="home">
            <div>
                <h1>Log in to enter the portal....</h1>
                <SignIn />
                <SignUp />
                <img src="../images/entertheportal.jpg" alt="door opening" height={600} width={1100}></img>
            </div>
        </section>
    )
}

export default Home;