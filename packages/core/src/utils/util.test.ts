import { describe, expect, it } from "vitest";
import { timeParser } from "./util";

describe('timeParser', () => {

  // Parses a valid ISO string to YYYY-MM-dd mm:ss format
  it('should parse a valid ISO string to YYYY-MM-dd mm:ss format', () => {
    const result = timeParser("2023-04-01T00:00:00.000Z");
    expect(result).toEqual("2023-04-01 00:00");
  });

  // Returns the correct date and time format
  it('should return the correct date and time format', () => {
    const result = timeParser("2023-04-01T00:00:00.000Z");
    expect(result).toEqual("2023-04-01 00:00");
  });

  // Handles time zone correctly
  it('should handle time zone correctly', () => {
    const result = timeParser("2023-04-01T00:00:00.000Z");
    expect(result).toEqual("2023-04-01 00:00");
  });

  // Throws an error when given an invalid date string
  it('should throw an error when given an invalid date string', () => {
    expect(() => {
      timeParser("invalid-date-string");
    }).toThrow("Invalid date string");
  });

  // Handles time zones with half-hour offsets
  it('should handle time zones with half-hour offsets', () => {
    const result = timeParser("2023-04-01T00:30:00.000Z");
    expect(result).toEqual("2023-04-01 00:30");
  });


});
