import React from 'react';

// Link to task - https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f


const CodewarsTask10 = () => {

    function findScreenHeight(width, ratio) {
        let mathRatio = ratio.split(':')[0]/ratio.split(':')[1];
        return `${String(width)}x${String(width/mathRatio)}`
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>7kyu</strong></div>
            <br/>
            <div className={"condition"}>
                Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits.
                He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box.
                Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {findScreenHeight(3840,"32:9")}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask10;


