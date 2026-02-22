import { normalizeRegion, regionAbbrToName } from "..";

describe("normalizeRegion", () => {
  it("should normalize a full US state name", () => {
    expect(normalizeRegion("California")).toBe("CA");
  });

  it("should normalize a lowercase US state name", () => {
    expect(normalizeRegion("california")).toBe("CA");
  });

  it("should normalize a full Canadian province name", () => {
    expect(normalizeRegion("Ontario")).toBe("ON");
  });

  it("should return null for invalid input", () => {
    expect(normalizeRegion("invalid")).toBeNull();
  });

  it("should return null for empty string", () => {
    expect(normalizeRegion("")).toBeNull();
  });
});

describe("regionAbbrToName", () => {
  it("should convert a US state abbreviation to full name", () => {
    expect(regionAbbrToName("CA")).toBe("California");
  });

  it("should handle lowercase abbreviations", () => {
    expect(regionAbbrToName("ca")).toBe("California");
  });

  it("should convert a Canadian province abbreviation to full name", () => {
    expect(regionAbbrToName("ON")).toBe("Ontario");
  });

  it("should return null for invalid abbreviation", () => {
    expect(regionAbbrToName("invalid")).toBeNull();
  });
});
