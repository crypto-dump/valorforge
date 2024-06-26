import 'i18next'

import common from '@public/locales/en/common.json'
import error from '@public/locales/en/error.json'

interface I18nNamespaces {
  common: typeof common
  error: typeof error
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
    returnNull: false
  }
}
