import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            message: "",
            email: "",
            UserMessage: ""
        };
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.name.length === 0) {
            this.setState({
                userMessage: "Name must be provided!",
            });
        } else if (this.state.message.length === 0) {
            this.setState({
                userMessage: "Message must be provided!",
            })
        } else if (this.state.email.length === 0) {
            this.setState({
                userMessage: "Email must be provided!",
            })
        } else if (this.state.message.toLowerCase().split(" ").join("").includes("fuck", "shit")) {
            this.setState({
                userMessage: "Please don't use that language",
            })
        } else {
            this.setState({
                userMessage: "All is okay!"
            });
        }
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
                        <label>Name: </label><input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}></input>
                        <br></br>
                        <label>Message: </label><textarea type="textarea" name="message" rows="5" cols="30" value={this.state.message} onChange={this.handleOnChange}></textarea>
                        <br></br>
                        <label>Email: </label><input type="email" name="email" value={this.state.email} onChange={this.handleOnChange}></input>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </form>
                    <p><b>{this.state.userMessage}</b></p>
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