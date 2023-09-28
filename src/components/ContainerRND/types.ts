type ContainerRNDProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  bounds:  string | Element;
  name: string;
  headerLabel: string;
}

type BlockRndType = {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
};

type HeaderRNDType = {
  label: string;
}

export type { ContainerRNDProps, BlockRndType, HeaderRNDType }