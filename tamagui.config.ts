import { createTokens } from '@tamagui/core'
import { createTamagui } from 'tamagui'

const tokens = createTokens({
  color: {
    blue: '#339DFF',
    coral: '#FF4F4F',
    background: '#FFFFFF',
    text: '#000000',
  },
  size: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
  },
})

const config = createTamagui({
  tokens,
  themes: {
    light: {
      background: tokens.color.background,
      color: tokens.color.text,
    },
    dark: {
      background: '#000000',
      color: '#FFFFFF',
    },
  },
  shorthands: {
    px: 'paddingHorizontal',
    py: 'paddingVertical',
  },
})

export default config

export type Conf = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
