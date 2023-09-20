type BlockType = {
  name: string;
  headerLabel: string;
  btnLabel: string;
  'grid-column'?: string;
  'grid-row'?: string;
  backgroundColor?: string;
}

export const BLOCKS: Record<string, BlockType> = {
  coils: {
    name: 'coils',
    headerLabel: 'Рулоны',
    btnLabel: 'Рулоны табл.',
    'grid-column': '1 / 6',
    'grid-row': '1 / 6',
    backgroundColor: 'red'
  },
  aboutDefect: {
    name: 'aboutDefect',
    headerLabel: 'Информация по дефекту',
    btnLabel: 'О дефекте',
    'grid-column': '1 / 6',
    'grid-row': '6 / 9',
    backgroundColor: 'orange'
  },
  aboutCoil: {
    name: 'aboutCoil',
    headerLabel: 'Информация по рулону',
    btnLabel: 'О рулоне',
    'grid-column': '6 / 10',
    'grid-row': '6 / 9',
    backgroundColor: 'green'
  },
  map: {
    name: 'map',
    headerLabel: 'Карта дефектов',
    btnLabel: 'Карта дефектов',
    'grid-column': '1 / 10',
    'grid-row': '-1 / -7',
    backgroundColor: 'yellow'
  },
  cameras: {
    name: 'cameras',
    headerLabel: 'Камеры',
    btnLabel: 'Камеры',
    'grid-column': '6 / 10',
    'grid-row': '1 / 3',
    backgroundColor: 'pink'
  },
  defectKinds: {
    name: 'defectKinds',
    headerLabel: 'Типы дефектов',
    btnLabel: 'Типы дефектов',
    'grid-column': '6 / 10',
    'grid-row': '3 / 6',
    backgroundColor: 'brown'
  },
  photo: {
    name: 'photo',
    headerLabel: 'Фото',
    btnLabel: 'Фотография',
    'grid-column': '10 / -3',
    'grid-row': '1 / -1',
    backgroundColor: 'black'
  },
  snapshots: {
    name: 'snapshots',
    headerLabel: 'Снимки',
    btnLabel: 'Снимки',
    'grid-column': '-1 / -3',
    'grid-row': '1 / -6',
    backgroundColor: 'white'
  },
  snapshotsInfo: {
    name: 'snapshotsInfo',
    headerLabel: 'Кадр',
    btnLabel: 'Кадр',
    'grid-column': '-1 / -3',
    'grid-row': '-1 / -6',
    backgroundColor: 'blue'
  }
}