import { describe, expect, it } from "bun:test";

// MARK: Example test

describe("example test", () => {
  const mockArray = () => {
    return [];
  };
  const emptyArray = mockArray();
  it("returns empty array", () => {
    expect(emptyArray).toEqual([]); // toEqual is a method of expect
  });
});
