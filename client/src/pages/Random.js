import Feedback from "../components/Feedback";

const library = {
    mass: 202,
    compound: ['HCl', 'HF', 'HBr', 'HI', 'HNO3', 'NaCl', 'KI', 'NaBr', 'KCl', 'NaOH', 'KF'],
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
        }
    ]
}


// randomizes in precision or decimal places (use with smalling values OR if small variation is needed)
const massRandomizer = (mass) => {
    const randomMass = Math.random(11323112 * 10003290923) + mass
    return randomMass.toFixed(4);
}

const compoundRandomizer = () => {
    const index = Math.floor(Math.random() * 10) + 1;
    // console.log(library.set[index].compound)
    console.log(index)
    console.log(library.set[index])
    return library.set[index];
}

// large randomizing in value
const wideRandomizer = () => {
    const randomMass = Math.floor(Math.random() + library.mass * Math.random(10) + 1);
    return randomMass;
}

// rounds to 2 decimal places
const specificRandomizer = (value) => {
    const randomMass = Math.random() * 10 + value;
    return randomMass.toFixed(2);
}

const generateRandomSeed = () => {
    window.location.reload();
}

const Random = () => {
    return (
        <>
            <h1>Random generator</h1>
            <h3>Mass 1: {massRandomizer(12)}</h3>
            <h3>Mass 2: {wideRandomizer()}</h3>
            <h3>Mass 3: {specificRandomizer(200)}</h3>
            <h3>Compound: {compoundRandomizer().compound}</h3>
            <h3>Molar Mass: {compoundRandomizer().molarMass}</h3>
            {/* <button onClick={massRandomizer}>Click Me!</button>
        <br />
        <button onClick={wideRandomizer}>More random</button>
        <br />
        <button onClick={specificRandomizer}>precision checker</button>
        <br />
        <button onClick={compoundRandomizer}>Compound Picker</button> */}
            <br />
            <button onClick={generateRandomSeed}>See Another Instance</button>
            <Feedback />
        </>
    )
}

export default Random;