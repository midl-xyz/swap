import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const slippage = atomWithStorage('slippage', 0.2);

export const isSlippageDialogOpen = atom(false);
