import type { AppProps } from 'next/app';
import MainLayout from 'app/layouts/main-layout';
import "app/assets/scss/index.scss";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default CustomApp;
