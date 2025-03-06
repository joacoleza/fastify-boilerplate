import { FastifyInstance } from "fastify";
import { buildServer } from "./app";

describe("App", () => {
  let server: FastifyInstance;
  const pingUrl = "/ping";
  const authUrl = "/auth?username=admin&password=secret";
  const customHeader = { "h-custom": "some-value" };

  beforeAll(() => {
    server = buildServer();
  });

  afterAll(() => {
    server.close();
  });

  describe("GET /ping", () => {
    test("should return 200 with pong data", async () => {
      const response = await server.inject({
        method: "GET",
        url: pingUrl,
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ success: true, data: "pong" });
    });
  });

  describe("GET /auth", () => {
    test("should return 200 for valid request with custom header", async () => {
      const response = await server.inject({
        method: "GET",
        url: authUrl,
        headers: customHeader,
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ success: true });
    });

    test("should return 400 for request without custom header", async () => {
      const response = await server.inject({
        method: "GET",
        url: authUrl,
      });

      expect(response.statusCode).toBe(400);
      expect(response.json()).toEqual({ error: "Custom header is required" });
    });

    test("should return 500 for request with invalid user credentials", async () => {
      const response = await server.inject({
        method: "GET",
        url: "/auth?username=user&password=wrong",
        headers: customHeader,
      });

      expect(response.statusCode).toBe(500);
      expect(response.json()).toEqual({
        error: "Internal Server Error",
        message: "Must be admin",
        statusCode: 500,
      });
    });
  });
});
