import React from 'react';
import Link from 'next/link';
import classes from './header.module.scss';
import Image from 'next/image';

interface Props {
  rightElement?: React.ReactElement[];
}

const Header = ({ rightElement }: Props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.flexItem}>
        <Link href="/" className={classes.box}>
          <Image
            src="/inflearn.png"
            alt="inflearn-image"
            width={110}
            height={20}
          />
        </Link>
      </nav>
      <nav className={classes.flexItem}>{rightElement}</nav>
    </header>
  );
};

export default Header;
