// Shuffles the list of verbs
function shuffleVerbs(arr) {

    cpArr = [...arr];
    for (let i = cpArr.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        [cpArr[i], cpArr[r]] = [cpArr[r], cpArr[i]];
    }

    return cpArr;
}

export default shuffleVerbs;