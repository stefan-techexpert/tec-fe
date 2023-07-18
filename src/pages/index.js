import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

function giveMeTheJuice() {
  const {siteConfig} = useDocusaurusContext();

  return (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      <div className={styles.buttons}>
      <BrowserOnly fallback={<div>...</div>}>
        {() => {
          const PopupButton =
            require('react-calendly').PopupButton;
            return (
              <a class="card cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
              <PopupButton className="button button--secondary"
                url="https://calendly.com/stefan-techexpertcoach/coaching"
                rootElement={document.getElementById('__docusaurus')}
                text=" Book Your FREE Call! 💬"
                textColor="#ffffff"
                color="#00a2ff"/>
              </a>
            )
      }}
    </BrowserOnly>
    </div>
  </div>
  </header>
  );
}

function HomepageHeader() {
  return giveMeTheJuice();
}

export default function Home() {
  return (
    <Layout
      title={`Hello from TEC`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
