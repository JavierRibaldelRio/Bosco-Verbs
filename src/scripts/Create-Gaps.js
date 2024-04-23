// Creates an array with the gaps
function createGaps(verbsArr) {

    // Empty

    const emptyVerb = Array(4);

    // Index of the hint
    let hintIndex = 0;

    const gapVerbArray = [];

    for (const verbRow of verbsArr) {

        const newEmptyVerb = [...emptyVerb];

        newEmptyVerb[hintIndex] = verbRow[hintIndex];

        gapVerbArray.push(newEmptyVerb);

        if (hintIndex === 2) {
            hintIndex = 0;
        }
        else {
            hintIndex++;
        }
    }

    return gapVerbArray;
}

export default createGaps;