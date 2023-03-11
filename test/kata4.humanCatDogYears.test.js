const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it(" when passed a number, it returns an array of three numbers, the first number should be the human years passed as an argument, the second element is cat years, the third element is dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
});
