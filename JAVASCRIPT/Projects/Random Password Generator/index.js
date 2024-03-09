function genetatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const inumbersChars = "0123456789";
    const symbolsChars = "!#$%&\'()*+,-./:;<=>?@[]^_`{|}~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase? uppercaseChars : "";
    allowedChars += includeNumbers? inumbersChars : "";
    allowedChars += includeSymbols? symbolsChars : "";

    if(passwordLength <= 0){
        return `Password must be at least 1 character`;
    }
    if(allowedChars.length === 0){
        return `Atleast one character needs to be provided`;
    }

    for (let i=0; i<passwordLength; i++) {
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }

    return `${password}`;
}


const passwordLength = 24;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = genetatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`GENERATED PASSWORD: ${password}`);