import Header from "../components/Header";
import Question from "../components/Question";
import Answer from '../components/Answer';
import Processing from "../components/Processing";
import Footer from "../components/Footer";
import { useState } from 'react';
import { massRandomizer, compoundRandomizer, specificRandomizer, generateRandomSeed } from '../utils/instancing'

const library = {
    mass: 5.32,
    volume: 390.00,
    set: [
        {
            compound: "HCl",
            molarMass: 36.458
        },
        {
            compound: "HF",
            molarMass: 20.01
        },
        {
            compound: "HBr",
            molarMass: 80.91
        },
        {
            compound: "NaCl",
            molarMass: 58.44
        },
        {
            compound: "HI",
            molarMass: 127.911
        },
        {
            compound: "NaBr",
            molarMass: 102.894
        },
        {
            compound: "NaOH",
            molarMass: 39.997
        },
        {
            compound: "KCl",
            molarMass: 74.5513
        },
        {
            compound: "LiBr",
            molarMass: 86.845
        },
        {
            compound: "RbCl",
            molarMass: 120.921
        },
        {
            compound: "CaS",
            molarMass: 72.143
        }
    ]
}

const instance = {
    mass: massRandomizer(library.mass),
    volume: specificRandomizer(library.volume),
    testCompound: compoundRandomizer(library.set)
};

const Algo = () => {
    const [answer, setAnswer] = useState('');
    const handleChange = (e) => {
        const studentAnswer = e.target.value;
        setAnswer(studentAnswer); 
    }

    function anspro () {
        console.log("This is anspro function molarity.0")
        const moles = instance.mass / instance.testCompound.molarMass;
        const volumeInLiters = instance.volume / 1000;
        const teacherAnswer = moles / volumeInLiters;
        const upperTolerance = teacherAnswer * 0.05 + teacherAnswer;
        const lowerTolerance = teacherAnswer - 0.05 * teacherAnswer;

        if (answer <= upperTolerance && answer >= lowerTolerance) {
            console.log('answer correct!')
            window.alert('Correct, Great job!')
            window.location.reload();
        } else {
            window.alert('Incorrect, try again!')
        }
    }

    return (
        <>
            <Header />
            <Question mass={instance.mass} volume={instance.volume} solvent={instance.testCompound.compound}/>
            <Answer submittedValue={answer} changeFunction={handleChange} name={answer}/>
            <Processing anspro={anspro}/>
            <Footer />
            <div>
                <button onClick={generateRandomSeed}>See another version</button>
                <h4>Hint: divide mass by molar mass to get moles then divide by volume to get molarity</h4>
            </div>
        </>
    )
};

export default Algo;