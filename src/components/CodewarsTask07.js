import React from 'react';

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

const CodewarsTask07 = () => {

    function differenceInAges(ages){
        return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
                <br/>
                You will be given an array of all the family members' ages, in any order.<br/>
                The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.<br/>
                Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {differenceInAges([82, 15, 6, 38, 35])}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask07;


