import { Layout } from '@/shared';
import { AppProps } from 'next/app';
import '../shared/styles/app.scss';

export const Application = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default Application;
