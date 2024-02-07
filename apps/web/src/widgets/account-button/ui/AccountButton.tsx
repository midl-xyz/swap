import { useAccount, useConnect } from 'wagmi';

export const AccountButton = () => {
  const { connect } = useConnect();
  const account = useAccount();

  return <div>{account.address}</div>;
};
