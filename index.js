/**
 * 
 * Script to create a Irregular Verbs Tests.
 * 
 * The script returns two PDF files:
 * 
 * 1 Test: the test
 * 
 * Example:
 *          Infinitive    Past    P. Pariciple  Spanish Translation           
 *          ..........  ........      Awoken    ...................
 * 
 * 2nd Answer Sheet: is the solution for the test 
 * 
 * Example:
 *          Infinitive    Past    P. Pariciple  Spanish Translation           
 *          To awake      Awoke      Awoken       Despertar(se)
 */

// FS
import fs from 'fs';

// Pdf AutoTable
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
// Header of the table
const HEADER = [["INFINITIVE", "PAST", "PAST PARTICIPLE", "SPANISH TRANSLATION"]];

fs.readFile('./Irregular-Verbs.json', 'utf8', (err, data) => {
    if (err) {
        console.error("ERR>> " + err);
    }

    else {
        const irregularVerbs = JSON.parse(data);

        //Shuffles Verbs Array
        shuffleArray(irregularVerbs);

        generatePDF("Irregular-Verbs-Test", createGaps(irregularVerbs));
        generatePDF("Irregular-Verbs-Answers", irregularVerbs);

    }
})


// Generates a PDF
function generatePDF(fileName, body) {
    // Creates an fills anser PDF
    const doc = new jsPDF;

    doc.autoTable({

        theme: "grid",
        head: HEADER,
        body: body
    });

    doc.save(fileName + ".pdf");
}

// Creates an array with the same gaps
function createGaps(verbsArr) {

    // Empty

    const emptyVerb = Array(5);

    // Index of the hint
    let hintIndex = 0;

    const gapVerbArray = [];

    for (const verbRow of verbsArr) {

        const newEmptyVerb = [...emptyVerb];

        newEmptyVerb[hintIndex] = verbRow[hintIndex];

        gapVerbArray.push(newEmptyVerb);

        if (hintIndex === 3) {
            hintIndex = 0;
        }
        else {
            hintIndex++;
        }
    }

    return gapVerbArray;
}

// Shuffles Arrays 
function shuffleArray(arr) {


    for (let i = arr.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[r]] = [arr[r], arr[i]];
    }
}
