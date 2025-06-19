// lib/country-to-region.ts

export type Region =
  | "NA"     // North America
  | "EU"     // Western Europe
  | "CEE"    // Central & Eastern Europe
  | "JPKR"   // Japan & Korea
  | "ANZ"    // Australia / New Zealand
  | "IND"    // India
  | "CHI"    // China
  | "ME"     // Middle East
  | "AFR"    // Africa
  | "LATAM"; // Latin America

export const COUNTRY_TO_REGION: Record<string, Region> = {
  // North America
  US: "NA", CA: "NA", MX: "NA",

  // Western Europe
  NL: "EU", BE: "EU", DE: "EU", FR: "EU", ES: "EU", IT: "EU", IE: "EU", AT: "EU", PT: "EU", LU: "EU",

  // Central & Eastern Europe
  PL: "CEE", HU: "CEE", RO: "CEE", CZ: "CEE", SK: "CEE", BG: "CEE", SI: "CEE", HR: "CEE",
  LT: "CEE", LV: "CEE", EE: "CEE",

  // Japan & Korea
  JP: "JPKR", KR: "JPKR",

  // Australia / New Zealand
  AU: "ANZ", NZ: "ANZ",

  // India
  IN: "IND",

  // China
  CN: "CHI", HK: "CHI", MO: "CHI",

  // Middle East
  AE: "ME", SA: "ME", KW: "ME", QA: "ME", OM: "ME", BH: "ME", IL: "ME", JO: "ME", EG: "ME",

  // Africa
  ZA: "AFR", NG: "AFR", KE: "AFR", MA: "AFR", GH: "AFR", DZ: "AFR", TN: "AFR",

  // Latin America
  BR: "LATAM", AR: "LATAM", CL: "LATAM", CO: "LATAM", PE: "LATAM",
  VE: "LATAM", UY: "LATAM", EC: "LATAM", PY: "LATAM",
};

export function mapCountryToRegion(countryCode: string): Region {
  return COUNTRY_TO_REGION[countryCode.toUpperCase()] ?? "NA";
}
