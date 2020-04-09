import React from 'react';

// Link to task - https://www.codewars.com/kata/5ac54bcbb925d9b437000001


const CodewarsTask11 = () => {

    function findMiddle(str){

        if(typeof str !== 'string') {
            return -1;
        }

        const arrNums = str.split('').filter((val) => !/[^0-9]/i.test(val));

        if(arrNums.length === 0) {
            return -1;
        }

        let resArr = arrNums.reduce((acc, val) => acc * val).toString().split('');

        if (resArr.length % 2 === 0) {
            return Number(resArr[(resArr.length/2)-1]+resArr[resArr.length/2]);
        } else {
            return Number(resArr[(resArr.length-1)/2]);
        }
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>7kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.
                <br/>
                Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.
                <br/>
                Not all strings will contain digits. In this case and the case for any non-strings, return -1.
                <br/>
                If the product has an even number of digits, return the middle two digits
                <br/>
                Example: 1563 -> 56
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {findMiddle('58jd9fgh/fgh6s.,sdf')}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask11;


