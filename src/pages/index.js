import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { PopupButton, InlineWidget } from 'react-calendly';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>

            {/* Buttons */}
            <a class="card  cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" href="/docs/tutorial-basics/create-a-page">

              <PopupButton className="button button--primary"
                    url="https://calendly.com/stefan-techexpertcoach/coaching"
                    rootElement={document.getElementById('__docusaurus')}
                    text=" Book Your FREE Call! 💬"
                    textColor="#ffffff"
                    color="#00a2ff"
                  />

            </a>
            {/* <article class="col col--6 margin-bottom--lg">
              <PopupButton className="button button--primary button--lg"
                    
                    url="https://calendly.com/stefan-techexpertcoach/coaching"
                    rootElement={document.getElementById('__docusaurus')}
                    text="Book a coaching session 👨‍🎓"
                  />

            </article> */}

         
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
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
