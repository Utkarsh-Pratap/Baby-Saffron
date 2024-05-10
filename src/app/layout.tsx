import type { Metadata } from 'next';
import '@/sass/index.scss';
import ReduxProvider from '@/lib/store/provider';
import RootTemplate from '@/components/templates/RootTemplate';
import LocalFont from 'next/font/local';

// Importing local fonts
const SansSerifFont = LocalFont({
  src: [
    {
      path: '../assets/fonts/sans/ProdaSansBold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../assets/fonts/sans/ProdaSansMedium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../assets/fonts/sans/ProdaSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/sans/ProdaSansSemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../assets/fonts/sans/ProdaSansThin.woff2',
      weight: '100',
      style: 'thin',
    },
  ],
  variable: '--font-sans',
});

const SerifFont = LocalFont({
  src: [
    {
      path: '../assets/fonts/serif/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/serif/PlayfairDisplay-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/serif/PlayfairDisplay-SemiBold.ttf',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../assets/fonts/serif/PlayfairDisplay-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Baby Saffron',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={SansSerifFont.variable + ' ' + SerifFont.variable}
    >
      <body className={'relative font-sans'}>
        <ReduxProvider>
          <RootTemplate>{children}</RootTemplate>
        </ReduxProvider>
      </body>
    </html>
  );
}
