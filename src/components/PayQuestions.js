import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { questions } from "./PayCalc";


class PayQuestions extends React.Component {
    constructor(props) {
        super(props);

        // Set state using this.state
        // console.log("constructor")
    }

    componentDidMount() {
        // console.log("componentDidMount")
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate")
    }
    
    componentWillUnmount() {
        // console.log("componentWillUnmount")
    }

    handleNextButton() {
        this.props.incrementNumber();
    }

    render() {
        // console.log("render")
        return(
        <Box sx={{border: "1px dashed grey"}}>
            <Typography>
                <h2>Pay Questions</h2>
                <h6>Question {this.props.questionNumber} / {questions.length}</h6>
            </Typography>
            <Typography>
                {questions[this.props.questionNumber]}
            </Typography>

            {this.props.questionNumber < questions.length &&             <Button variant="outlined" onClick={this.props.incrementNumber}>Next</Button>}
        </Box>
        );
    };
};

export default PayQuestions;