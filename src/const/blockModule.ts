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
}