import { stateOverride } from '@/features/state-override/model';
import { useAtom } from 'jotai';

export const useStateOverride = () => {
  const [value, updateValue] = useAtom(stateOverride);

  return [value, updateValue] as const;
};
