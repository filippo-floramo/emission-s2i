import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>E-mission</title>
        <meta name="emission" content="Carbon monoxide app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default Layout;
