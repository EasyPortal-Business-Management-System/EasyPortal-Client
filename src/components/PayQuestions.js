import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { questions } from "./PayCalc";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const radioOptions = [
    {
        value: 1,
        label: "Full Time"
    },
    {
        value: 2,
        label: "Part Time"
    },
    {
        value: 3,
        label: "Casual"
    },
]

class PayQuestions extends React.Component {
    constructor(props) {
        super(props);

        // Set state using this.state
        // console.log("constructor")
        this.state= {
            answers: [],
            currRadioValue: null
        };

        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
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

    handleRadioChange(event,value) {
        console.log("Radio button on change:", event, value);
        let currentValue = value;
        this.setState({
            currRadioValue: currentValue,
        });
    }

    handleNextButton() {
        this.props.incrementNumber();

        // Save answers

        this.setState(function (prevState, props) {
            return {
                answers: [...prevState.answers, prevState.currRadioValue],
            }
        });
    }

    render() {
        // console.log("render")
        return(
        <Box sx={{border: "1px dashed grey"}}>
            <Typography>
                <h2>Pay Questions</h2>
                <h6>Question {this.props.questionNumber} / {questions.length}</h6>
            </Typography>

            {this.props.questionNumber < questions.length && (
                <div>
                    <Typography>
                        {questions[this.props.questionNumber]}
                    </Typography>
                    <RadioGroup onChange={this.handleRadioChange}>
                        {radioOptions.map((e) => (
                            <FormControlLabel key={e.value} value={e.value} control={<Radio />} label={e.label} />
                        ))};
                    </RadioGroup>
                    <Typography>Answers: {this.state.answers}</Typography>

                    <Button variant="outlined" onClick={this.props.incrementNumber}>Next</Button>
                </div>
            )}
        </Box>
        );
    };
};

export default PayQuestions;