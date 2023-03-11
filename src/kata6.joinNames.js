const joinNames = (namesObj) => {
  const getNames = namesObj.map(({ name }) => name);
  const finalName = getNames.pop();
  return `${getNames.join(", ")} & ${finalName}`;
};
module.exports = joinNames;
