import { AppPreloader, SwapForm } from '@/widgets';
import { createConfig, getRune, regtest } from '@midl-xyz/midl-js-core';
import {
  executorAbi,
  executorAddress,
  midlRegtest,
  runeIdToBytes32,
} from '@midl-xyz/midl-js-executor';
import { Suspense } from 'react';
import { Address, Client, createPublicClient, getAddress, http } from 'viem';
import { readContract } from 'viem/actions';
import { css, cx } from '~/styled-system/css';
import { center } from '~/styled-system/patterns';

type QueryParams = {
  inputToken?: string;
  outputToken?: string;
  amount?: string;
  field?: 'input' | 'output';
};

const getRuneOrAddress = async (
  inputToken: string,
  client: Client,
): Promise<Address | undefined> => {
  if (!inputToken && inputToken.trim() === '') {
    return undefined;
  }

  try {
    return getAddress(inputToken.toLowerCase());
  } catch {
    try {
      const config = createConfig({
        networks: [regtest],
        connectors: [],
      });
      const rune = await getRune(config, inputToken);

      if (!rune) {
        return undefined;
      }

      const data = await readContract(client, {
        abi: executorAbi,
        functionName: 'getAssetAddressByRuneId',
        args: [runeIdToBytes32(rune.id)],
        address: executorAddress['regtest'] as Address,
      });

      return data;
    } catch (error) {
      return undefined;
    }
  }
};

export default async function SwapPage({
  searchParams,
}: {
  searchParams: Promise<QueryParams>;
}) {
  const {
    inputToken = '',
    outputToken = '',
    amount,
    field,
  } = await searchParams;
  const client = createPublicClient({
    chain: midlRegtest,
    transport: http(midlRegtest.rpcUrls.default.http[0]),
  });

  return (
    <main
      className={cx(
        center(),
        css({
          flexGrow: 1,
        }),
      )}
    >
      <Suspense fallback={<AppPreloader />}>
        <SwapForm
          inputToken={await getRuneOrAddress(inputToken, client)}
          outputToken={await getRuneOrAddress(outputToken, client)}
          amount={amount}
          field={field}
        />
      </Suspense>
    </main>
  );
}
