import React from 'react';

// level is 6kyu
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

const CodewarsTask01 = () => {

    function solution(number) {

        if (number === 0 || typeof number !== 'number') {
            return 0;
        }

        const acceptedNumber = Math.abs(number);
        const multipleNumbers = [3, 5];
        const checkedNaturalNumbers = [];

        for (let i = 0; i < acceptedNumber; i++) {
            for (let j = 0; j < multipleNumbers.length; j++) {
                if (i % multipleNumbers[j] === 0) {
                    if (checkedNaturalNumbers.indexOf(i) === -1) {
                        checkedNaturalNumbers.push(i)
                    }
                }
            }
        }

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return checkedNaturalNumbers.reduce(reducer);
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>6kyu</strong></div>
            <br/>
            <div className={"condition"}>
                If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
                <br/>
                Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
                <br/>
                Note: If the number is a multiple of both 3 and 5, only count it once.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {solution(10)}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask01;
