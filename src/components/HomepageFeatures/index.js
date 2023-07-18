import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
Conquer tech interviews with confidence! Our expert coaching covers it all: Behavioral, System Design, and Coding. 
Elevate your success in the tech industry with our tailored approach and guidance!</>
    ),
    title: (<p>Interview prep</p>)
  },
  {
    
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Play to your unique strengths, receive personalized guidance and support to shape a fulfilling and successful 
        future that's tailor-made for you. Take charge of your success with top insights from our coaches!
      </>
    ),
    title: (<p>Career guidance</p>)

  },
  {
    
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Unleash your potential in the dynamic world of technology with our personalized courses. Dive into computer science fields, 
        advance your leadership with door opening expertise and empower your professional journey!
      </>
      
    ),
    title: (<p>Personalised courses</p>)

  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
              <a class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" href="/docs/tutorial-basics/create-a-page">

      <div className="text--center">
        <h3>{title}</h3>

          <Svg className={styles.featureSvg} role="img" />

         <div className="text--center padding-horiz--md">
          <p>{description}</p>
      </div>
       
      </div>
      </a>
    </div>
    
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        
        <div className="row">
          
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
