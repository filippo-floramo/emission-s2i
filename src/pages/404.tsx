import * as React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Ooooooops..lollino.</h1>
      <h2>Sbagghiasti compare</h2>
      <p>
        tunna arreti a <Link href="/">Casa</Link>
      </p>
    </div>
  );
}

export default NotFound;
