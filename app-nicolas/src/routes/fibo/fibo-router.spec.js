import request from "supertest";

const { app } = await import("../../app.js");

describe("App", () => {
  describe("GET /fibo/:number", () => {
    it("should call fibo()", async () => {
      const response = await request(app).get("/fibo/sync/10");
      expect(response.status).toEqual(200);
      expect(response.body).toMatchObject({ output: 55 });
      expect(response.body).toMatchSnapshot();
    });
  });
});
