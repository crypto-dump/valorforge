import { SiJavascript, SiTypescript } from 'react-icons/si'
import type { ContributionProps } from '@components/structure/OpenSource/Contribution'

export const contributions: ContributionProps[] = [
  {
    user: 'Tgemayel',
    repository: 'variable-font-plugin',
    role: {
      label: 'creator',
      color: 'green',
    },
    githubUrl: 'https://github.com/Tgemayel/variable-font-plugin',
    description: {
      en: 'A plugin to provide basic variable fonts support through Samsa.js.',
      fr: 'Un plugin pour fournir une prise en charge de base des polices variables via Samsa.js.',
    },
    topics: ['react', 'figma', 'plugin', 'design', 'ui'],
    language: {
      name: 'Typescript',
      icon: SiTypescript,
      color: '#3178C6',
    },
  },
  {
    user: 'keymetrics',
    repository: 'pm2-io-js-api',
    role: {
      label: 'contributor',
      color: 'orange',
    },
    githubUrl: 'https://github.com/keymetrics/pm2-io-js-api',
    description: {
      en: 'This module lets you implement a fully customizable PM2.io client, receiving live data from the PM2.io API.',
      fr: "Ce module vous permet d'implémenter un client PM2.io entièrement personnalisable, recevant des données en direct de l'API PM2.io.",
    },
    topics: ['javascript', 'pm2', 'keymetrics', 'api'],
    language: {
      name: 'Javascript',
      icon: SiJavascript,
      color: '#F7DF1E',
    },
  },
  {
    user: 'dash',
    repository: 'incubator-app',
    role: {
      label: 'contributor',
      color: 'cyan',
    },
    githubUrl: 'https://github.com/dashincubator/dash-incubator-app',
    description: {
      en: 'Dash Incubator is an open-source app that connects users who want to earn rewards for working together to improve the Dash cryptocurrency.',
      fr: 'Dash Incubator est une application open source qui connecte les utilisateurs qui souhaitent gagner des récompenses pour avoir travaillé ensemble pour améliorer la crypto-monnaie Dash.',
    },
    topics: ['dash', 'cryptocurrency', 'dao'],
    language: {
      name: 'Javascript',
      icon: SiJavascript,
      color: '#0739AE',
    },
  },
]
