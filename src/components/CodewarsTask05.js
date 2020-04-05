import React from 'react';

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const CodewarsTask05 = () => {

    function arrayMadness(a, b) {
        if (
            a.map(num => Math.pow(num, 2)).reduce((accum, val) => accum + val)
            >
            b.map(num => Math.pow(num, 3)).reduce((accum, val) => accum + val)
        ) {
            return 'true';
        } else {
            return 'false'
        }
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Given two integer arrays a, b, both of length >= 1, create a program that returns true
                if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each
                element in b.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {arrayMadness([3, 11, 52], [12, 5, 3, 2])}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask05;


