import React from 'react'
import { calculateInvestmentResults } from "../util/investment";
function Results({userInput}) {
    const resultData = calculateInvestmentResults(userInput)
    console.log(resultData)
    return (
    <div>Results</div>
    )
}

export default Results