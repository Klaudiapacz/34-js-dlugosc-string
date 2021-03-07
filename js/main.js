let a = "Uwielbiam JavaScript";
let b = "Jestem świetnym programistą";

const removeWhite = x => {
    return x.replace(/\s+/g, '');
}

const stringToTable = n => {
    /* n = removeWhite(n); */
    return [...removeWhite(n)];
}

const longerString = (s1, s2) => {
    s1 = stringToTable(s1).length;
    s2 = stringToTable(s2).length;
    if (s1 > s2) {
        return "Pierwszy string jest dłuższy";
    }
    else if ( s1 < s2) {
        return "Drugi String jest dłuższy";
    }
    else {
        return "Stringi są sobie równe";
    }

}

console.log(longerString(a , b));