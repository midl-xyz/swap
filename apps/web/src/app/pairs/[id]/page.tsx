export default function PairPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  return <div>{id}</div>;
}
