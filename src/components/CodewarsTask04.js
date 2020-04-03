import React from 'react';

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained


const CodewarsTask04 = () => {

    function expressionMatter(a, b, c) {
        const resArr = [];
        resArr.push(a*b*c);
        resArr.push((a+b)*c);
        resArr.push(a+b*c);
        resArr.push(a*b+c);
        resArr.push(a*(b+c));
        resArr.push(a+b+c);

        return Math.max.apply(null, resArr);
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
                <br/>
                In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {expressionMatter(10, 5, 6)}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask04;


