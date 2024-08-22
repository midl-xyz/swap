import localFont from 'next/font/local';

export const euclidFonts = localFont({
  variable: '--font-euclid',
  src: [
    {
      path: './EuclidSquare-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './EuclidSquare-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './EuclidSquare-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
});
