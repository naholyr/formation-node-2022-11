import { createToken, checkToken } from "../src/routes/token.js";
import { jest } from "@jest/global";

describe("Token", () => {
  it("should return a valid token", () => {
    const token = createToken("toto");
    expect(checkToken(token)).toMatchObject({ username: "toto" });
  });

  it("should return a token with valid expiration", () => {
    jest.useFakeTimers().setSystmeTime(new Date("2020-01-01"));

    const token = createToken("toto");

    jest.setSystmeTime(new Date("2020-01-03"));

    expect(() => checkToken(token)).trow({ username: "toto" });
  });
});
