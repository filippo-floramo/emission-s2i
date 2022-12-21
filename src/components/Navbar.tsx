import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/lol.png" alt="logo" width={128} height={128} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
}

export default Navbar;
