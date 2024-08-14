import Link from 'next/link';
import { css } from '~/styled-system/css';
import { HStack, VStack } from '~/styled-system/jsx';

const footerMenuColumns = [
  [
    {
      label: 'Devnet Portal',
      href: 'https://devnet.midl.xyz',
    },
    {
      label: 'Midlscan',
      href: 'https://midlscan.io',
    },
    {
      label: 'Swap',
      href: '/',
    },
    {
      label: 'Liquidity',
      href: '/liquidity',
    },
    {
      label: 'Pairs',
      href: '/pairs',
    },
    {
      label: 'Stable',
      href: '/stable',
    },
    {
      label: 'Lending',
      href: '/lending',
    },
  ],
  [
    {
      label: 'Build on MIDL',
      href: 'https://midl.io',
    },
    {
      label: 'Explore Devent Guide',
      href: 'https://devnet.midl.xyz',
    },
    {
      label: 'Become Validator',
      href: 'https://midl.io/validators',
    },
  ],
  [
    {
      label: 'FAQ',
      href: '/faq',
    },
    {
      label: 'Terms of Service',
      href: '/terms-of-service',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy-policy',
    },
  ],
];

export const FooterMenu = () => {
  return (
    <VStack alignItems="flex-start" gap={4}>
      <p
        className={css({
          color: 'neutral.400',
          textStyle: 'caption',
        })}
      >
        / Menu
      </p>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
        })}
      >
        {footerMenuColumns.map((column, index) => (
          <VStack key={index} gap={4} alignItems="flex-start">
            {column.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={css({
                  display: 'block',
                  color: 'neutral.500',
                  textStyle: 'body',
                  fontWeight: 'medium',
                  _hover: {
                    color: '#5107FF',
                  },
                })}
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        ))}
      </div>
    </VStack>
  );
};
