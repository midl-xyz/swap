import { FooterMenu } from '@/widgets/footer/ui/FooterMenu';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

export const Footer = () => {
  return (
    <footer
      className={css({
        display: 'flex',
        alignItems: 'flex-end',
        borderTop: '1px solid',
        borderTopColor: 'neutral.200',
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
        <span
          className={css({
            color: 'neutral.500',
            textStyle: 'caption',
          })}
        >
          © Midl Swap 2024
        </span>
      </div>

      <FooterMenu />
    </footer>
  );
};
