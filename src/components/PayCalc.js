import React from "react";
import PayEstimate from "./PayEstimate";
import PayQuestions from "./PayQuestions";

export const questions = [
    "Job Position",
    "Rostered Hours"
]

class PayCalc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };

        // Binding so that `this` can be used
        this.incrementNumber = this.incrementNumber.bind(this);
    }

    incrementNumber() {
        this.setState((state, props) => ({
            number: state.number + 1
        }))
    }

    render() {
    return(
        <div id="paycalc">
            <h1>Pay Calculator</h1>
            <h2>Complete the calculator below for a pay estimate</h2>

        {this.state.number === questions.length ?  (
            <PayEstimate /> 
        ) : (
            <PayQuestions questionNumber={this.state.number} incrementNumber={this.incrementNumber}/> 
        )}
        </div>
        );
    };
};

export default PayCalc