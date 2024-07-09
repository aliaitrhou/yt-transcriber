import React from 'react';
import Link from 'next/link';
import { styled } from '@stitches/react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Foot>
      <span>
        © {currentYear}{' '}
        <Link
          href="https://x.com/AliRhou17481"
          style={{ textDecoration: 'none' }}
        >
          <ByAli>(by Ali)</ByAli>
        </Link>
        , All Rights Reserved.
      </span>
    </Foot>
  );
};

const ByAli = styled('span', {
  color: 'Tomato'
});

const Foot = styled('footer', {
  display: 'flex',
  marginTop: 50,
  fontFamily: '$inco, $system, sans-serif',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: 'black',
  padding: 2,
  textAlign: 'center'
});

export default Footer;
