const humanCatDogYears = (number) => {
  const AgeTwo = 24;
  const remainingCatYears = (number - 2) * 4;
  const catAge = remainingCatYears + AgeTwo;
  const remainingDogYears = (number - 2) * 5;
  const dogAge = remainingDogYears + AgeTwo;
  const arr = [number, catAge, dogAge];
  return arr;
};

module.exports = humanCatDogYears;
