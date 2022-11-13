import React from "react";

class PayQuestions extends React.Component {
    constructor(props) {
        super(props)

        // Set state using this.state
        console.log("constructor")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log("render")
        return<div><h1>Pay Questions</h1></div>;
    }
}

export default PayQuestions;