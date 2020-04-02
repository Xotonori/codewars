import React from 'react';

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//
// Your task is to calculate how many blank pages do you need.


const CodewarsTask02 = () => {

    function paperwork(n, m) {
        if (m < 0 || n < 0) {
            return 0;
        }
        return m * n;
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
                <br/>
                Your task is to calculate how many blank pages do you need.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {paperwork(40, 50)}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask02;