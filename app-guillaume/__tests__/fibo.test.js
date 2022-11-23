import { fibo } from "../src/fibo.js";

describe("fibo()", () => {
  it("Should return 1 when is 0", () => {
    const result = fibo(0);
    expect(result).toEqual(0);
  });

  it("Should return 1 when is 1", () => {
    const result = fibo(1);
    expect(result).toEqual(1);
  });

  it.each([
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
  ])(`should return %i when n is %i`, (input, expectedResult) => {
    expect(fibo(input)).toEqual(expectedResult);
  });
});
