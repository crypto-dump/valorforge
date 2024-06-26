import { envsafe, str, url } from 'envsafe'

export const env = envsafe({
  NEXT_PUBLIC_FORMSPREE_URL: url({
    input: process.env.NEXT_PUBLIC_FORMSPREE_URL,
  }),
  NEXT_PUBLIC_POSTHOG_KEY: str({
    input: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  }),
  NEXT_PUBLIC_POSTHOG_HOST: str({
    input: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  }),
})
