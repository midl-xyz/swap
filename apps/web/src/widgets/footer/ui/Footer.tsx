import { CoinMarketcap, Medium, TelegramPlane, Twitter } from '@/shared/assets';
import { Logo } from '@/widgets';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

export const Footer = () => {
  return (
    <footer
      className={css({
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid',
        borderTopColor: 'neutral.200',
        height: 32,
        px: 8,
        py: 4,
        justifyContent: 'space-between',
      })}
    >
      <div
        className={vstack({
          gap: 1,
        })}
      >
        <Logo black />

        <span
          className={css({
            color: 'neutral.500',
            fontSize: 12,
            fontWeight: 'bold',
          })}
        >
          © v60 2024
        </span>
      </div>

      <div className={hstack({ gap: 4, fontSize: '2xl' })}>
        <a href="https://t.me/v60" target="_blank" rel="noopener noreferrer">
          <TelegramPlane />
        </a>
        <a
          href="https://twitter.com/v60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://coinmarketcap.com/currencies/v60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CoinMarketcap />
        </a>
        <a
          href="https://medium.com/v60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Medium />
        </a>
      </div>
    </footer>
  );
};
