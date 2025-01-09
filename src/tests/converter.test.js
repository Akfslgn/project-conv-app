import { describe, it, expect, test } from "vitest";
import { celsiousToFahrenheit, fahrenheitToCelsius } from "../convert.js";

describe("celsiousToFahrenheit tests", () => {
    it("converts 0°C to 32°F", () => {
        const result = celsiousToFahrenheit(0);
        expect(result).toBe(32);
    });

    it("converts 100°C to 212°F", () => {
        expect(celsiousToFahrenheit(100)).toBe(212);
    });

    it("converts 25°C to 77°F", () => {
        expect(celsiousToFahrenheit(25)).toBe(77);
    });

    it("converts negative temperatures", () => {
        expect(celsiousToFahrenheit(-40)).toBe(-40);
    })
});

describe("fahrenheitToCelsius tests", () => {
    it("converts 32°F to 0°C", () => {
        const result = fahrenheitToCelsius(32);
        expect(result).toBe(0);
    });

    it("converts 212°F to 100°C", () => {
        const result = fahrenheitToCelsius(212);
        expect(result).toBe(100);
    });

    it("converts 77°F to 25°C", () => {
        const result = fahrenheitToCelsius(77);
        expect(result).toBe(25);
    });
});