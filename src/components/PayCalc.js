import React from "react";
import PayEstimate from "./PayEstimate";
import PayQuestions from "./PayQuestions";

function PayCalc() {

    const isComplete = false;
    return(
        <div id="paycalc">
            <h1>Pay Calculator</h1>
            <h2>Complete the calculator below for a pay estimate</h2>

        { isComplete ? <PayEstimate /> : <PayQuestions /> }
        </div>

    )
}

export default PayCalc