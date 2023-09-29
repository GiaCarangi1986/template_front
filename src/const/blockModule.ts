import { VariantEnum } from './styles'

type BlockType = {
  name: string;
  headerLabel: string;
  btnLabel: string;
  'grid-column'?: string;
  'grid-row'?: string;
  variant: keyof typeof VariantEnum;
}

export const BLOCKS: Record<string, BlockType> = {
  coils: {
    name: 'coils',
    headerLabel: 'Рулоны',
    btnLabel: 'Рулоны табл.',
    'grid-column': '1 / 6',
    'grid-row': '1 / 6',
    variant: 'dark'
  },
  aboutDefect: {
    name: 'aboutDefect',
    headerLabel: 'Информация по дефекту',
    btnLabel: 'О дефекте',
    'grid-column': '1 / 6',
    'grid-row': '6 / 9',
    variant: 'light'
  },
  aboutCoil: {
    name: 'aboutCoil',
    headerLabel: 'Информация по рулону',
    btnLabel: 'О рулоне',
    'grid-column': '6 / 10',
    'grid-row': '6 / 9',
    variant: 'light'
  },
  map: {
    name: 'map',
    headerLabel: 'Карта дефектов',
    btnLabel: 'Карта дефектов',
    'grid-column': '1 / 10',
    'grid-row': '-1 / -7',
    variant: 'dark'
  },
  cameras: {
    name: 'cameras',
    headerLabel: 'Камеры',
    btnLabel: 'Камеры',
    'grid-column': '6 / 10',
    'grid-row': '1 / 3',
    variant: 'light'
  },
  defectKinds: {
    name: 'defectKinds',
    headerLabel: 'Типы дефектов',
    btnLabel: 'Типы дефектов',
    'grid-column': '6 / 10',
    'grid-row': '3 / 6',
    variant: 'light'
  },
  photo: {
    name: 'photo',
    headerLabel: 'Фото',
    btnLabel: 'Фотография',
    'grid-column': '10 / -3',
    'grid-row': '1 / -1',
    variant: 'dark'
  },
  snapshots: {
    name: 'snapshots',
    headerLabel: 'Снимки',
    btnLabel: 'Снимки',
    'grid-column': '-1 / -3',
    'grid-row': '1 / -6',
    variant: 'light'
  },
  snapshotsInfo: {
    name: 'snapshotsInfo',
    headerLabel: 'Кадр',
    btnLabel: 'Кадр',
    'grid-column': '-1 / -3',
    'grid-row': '-1 / -6',
    variant: 'light'
  }
}