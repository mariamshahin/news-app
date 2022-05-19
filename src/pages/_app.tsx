import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import MainLayout from 'app/layouts/main-layout';
import store from 'app/store/store';

import 'app/assets/scss/index.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default CustomApp;
