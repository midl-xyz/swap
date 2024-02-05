import type { ContractFunctionName, ContractFunctionArgs, Abi } from 'viem';

declare global {
  type SmartContractFunctionArgs<
    abi extends Abi,
    functionName extends ContractFunctionName<abi, 'payable' | 'nonpayable'>,
  > = ContractFunctionArgs<abi, 'payable' | 'nonpayable', functionName>;
}
