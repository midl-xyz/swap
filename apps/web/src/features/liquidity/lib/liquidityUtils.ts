import { Address, zeroAddress } from 'viem';

export const handleTokenApprovals = (
  token: { address: Address; amount: bigint },
  rune: any,
  needsApprove: boolean,
  addApproveDepositIntention: any,
  addTxIntention: any,
) => {
  const isETH = token.address === zeroAddress;

  if (isETH) return;

  if (needsApprove) {
    addApproveDepositIntention({
      address: token.address,
      runeId: rune?.id,
      amount: token.amount,
    });
  } else if (rune) {
    addTxIntention({
      intention: {
        deposit: {
          runes: [
            {
              id: rune.id,
              amount: token.amount,
              address: token.address,
            },
          ],
        },
      },
    });
  }
};
