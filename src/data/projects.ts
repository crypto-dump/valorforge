import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
  SiGraphql,
  SiEthereum,
  SiMobx,
  SiStorybook,
  SiRedux,
} from 'react-icons/si'
import TellerImage from '@public/img/projects/teller-finance.png'
import DopamineImage from '@public/img/projects/dopamine.png'
import NetVRKImage from '@public/img/projects/netvrk.png'
import HoneybookImage from '@public/img/projects/honeybook.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Teller Finance',
    description: {
      en: 'Teller enables time-based loans for 1-30 days, with any ERC20 or NFT as collateral & no margin call liquidations.',
      fr: `Teller permet des prêts à durée déterminée pendant 1 à 30 jours, avec n'importe quel ERC20 ou NFT comme garantie et sans liquidation d'appel de marge.`,
    },
    image: { src: TellerImage },
    homepage: 'https://teller.org',
    github: 'https://github.com/teller-protocol',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Ethereum', icon: SiEthereum, color: '#9FA8DA' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'ethereum', colorScheme: 'orange' },
      { label: 'web3', colorScheme: 'cyan' },
      { label: 'ci/cd', colorScheme: 'green' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Dopamine',
    description: {
      en: 'Curated physical x digital marketplace for streetwear x NFTs.',
      fr: 'Marché physique x numérique organisé pour le streetwear x NFT.',
    },
    image: { src: DopamineImage },
    homepage: 'https://dopamine.xyz',
    github: 'https://github.com/DopamineDAO',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'NetVRK',
    description: {
      en: 'NetVRK is a shared virtual reality platform that specializes in blockchain and gaming and features a, patented virtual world generator.',
      fr: `Network est une plate-forme de réalité virtuelle partagée spécialisée dans la blockchain et les jeux et dotée d'un générateur de monde virtuel breveté.`,
    },
    image: { src: NetVRKImage },
    homepage: 'https://netvrk.co',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Ethereum', icon: SiEthereum, color: '#9FA8DA' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    ],
    tags: [
      { label: 'frontend', colorScheme: 'pink' },
      { label: 'ethereum', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'Honeybook',
    homepage: 'https://honeybook.com',
    description: {
      en: 'HoneyBook is a clientflow management platform for independent service-based businesses.',
      fr: `HoneyBook est une plateforme de gestion de flux clients pour les entreprises de services indépendantes.`,
    },
    image: { src: HoneybookImage },
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MobX', icon: SiMobx, color: '#DD5C0F' },
      { name: 'Storybook', icon: SiStorybook, color: '#FF4785' },
    ],
    tags: [
      { label: 'frontend', colorScheme: 'pink' },
      { label: 'ui', colorScheme: 'purple' },
      { label: 'storybook', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
