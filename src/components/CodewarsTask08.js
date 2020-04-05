import React from 'react';

// Your task is to find the first element of an array that is not consecutive.
//
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
//
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

const CodewarsTask08 = () => {

    function firstNonConsecutive (arr) {
        const newArr = arr.filter((num, i) => Math.abs(arr[i - 1] - num) > 1);
        return newArr.length !== 0 ? newArr[0] : null;
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Your task is to find the first element of an array that is not consecutive.
                <br/>
                By not consecutive we mean not exactly 1 larger than the previous element of the array.
                <br/>
                E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {firstNonConsecutive([1,2,3,4,6,7,8])}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask08;


