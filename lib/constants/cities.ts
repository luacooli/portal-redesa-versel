export const cities = [
  { name: 'Guarulhos', slug: 'guarulhos' },
  { name: 'Mairiporã', slug: 'mairipora' },
  { name: 'Nazaré Paulista', slug: 'nazare-paulista' },
  { name: 'Bom Jesus dos Perdões', slug: 'bom-jesus-dos-perdoes' },
  { name: 'Atibaia', slug: 'atibaia' },
  { name: 'Jarinú', slug: 'jarinu' },
  { name: 'Piracaia', slug: 'piracaia' },
  { name: 'Bragança Paulista', slug: 'braganca-paulista' },
  { name: 'Joanópolis', slug: 'joanopolis' },
  { name: 'Vargem', slug: 'vargem' },
  { name: 'Pinhalzinho', slug: 'pinhalzinho' },
  { name: 'Tuiuti', slug: 'tuiuti' },
  { name: 'Pedra Bela', slug: 'pedra-bela' },
] as const

export type CityName = (typeof cities)[number]['name']
export type CitySlug = (typeof cities)[number]['slug']
