import request from "supertest";
import { jest } from "@jest/globals"; // unneeded without ESM

const mockFibo = jest.fn(() => 42);
const mockFiboAsync = jest.fn(() => Promise.resolve(42));

/* without ESM:
jest.mock("../../fibo.js", () => ({
  fibo: mockFibo,
  fiboAsync: jest.requireActual("../../fibo.js").fiboAsync,
}));
*/
jest.unstable_mockModule("../../fibo.js", () => ({
  fibo: mockFibo,
  fiboAsync: mockFiboAsync,
}));

const { app } = await import("../../app.js");

describe("App", () => {
  describe("GET /fibo/:number", () => {
    it("should call fibo()", async () => {
      const response = await request(app).get("/fibo/sync/10");
      expect(mockFibo).toHaveBeenCalledWith(10);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ input: 10, output: 42 });
    });
  });
});
