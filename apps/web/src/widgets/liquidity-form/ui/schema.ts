import { Address } from 'viem';
import * as yup from 'yup';

export const schema = yup.object().shape({
  tokenAAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .when(['$minAmountA'], ([minAmount], schema) => {
      const rules = schema.min(
        minAmount || 0,
        `Minimum amount is ${minAmount}`,
      );

      if (minAmount > 0) {
        return rules.required(`Minimum amount is ${minAmount}`);
      }

      return rules;
    }),
  tokenBAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .when(['$minAmountB'], ([minAmount], schema) => {
      const rules = schema.min(
        minAmount || 0,
        `Minimum amount is ${minAmount}`,
      );

      if (minAmount > 0) {
        return rules.required(`Minimum amount is ${minAmount}`);
      }

      return rules;
    }),
  tokenA: yup.string<Address>().required(),
  tokenB: yup.string<Address>().required(),
});
