export const toProperCase = (words, delimiter) => {
    if (!delimiter) {
        return toProperCaseNoSpace(words);
    }

    let proper = "";
    words.split(delimiter).map((word, index) => word.split("").map((char, index) => index === 0 ? proper+=" "+char.toUpperCase() : proper+=char.toLowerCase()) );
    return proper;
};

const toProperCaseNoSpace = (word) => {
    let proper = "";
    word.split('').map( (char, index) => char === char.toUpperCase() || index === 0 ? proper+=" "+char.toUpperCase() : proper+=char.toLowerCase());
    return proper;
}