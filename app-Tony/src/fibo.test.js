import { fibo } from "./fibo.js";

describe("fibo()", () => {
  it("should return 0 when n is 0", () => {
    const result = fibo(0);
    expect(result).toEqual(0);
  });

  it("should return 1 when n is 1", () => {
    expect(fibo(1)).toEqual(1);
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
