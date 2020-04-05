import React from 'react';

// All Star Code Challenge #18
//
// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.

const CodewarsTask06 = () => {

    const strCount = (str,letter) => str.split('').map(l=>l.indexOf(letter)).filter(i=>i===0).length;

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                All Star Code Challenge #18
                <br/>
                Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
                <br/>
                If no occurrences can be found, a count of 0 should be returned.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {strCount('Hello', 'l')}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask06;


