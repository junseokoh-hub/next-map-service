import React from 'react';
import Link from 'next/link';
import classes from './header.module.scss';
import Image from 'next/image';

interface Props {
  onClickLogo?: () => void;
  rightElement?: React.ReactElement[];
}

const Header = ({ onClickLogo, rightElement }: Props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.flexItem}>
        <Link
          onClick={onClickLogo}
          href="/"
          className={classes.box}
          aria-label="홈으로 이동"
        >
          <Image
            src="/inflearn.png"
            alt="inflearn-image"
            width={110}
            height={20}
            priority
          />
        </Link>
      </nav>
      {rightElement && <nav className={classes.flexItem}>{rightElement}</nav>}
    </header>
  );
};

export default Header;
