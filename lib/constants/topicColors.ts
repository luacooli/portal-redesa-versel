import { colors } from './colors'

export const topicColors: Record<string, { bg: string; text: string }> = {
  cultura: {
    bg: colors.primary, // Azul Médio
    text: 'text-white',
  },
  esporte: {
    bg: colors.secondary, // Verde Médio
    text: 'text-white',
  },
  lazer: {
    bg: colors.tertiary, // Marrom Amadeirado
    text: 'text-white',
  },
  gastronomia: {
    bg: colors.highlight, // Salmão Queimado
    text: 'text-white',
  },
}
