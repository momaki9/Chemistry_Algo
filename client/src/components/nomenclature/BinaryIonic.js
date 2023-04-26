import instancing from "../../utils/instancing";
import { useState } from "react";
import Answer from "../Answer";


const binaryIonicCompounds = [
    {
        compound: "NaCl",
        name: "sodium chloride"
    },
    {
        compound: "KCl",
        name: "potassium chloride"
    },
    {
        compound: "NaBr",
        name: "sodium bromide"
    },
    {
        compound: "KBr",
        name: "potassium bromide"
    },
    {
        compound: "LiF",
        name: "lithium fluoride"
    },
    {
        compound: "NaI",
        name: "sodium iodide"
    }
];

// console.log(binaryIonicCompounds.length)
const randomBinaryComp = instancing.compoundRandomizer(binaryIonicCompounds);
// console.log(randomBinaryComp);

const BinaryIonic = () => {

    const [answer, setAnswer] = useState('');
    const [testFeedback, setTestFeedback] = useState('');
    const handleChange = (e) => {
        const studentAnswer = e.target.value;
        setAnswer(studentAnswer);
    }

    const anspro = () => {
        const teacherAnswer = randomBinaryComp.name;
        const studentAnswer = answer.toLowerCase().trim();
        if (studentAnswer == teacherAnswer) {
            setTestFeedback("Correct!");
        }
        else {
            // window.alert("Incorrect, try again!");
            // console.log("false");
            setTestFeedback("Wrong!");
        }
    }

    return (
        <>
        <h1>Naming Binary Ionic Compounds</h1>
        <h3>Before attempting the practice below, here are a few things to remember when trying to name binary ionic compounds:</h3>
        <ul>
            <li>Ionic compounds are compounds formed from metals and nonmetals, where electrons leave the metal to end up with the nonmetal for the ionic bond.</li>
            <li>Binary ionic compounds are formed between <em>one</em> metal and <em>one</em> nonmetal.</li>
            <li>The name of the metal is taken as is from the Periodic Table. The ending of the <b>nonmetal</b> is changed to <em>-ide</em>. Combine the names of the metal and nonmetal to give the name of the binary ionic compound.</li>
        </ul>
        <h3>Practice</h3>
        <h4>What is the name of {randomBinaryComp.compound}?</h4>
        <p>Teacher Answer = {randomBinaryComp.name}</p>
        <Answer submittedValue={answer} changeFunction={handleChange} name={answer} />
        <button onClick={anspro}>Check my answer</button>
        <button onClick={instancing.generateRandomSeed}>Try Another!</button>
        <h3 value={testFeedback}>{testFeedback}</h3>
        </>
    )
};

export default BinaryIonic;