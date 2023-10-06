import React from 'react';

import styles from './FooterLegal.module.css'
export default function FooterLegal() {
  return (
    <div className={styles.footer__legal}>
      <div>
        <img src="/img/icons/ensono-logo.svg" alt="Ensono logo"/> 
      </div>
      <div>
        <span>Privacy Policy &copy; {new Date().getFullYear()} Ensono, LLC. All rights reserved</span>
      </div>
      <div>
        {
          listOfSocialMedia.map((socialMedia, key) => {
            const {url, Component} = socialMedia
            return (
              <a key={key} href={url} target="_blank">
                <Component/>
              </a>
            )
          })}
      </div>
    </div>
  );
}

const listOfSocialMedia = [
  {
    Component: () => (<LinkedInLogo/>),
    url: 'https://www.linkedin.com/company/ensono'
  }
]

const LinkedInLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24"><title>LinkedIn</title><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
)