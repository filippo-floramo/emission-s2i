import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Vi scuoio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/close-icon.svg" />
      </Head>
      <Navbar />
      <div className={styles.layout}>{children}</div>
    </>
  );
}

export default Layout;
