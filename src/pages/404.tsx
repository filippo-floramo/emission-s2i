import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from "../styles/pages/404.module.scss";

function NotFound(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <div className={styles.not_found}>
      <h1>Sorry, there&apos;s nothing to see here.</h1>
      <h2>You&apos;ll be redirected to the homepage soon.</h2>
      <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>Click <Link href="/">here</Link> to go back immediately</p>
    </div>
  );
}

export default NotFound;
