import { Button } from '@/shared';
import { AppMenuList, Header, Logo } from '@/widgets';
import { Footer } from '@/widgets/footer/ui';
import { Landing } from '@/widgets/landing/ui/Landing';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { css } from '~/styled-system/css';
import { HStack } from '~/styled-system/jsx';
import { hstack } from '~/styled-system/patterns';

export default function Home() {
  redirect('/swap');

  return (
    <>
      <Header
        leftSlot={
          <div
            className={hstack({
              gap: 24,
              flexShrink: 0,
              width: 'fit-content',
              justifyContent: 'space-between',
            })}
          >
            <Link href="/">
              <Logo />
            </Link>
            <HStack display={{ base: 'none', md: 'flex' }} gap={8} h="full">
              <AppMenuList />
            </HStack>
          </div>
        }
        rightSlot={
          <Button appearance="primary" backgroundColor="black" color="white">
            <Link href="/swap">Go to app</Link>
          </Button>
        }
      />
      <Toaster position="bottom-right" />
      <div
        className={css({
          paddingBlock: 4,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <Landing />
      </div>
      <Footer />
    </>
  );
}
