import { validateUser } from "./utils";

describe("validateUser", () => {
  test("should return true for admin user", () => {
    expect(validateUser("admin", "secret")).toBe(true);
  });

  test("should return false for non-admin user", () => {
    expect(validateUser("user", "password")).toBe(false);
  });
});
