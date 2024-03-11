type TokenNameProps = {
  address: string;
  chainId: number;
};

export const TokenName = ({ address, chainId }: TokenNameProps) => {
  return <span>{address}</span>;
};
