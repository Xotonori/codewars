import React from 'react';

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
//
//     Your task is to change the letters with diacritics:
//
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.


const CodewarsTask03 = () => {

    function correctPolishLetters(string) {
        const polishLetters = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
        const latinLetters = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];

        const arrayInputString = string.split('');
        const checkedIndexes = [];

        arrayInputString.filter(letter => {
            checkedIndexes.push(polishLetters.indexOf(letter))
        });

        return arrayInputString.map((letter, index) => {

            if (checkedIndexes[index] === -1) {
                return letter;
            } else {
                return latinLetters[checkedIndexes[index]]
            }

        }).join('');

    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>8kyu</strong></div>
            <br/>
            <div className={"condition"}>
                There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
                <br/>
                Your task is to change the letters with diacritics:
                <br/>
                ą -> a,<br/>
                ć -> c,<br/>
                ę -> e,<br/>
                ł -> l,<br/>
                ń -> n,<br/>
                ó -> o,<br/>
                ś -> s,<br/>
                ź -> z,<br/>
                ż -> z
                <br/>
                and print out the string without the use of the Polish letters.
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {correctPolishLetters('Jędrzej Błądziński')}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask03;
