type BlockType = {
  name: string;
  headerLabel: string;
  btnLabel: string;
}

export const BLOCKS: Record<string, BlockType> = {
  coils: {
    name: 'coils',
    headerLabel: 'Рулоны',
    btnLabel: 'Рулоны табл.',
  },
  aboutDefect: {
    name: 'aboutDefect',
    headerLabel: 'Информация по дефекту',
    btnLabel: 'О дефекте'
  },
  aboutRoll: {
    name: 'aboutRoll',
    headerLabel: 'Информация по рулону',
    btnLabel: 'О рулоне',
  },
  map: {
    name: 'map',
    headerLabel: 'Карта дефектов',
    btnLabel: 'Карта дефектов',
  },
  cameras: {
    name: 'cameras',
    headerLabel: 'Камеры',
    btnLabel: 'Камеры',
  },
  defectKinds: {
    name: 'defectKinds',
    headerLabel: 'Типы дефектов',
    btnLabel: 'Типы дефектов',
  },
  photo: {
    name: 'photo',
    headerLabel: 'Фото',
    btnLabel: 'Фотография'
  },
  snapshots: {
    name: 'snapshots',
    headerLabel: 'Снимки',
    btnLabel: 'Снимки'
  },
  snapshotsInfo: {
    name: 'snapshotsInfo',
    headerLabel: 'Кадр',
    btnLabel: 'Кадр'
  }
}