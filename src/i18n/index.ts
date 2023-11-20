export type Locale = 'de-de' | 'en-us' | 'es-mx' | 'fr-fr' | 'it-it' | 'pt-br' | string
export const defaultLocale = 'en-us'
export const currentLocales: any = {
  'de-de': {
    shortLang: 'de',
    lang: 'de-de',
    name: 'Deutsch'
  },
  'en-us': {
    shortLang: 'en',
    lang: 'en-us',
    name: 'English (US)'
  },
  'es-mx': {
    shortLang: 'es',
    lang: 'es-mx',
    name: 'Español'
  },
  'fr-fr': {
    shortLang: 'fr',
    lang: 'fr-fr',
    name: 'Français'
  },
  'it-it': {
    shortLang: 'it',
    lang: 'it-it',
    name: 'Italiano'
  },
  'pt-br': {
    shortLang: 'pt',
    lang: 'pt-br',
    name: 'Português (BR)'
  }
}

export const availableLocales = (join = true) => {
  const listOfLocales = Object.keys(currentLocales)

  if (join) {
    return listOfLocales.join('|')
  }

  return listOfLocales
}

export const isValidLocale = (locale: Locale, locales: Locale[]) =>
  !!(
    locales.includes(locale && locale.toLowerCase()) ||
    currentLocales[locale && locale.toLowerCase()]
  )

  export const getFullLocale = (shortLocale: Locale) => {
    const currentLocale = shortLocale.toLowerCase()
    let locale = currentLocales[defaultLocale].lang

    if (currentLocale.includes('es')) {
      locale = currentLocales['es-mx'].lang
    }

    if (currentLocale.includes('de')) {
      locale = currentLocales['de-de'].lang
    }

    if (currentLocale.includes('fr')) {
      locale = currentLocales['fr-fr'].lang
    }

    if (currentLocale.includes('it')) {
      locale = currentLocales['it-it'].lang
    }

    if (currentLocale.includes('pt')) {
      locale = currentLocales['pt-br'].lang
    }

    return locale
  }
