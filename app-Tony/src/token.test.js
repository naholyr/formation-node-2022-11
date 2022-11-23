import { jest } from "@jest/globals";
import { checkToken, createToken } from "./token.js";

jest.useFakeTimers();

describe("Token", () => {
  it("should return a valid token", () => {
    const token = createToken("toto");
    expect(checkToken(token)).toEqual({ username: "toto" });
  });

  it("should return a token with valid expiration", () => {
    const token = createToken("toto");

    expect(checkToken(token)).toEqual({ username: "toto" });
  });
});
