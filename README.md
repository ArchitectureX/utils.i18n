# @architecturex/utils.i18n

This module provides functionalities for handling and managing different language locales in an application. Below is a detailed description of its features and usage.

## Features

Supported Locales: The module supports multiple locales, including German (de-de), English (US) (en-us), Spanish (Mexico) (es-mx), French (fr-fr), Italian (it-it), and Brazilian Portuguese (pt-br).

- **Default Locale:** The default locale is set to English (US) (en-us).
- **Locale Information:** Each locale is associated with a short language code, a longer language-region code, and a descriptive name.
- **Locale Listing:** You can retrieve a list of all available locales, either as an array or as a joined string separated by the pipe (|) character.
- **Locale Validation:** The module includes a function to validate if a given locale is supported.
- **Locale Conversion:** There is a function to convert short locale formats into their full locale formats, considering the region-specific variations.

### Usage

```javascript
import {
  defaultLocale,
  currentLocales,
  availableLocales,
  isValidLocale,
  getFullLocale
} from '@architecturex/utils.i18n'
```

### Listing Available Locales

```javascript
// Get a string of available locales
const localeString = availableLocales()

// Get an array of available locales
const localeArray = availableLocales(false)
```

### Validating a Locale

```javascript
// Check if a specific locale is valid
const isLocaleValid = isValidLocale('en-us', ['en-us', 'de-de', ...]);
```

### Getting Full Locale Format

```javascript
// Convert a short locale format to its full format
const fullLocale = getFullLocale('es')
```

## Contributing

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
