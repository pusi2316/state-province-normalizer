const US_STATES = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
} as const;

const CANADIAN_PROVINCES = {
  AB: "Alberta",
  BC: "British Columbia",
  MB: "Manitoba",
  NB: "New Brunswick",
  NL: "Newfoundland and Labrador",
  NS: "Nova Scotia",
  ON: "Ontario",
  PE: "Prince Edward Island",
  QC: "Quebec",
  SK: "Saskatchewan",
  NT: "Northwest Territories",
  NU: "Nunavut",
  YT: "Yukon",
} as const;

const STATE_NAME_TO_ABBR = Object.entries({
  ...US_STATES,
  ...CANADIAN_PROVINCES,
}).reduce((acc, [abbr, name]) => {
  acc[name.toLowerCase()] = abbr;
  return acc;
}, {} as Record<string, string>);

export function normalizeRegion(input: string): string | null {
  if (!input) return null;

  const clean = input.trim().toLowerCase();

  if (clean.length === 2) {
    const upper = clean.toUpperCase();
    if (US_STATES[upper as keyof typeof US_STATES]) {
      return upper;
    }
    if (CANADIAN_PROVINCES[upper as keyof typeof CANADIAN_PROVINCES]) {
      return upper;
    }
  }

  if (STATE_NAME_TO_ABBR[clean]) {
    return STATE_NAME_TO_ABBR[clean];
  }

  return null;
}

export function regionAbbrToName(abbr: string): string | null {
  if (!abbr) return null;
  const upper = abbr.toUpperCase();
  if (CANADIAN_PROVINCES[upper as keyof typeof CANADIAN_PROVINCES]) {
    return CANADIAN_PROVINCES[upper as keyof typeof CANADIAN_PROVINCES];
  }
  return US_STATES[upper as keyof typeof US_STATES] ?? null;
}
