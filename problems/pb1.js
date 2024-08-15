// declare and define function here

    function replaceSpaces(str, char) {
    stri = str.replaceAll(' ', char);
    console.log(stri);
    return stri;
}

// test cases
// replaceSpaces('Today is a good day', '-'); // -> 'Today-is-a-good-day'
// replaceSpaces('Tomorrow will be a great day', '_'); // -> 'Tomorrow_will_be_a_Great_Day'
