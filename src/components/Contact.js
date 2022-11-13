import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            message: "",
            email: ""
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    render() {
        return (
            <section id="contact">
                <div>
                    <h2>Contact</h2>
                </div>
                    <h3>Contact Manager!</h3>
                <div>
                    <form>
                        <label>Name: </label><input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}></input>
                        <br></br>
                        <label>Message: </label><textarea type="textarea" name="message" rows="5" cols="30" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                        <br></br>
                        <label>Email: </label><input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </form>
                </div>
                <div>
                    <h4>This is what you have entered</h4>
                    <p>Name: {this.state.name}</p>
                    <p>Message: {this.state.message}</p>
                    <p>Email: {this.state.email}</p>
                </div>
            </section>
        )
    }
}

export default Contact