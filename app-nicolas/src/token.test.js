import { jest } from "@jest/globals";
import { checkToken, createToken } from "./token.js";

describe("Token", () => {
  it("should return a valid token", () => {
    const token = createToken("toto");
    expect(checkToken(token)).toMatchObject({ username: "toto" });
  });

  it("should check token expiration", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2020-01-01"));

    const token = createToken("toto");

    jest.setSystemTime(new Date("2020-01-03"));

    expect(() => checkToken(token)).toThrow(/jwt expired/);
  });
});
