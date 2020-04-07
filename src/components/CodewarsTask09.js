import React from 'react';

// Link to task - https://www.codewars.com/kata/5a5c118380eba8a53d0000ce

const CodewarsTask09 = () => {

    const CONVERSION_RATES = {
        "Argentinian Peso": 10,
        "Armenian Dram": 478,
        "Bangladeshi Taka": 1010010,
        "Croatian Kuna": 110,
        "Czech Koruna": 10101,
        "Dominican Peso": 110000,
        "Egyptian Pound": 18,
        "Guatemalan Quetzal": 111,
        "Haitian Gourde": 1000000,
        "Indian Rupee": 63,
        "Japanese Yen": 1101111,
        "Kenyan Shilling": 1100110,
        "Nicaraguan Cordoba": 11111,
        "Norwegian Krone": 1000,
        "Philippine Piso": 110010,
        "Romanian Leu": 100,
        "Samoan Tala": 11,
        "South Korean Won": 10000100011,
        "Thai Baht": 100000,
        "Uzbekistani Som": 8333,
        "Venezuelan Bolivar": 1010,
        "Vietnamese Dong": 101100000101101
    };

    function convertMyDollars(usd, currency) {

        let result = !/[AEIOUY]/.test(currency[0])
            ? parseInt(CONVERSION_RATES[currency], 2) * usd
            : CONVERSION_RATES[currency] * usd;

        return `You now have ${result} of ${currency}.`
    }

    return (
        <div>
            <div className={"level-task"}>Level task is <strong>7kyu</strong></div>
            <br/>
            <div className={"condition"}>
                You are currently in the United States of America. The main currency here is known as the United States Dollar (USD).
                You are planning to travel to another country for vacation, so you make it today's goal to convert your USD (all bills, no cents) into the appropriate currency.
                This will help you be more prepared for when you arrive in the country you will be vacationing in.
                <br/>
                Given an integer (usd) representing the amount of dollars you have and a string (currency) representing
                the name of the currency used in another country, it is your task to determine the amount of foreign currency you will receive when you exchange your United States Dollars.
                <br/>
                However, there is one minor issue to deal with first. The screens and monitors at the Exchange are messed up.
                Some conversion rates are correctly presented, but other conversion rates are incorrectly presented.
                For some countries, they are temporarily displaying the standard conversion rate in the form of a number's binary representation!
            </div>
            <br/>
            <div>
                <strong>Result:</strong> {convertMyDollars(322, "Armenian Dram")}
            </div>
            <br/>
            <hr/>
        </div>
    )
};

export default CodewarsTask09;


