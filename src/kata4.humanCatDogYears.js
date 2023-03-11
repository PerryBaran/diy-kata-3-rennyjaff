const humanCatDogYears = (number) => {
  const remainingCatYears = (number - 2) * 4;
  const AgeTwo = 24;
  const catAge = remainingCatYears + AgeTwo;
  const remainingDogYears = (number - 2) * 5;
  const dogAge = remainingDogYears + AgeTwo;
  const arr = [number, catAge, dogAge];
  return arr;
};

module.exports = humanCatDogYears;
