import React from 'react';

// Link to task - https://www.codewars.com/kata/52742f58faf5485cae000b9a/

const CodewarsTask13 = () => {

    function formatDuration (seconds) {

        if(seconds === 0) {
            return 'now'
        }

        let y = 0;
        let d = 0;
        let h = 0;
        let m = 0;
        let s = seconds;
        const resArr = [];

        while(s >= 60) {
            if(m >= 60) {
                h += 1;
                m = 0;
            }
            m += 1;
            s = s - 60;
        }

        if(m === 60) {
            h += 1;
            m = 0;
        }

        while(h >= 24) {
            if(d >= 365) {
                y += 1;
                d = 0;
            }
            d += 1;
            h = h - 24;
        }

        if(d === 365) {
            y += 1;
            d = 0;
        }

        y !== 0 ? y > 1 ? resArr.push(`${y} years`) : resArr.push(`${y} year`) : resArr.push(0);
        d !== 0 ? d > 1 ? resArr.push(`${d} days`) : resArr.push(`${d} day`) : resArr.push(0);
        h !== 0 ? h > 1 ? resArr.push(`${h} hours`) : resArr.push(`${h} hour`) : resArr.push(0);
        m !== 0 ? m > 1 ? resArr.push(`${m} minutes`) : resArr.push(`${m} minute`) : resArr.push(0);
        s !== 0 ? s > 1 ? resArr.push(`${s} seconds`) : resArr.push(`${s} second`) : resArr.push(0);

        const result = resArr.filter((item) => item !== 0);

        return result.map((item) => {

            if(result.length === 1) {
                return item;
            }
            else if (result[result.length-1] === item && result.length > 1) {
                return ' and ' + item;
            }
            else if (result.length > 1 && result[result.length-2] === item) {
                return item;
            }
            else {
                return item + ', ';
            }
        }).join('');

    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>4kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
                <br/>
                The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {formatDuration(5469)}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask13;


