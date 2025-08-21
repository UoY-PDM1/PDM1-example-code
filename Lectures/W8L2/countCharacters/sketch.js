/**
 * Counts the number of occurrences of a particular character in an array of strings.
 * @param {String[]} arrayOfStrings An array of strings
 * @param {String} character The character to count (a String of length 1).
 * @returns {number} The number of occurrences
 */
function countCharacters(arrayOfStrings, character) {
    let count = 0;
    for (const text of arrayOfStrings) {
        for (const letter of text) {
            if (letter === character) {
                count++;
            }
        }
    }
    return count;
}