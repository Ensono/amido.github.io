import React from 'react';
import Footer from '@theme-original/Footer';
import FooterLegal from './FooterLegal'

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <FooterLegal/>
    </>
  );
}
