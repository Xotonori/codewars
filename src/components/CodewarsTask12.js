import React from 'react';

// Link to task - https://www.codewars.com/kata/515de9ae9dcfc28eb6000001


const CodewarsTask12 = () => {

    function solution(str){

        const arr = str.split('');
        const res = [];

        for (let i = 1; i <= arr.length + 1; i++) {
            if(i % 2 === 0) {
                res.push(arr[i - 1] !== undefined ? arr[i - 2] + arr[i - 1] : arr[i - 2] + '_');
            }
        }

        return res;
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>6kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Complete the solution so that it splits the string into pairs of two characters.
                If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {solution("abcdefg")}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask12;


