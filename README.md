# State & Province Normalizer

A lightweight TypeScript utility for normalizing US state and Canadian province names and abbreviations. Perfect for form validation, data cleaning, and ensuring consistent region formatting across your application.

## Features

- 🎯 Convert state/province names to abbreviations and vice versa
- 🇺🇸 🇨🇦 Full US and Canadian support
- 🧹 Normalize inconsistent inputs
- 📦 Zero dependencies
- 💪 Fully typed with TypeScript
- 🪶 Tiny bundle size

## Installation

```bash
npm install state-province-normalizer
```

```bash
yarn add state-province-normalizer
```

```bash
pnpm add state-province-normalizer
```

## Usage

### Basic Examples

```typescript
import { normalizeRegion, regionAbbrToName } from "state-province-normalizer";

// Normalize various state/province inputs to abbreviations
normalizeRegion("California"); // 'CA'
normalizeRegion("ca"); // 'CA'
normalizeRegion("CA"); // 'CA'
normalizeRegion("new york"); // 'NY'
normalizeRegion("ontario"); // 'ON'
normalizeRegion("British Columbia"); // 'BC'
normalizeRegion("invalid"); // null
normalizeRegion(""); // null

// Convert abbreviations to full names
regionAbbrToName("CA"); // 'California'
regionAbbrToName("ca"); // 'California'
regionAbbrToName("NY"); // 'New York'
regionAbbrToName("ON"); // 'Ontario'
regionAbbrToName("BC"); // 'British Columbia'
regionAbbrToName("invalid"); // null
```

### Specifying Country

```typescript
import { normalizeRegion } from "state-province-normalizer";

// Optionally scope lookups to a specific country
normalizeRegion("Alberta", { country: "CA" }); // 'AB'
normalizeRegion("California", { country: "US" }); // 'CA'
```

### Data Cleaning Example

```typescript
import { normalizeRegion } from "state-province-normalizer";

const userData = [
  { name: "John", region: "california" },
  { name: "Jane", region: "NY" },
  { name: "Bob", region: "Ontario" },
];

const cleanedData = userData.map((user) => ({
  ...user,
  region: normalizeRegion(user.region) || "UNKNOWN",
}));

// Result:
// [
//   { name: 'John', region: 'CA' },
//   { name: 'Jane', region: 'NY' },
//   { name: 'Bob', region: 'ON' }
// ]
```

## API Reference

### `normalizeRegion(input: string, options?: NormalizeOptions): string | null`

Normalizes a state or province name/abbreviation to a standard two-letter abbreviation.

**Parameters:**

- `input`: A state or province name or abbreviation (case-insensitive)
- `options.country`: Optionally restrict to `'US'` or `'CA'`

**Returns:**

- Two-letter abbreviation in uppercase, or `null` if invalid

**Examples:**

```typescript
normalizeRegion("California"); // 'CA'
normalizeRegion("ca"); // 'CA'
normalizeRegion("british columbia"); // 'BC'
normalizeRegion("invalid"); // null
normalizeRegion("Alberta", { country: "CA" }); // 'AB'
```

### `regionAbbrToName(abbr?: string, options?: NormalizeOptions): string | null`

Converts a state or province abbreviation to its full name.

**Parameters:**

- `abbr`: A two-letter abbreviation (case-insensitive)
- `options.country`: Optionally restrict to `'US'` or `'CA'`

**Returns:**

- Full name in title case, or `null` if invalid

**Examples:**

```typescript
regionAbbrToName("CA"); // 'California'
regionAbbrToName("ny"); // 'New York'
regionAbbrToName("ON"); // 'Ontario'
regionAbbrToName("invalid"); // null
```

## Supported Regions

### 🇺🇸 US States (50)

Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming

### 🇨🇦 Canadian Provinces & Territories (13)

Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Northwest Territories, Nova Scotia, Nunavut, Ontario, Prince Edward Island, Quebec, Saskatchewan, Yukon

## TypeScript Support

This package is written in TypeScript and includes type definitions out of the box. No need for `@types/*` packages!

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you find a bug or have a feature request, please open an issue on [GitHub](https://github.com/pusi2316/state-province-normalizer).
