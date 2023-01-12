import Header from "../components/Header";
import Question from "../components/Question";
import Answer from '../components/Answer';
import Processing from "../components/Processing";
import Footer from "../components/Footer";
import { useState } from 'react';

const instance = {
    mass: 5.32,
    volume: 390.00,
    solvent: 'HF',
    molarMass: 20.01
}

const Algo = () => {

    const [answer, setAnswer] = useState('');
    const handleChange = (e) => {
        const studentAnswer = e.target.value;
        setAnswer(studentAnswer); 
    }

    function anspro () {
        console.log("This is anspro function molarity.0")
        console.log(answer)
        
        const moles = instance.mass / instance.molarMass;
        console.log(moles)
        const volumeInLiters = instance.volume / 1000;
        const teacherAnswer = moles / volumeInLiters
        console.log(teacherAnswer)

        const upperTolerance = teacherAnswer * 0.05 + teacherAnswer
        const lowerTolerance = teacherAnswer - 0.05 * teacherAnswer 
        console.log(`tolerance upper: ${upperTolerance}; lower: ${lowerTolerance}`)

        if (answer <= upperTolerance && answer >= lowerTolerance) {
            console.log('answer correct!')
            window.alert('Correct, Great job!')
        } else {
            window.alert('Incorrect, try again!')
        }
    }

    return (
        <>
            <Header />
            <Question mass={instance.mass} volume={instance.volume} solvent={instance.solvent}/>
            <Answer submittedValue={answer} changeFunction={handleChange} name={answer}/>
            <Processing anspro={anspro}/>
            <Footer />
        </>
    )
};

export default Algo;