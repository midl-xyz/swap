import { css } from '~/styled-system/css';

export default function CreditsPage() {
  return (
    <div
      className={css({
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        minH: '100%',
      })}
    >
      <h1
        className={css({
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'gray.900',
        })}
      >
        Credits
      </h1>

      <p
        className={css({
          fontSize: '18px',
          maxW: '600px',
          textAlign: 'center',
          color: 'gray.700',
        })}
      >
        This project was made possible thanks to the amazing open-source
        community and these incredible tools:
      </p>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
          gap: '16px',
          maxW: '800px',
          width: '100%',
        })}
      >
        {[
          {
            name: 'Next.js',
            desc: 'Server-side rendering & static generation',
          },
          { name: 'React', desc: 'Building user interfaces' },
          { name: 'GraphQL', desc: 'Flexible data fetching' },
          { name: 'PandaCSS', desc: 'Component-based styling' },
          {
            name: 'TradingView',
            desc: 'Financial charts',
            link: 'https://www.tradingview.com/',
          },
        ].map((item) => (
          <div
            key={item.name}
            className={css({
              bg: 'white',
              borderRadius: 'xl',
              boxShadow: 'lg',
              padding: '20px',
              transition: 'transform 0.2s ease',
              _hover: { transform: 'translateY(-4px)' },
            })}
          >
            <h3
              className={css({
                fontSize: '20px',
                fontWeight: 'semibold',
                mb: '4px',
                color: 'gray.800',
              })}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={css({
                    _hover: { textDecoration: 'underline' },
                    color: 'gray.800',
                  })}
                >
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </h3>
            <p
              className={css({
                fontSize: '14px',
                color: 'gray.600',
              })}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
