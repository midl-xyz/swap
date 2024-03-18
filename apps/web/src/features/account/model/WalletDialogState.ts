import { atom } from 'jotai';

export const isWalletDialogOpenAtom = atom(false);
export const tokenDialogAtom = atom<{
  open: boolean;
  onSelected: (address: string, chainId: number) => void;
  value: {
    address: string;
    chainId: number;
  };
}>({
  open: false,
  onSelected: () => {},
  value: {
    address: '',
    chainId: 0,
  },
});
