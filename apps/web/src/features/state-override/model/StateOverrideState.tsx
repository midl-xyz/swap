import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Address } from 'viem';

/**
 *       const slot = keccak256(
         encodeAbiParameters(
           [
             {
               type: 'address',
             },
             { type: 'uint256' },
           ],
           [tokenOut, 2n],
         ),
       );
 
       const customStateOverride = [
         {
           address: tokenIn as Address,
           stateDiff: [
             {
               slot,
               value: toHex(BigInt(args['0']) as any, { size: 32 }),
             },
           ],
         },
       ];
 */

export const stateOverride = atomWithStorage<
  {
    address: Address;
    stateDiff: {
      slot: `0x${string}`;
      value: `0x${string}`;
    }[];
  }[]
>('stateOverride', []);
