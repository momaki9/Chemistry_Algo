const library = {
    mass: 202,
    compound: ['HCl', 'HF', 'HBr', 'HI', 'HNO3', 'NaCl', 'KI', 'NaBr', 'KCl', 'NaOH', 'KF']
}

// randomizes in precision or decimal places (use with smalling values OR if small variation is needed)
const massRandomizer = (mass) => {
    const randomMass = Math.random(11323112 * 10003290923) + mass
    return randomMass.toFixed(4);
}

// generate a random index value between 1 and 10 and return the value in the array with that generated index
const compoundRandomizer = (arr) => {
    const index = Math.floor(Math.random() * 10) + 1;
    return arr[index];
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

module.exports = {massRandomizer, compoundRandomizer, wideRandomizer, specificRandomizer, generateRandomSeed };