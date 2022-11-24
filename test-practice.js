function capitalizeString(string) {
  return string.at(0).toUpperCase() + string.slice(1);
}

module.exports = {
  capitalizeString,
};
