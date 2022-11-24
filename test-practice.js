function capitalizeString(string) {
  return string.at(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let myString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    myString += string[i];
  }

  return myString;
}

module.exports = {
  capitalizeString,
  reverseString,
};
