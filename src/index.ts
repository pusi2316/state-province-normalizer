const US_STATES = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
  } as const;
  
  const STATE_NAME_TO_ABBR = Object.entries(US_STATES).reduce(
    (acc, [abbr, name]) => {
      acc[name.toLowerCase()] = abbr;
      return acc;
    },
    {} as Record<string, string>,
  );
  
  export function normalizeState(input?: string): string | null {
    if (!input) return null;
  
    const clean = input.trim().toLowerCase();
  
    if (clean.length === 2) {
      const upper = clean.toUpperCase();
      if (US_STATES[upper as keyof typeof US_STATES]) {
        return upper;
      }
    }
  
    if (STATE_NAME_TO_ABBR[clean]) {
      return STATE_NAME_TO_ABBR[clean];
    }
  
    return null;
  }
  
  export function stateAbbrToName(abbr?: string): string | null {
    if (!abbr) return null;
    if (abbr.length > 2) {
      return abbr.charAt(0).toUpperCase() + abbr.slice(1).toLowerCase();
    }
    return US_STATES[abbr.toUpperCase() as keyof typeof US_STATES] ?? null;
  }