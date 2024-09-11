import Link from 'next/link';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';

export const BugReportBar = () => (
  <HStack
    background="grey"
    textAlign="center"
    padding={1}
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    gap={'4px'}
  >
    <p>
      Welcome to the testnet launch. If you find any issues please report them
    </p>
    <Link target="_blank" href="https://form.jotform.com/242532370066047">
      <p
        className={css({
          display: 'inline',
          color: 'black',
        })}
      >
        here
      </p>
    </Link>
  </HStack>
);
