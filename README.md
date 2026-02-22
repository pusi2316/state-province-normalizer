# US State Normalizer

A lightweight TypeScript utility for normalizing US state names and abbreviations. Perfect for form validation, data cleaning, and ensuring consistent state formatting across your application.

## Features

- 🎯 Convert state names to abbreviations and vice versa
- 🧹 Normalize inconsistent state inputs
- 📦 Zero dependencies
- 💪 Fully typed with TypeScript
- 🪶 Tiny bundle size

## Installation

```bash
npm install us-state-normalizer
```

```bash
yarn add us-state-normalizer
```

```bash
pnpm add us-state-normalizer
```

## Usage

### Basic Examples

```typescript
import { normalizeState, stateAbbrToName } from 'us-state-normalizer';

// Normalize various state inputs to abbreviations
normalizeState('California');        // 'CA'
normalizeState('ca');                // 'CA'
normalizeState('CA');                // 'CA'
normalizeState('new york');          // 'NY'
normalizeState('invalid');           // null
normalizeState('');                  // null

// Convert abbreviations to full state names
stateAbbrToName('CA');               // 'California'
stateAbbrToName('ca');               // 'California'
stateAbbrToName('NY');               // 'New York'
stateAbbrToName('invalid');          // null
```

### Data Cleaning Example

```typescript
import { normalizeState } from 'us-state-normalizer';

const userData = [
  { name: 'John', state: 'california' },
  { name: 'Jane', state: 'NY' },
  { name: 'Bob', state: 'Texas' },
];

const cleanedData = userData.map(user => ({
  ...user,
  state: normalizeState(user.state) || 'UNKNOWN'
}));

// Result:
// [
//   { name: 'John', state: 'CA' },
//   { name: 'Jane', state: 'NY' },
//   { name: 'Bob', state: 'TX' }
// ]
```

## API Reference

### `normalizeState(input: string): string | null`

Normalizes a state name or abbreviation to a standard two-letter abbreviation.

**Parameters:**
- `input`: A state name or abbreviation (case-insensitive)

**Returns:**
- Two-letter state abbreviation in uppercase, or `null` if invalid

**Examples:**
```typescript
normalizeState('California')  // 'CA'
normalizeState('ca')          // 'CA'
normalizeState('invalid')     // null
```

### `stateAbbrToName(abbr?: string): string | null`

Converts a state abbreviation to its full name.

**Parameters:**
- `abbr`: A two-letter state abbreviation (case-insensitive)

**Returns:**
- Full state name in title case, or `null` if invalid

**Examples:**
```typescript
stateAbbrToName('CA')      // 'California'
stateAbbrToName('ny')      // 'New York'
stateAbbrToName('invalid') // null
```

## Supported States

All 50 US states are supported:

Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming

## TypeScript Support

This package is written in TypeScript and includes type definitions out of the box. No need for `@types/*` packages!

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you find a bug or have a feature request, please open an issue on [GitHub](https://github.com/pusi2316/us-state-normalizer).
