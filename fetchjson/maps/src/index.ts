// create empty arraysm
const someString = 'CreatedString';
const someStringArr = someString.split('');

const reducedToBinary = someStringArr.reduce((accum, current) => {
  const extractedASCII = current.charCodeAt(0);
  const convertedToBinary = extractedASCII.toString(2);
  return (accum += convertedToBinary);
}, '');

const reducedToBinaryArr = reducedToBinary.split('');

const splitByBytes = reducedToBinaryArr.reduce((accum, current) => {
  const firstEncodedBlock = parseInt(current) ? '0' : '00';

  return (accum += firstEncodedBlock + ' ');
}, '');

console.log(reducedToBinary);
function splitBinaryToBlocksByByte(recivedBytesString) {
  let result = '';
  let currentByte;
  let previousByte;
  let sameByteCouter = 0;
  for (let i = 0; i < recivedBytesString.length; i++) {
    if (currentByte === recivedBytesString[i - 1]) {
      currentByte = recivedBytesString[i];
      sameByteCouter += 1;
    } else if (currentByte !== recivedBytesString[i - 1]) {
      result += `${currentByte}x${sameByteCouter} `;
      sameByteCouter = 0;
    }
  }

  return result;
}

const processed = splitBinaryToBlocksByByte(reducedToBinary);
console.log(processed);

//console.log(reducedToBinary)
// console.log(splitByBytes)

// console.log(reducedToBinaryArr)

// console.log(reduced);

// const firstCharCode = someStr.charCodeAt(0);
// const convertedToBin = firstCharCode.toString(2);
// console.log(convertedToBin);

//rawString.
//splitTocharacters
//charactersToASCII
//ASCIICharsToBinary
//

//const transcodedString= compose(
//  getString();
//  covertToASCIICodes();
//  convertToBinary();
//  convertToAwesomeEncoding()
//);
//generae empty array for
