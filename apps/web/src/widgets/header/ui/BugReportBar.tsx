import Link from 'next/link';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';

export const BugReportBar = () => (
  <HStack
    background="#D5ED9F"
    marginTop={1}
    borderRadius="30px"
    maxWidth="695px"
    alignSelf="center"
    textAlign="center"
    paddingBlock={3}
    paddingInline={12}
    display="flex"
    alignItems="center"
    justifyContent="center"
    gap={'4px'}
  >
    <p>
      Welcome to the testnet launch. If you find any issues please report them
    </p>
    <Link target="_blank" href="https://form.jotform.com/242532370066047">
      <p
        className={css({
          display: 'inline',
          fontWeight: 600,
          color: 'black',
        })}
      >
        here
      </p>
    </Link>
  </HStack>
);
