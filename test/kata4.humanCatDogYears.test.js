const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns the age in human years, cat years and dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
  });
});
