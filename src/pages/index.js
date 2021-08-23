import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Low Level API</>,
    description: (
      <>
        Kapseli enables its low-level api to modify and extend. It has large scale Event-Listen-Network. You can use and listen all events thanks of this API.
      </>
    ),
  },
  {
    title: <>Extendible Structure</>,
    description: (
      <>
        Thanks of Low Level API of Kapseli, you can extend, even overwrite, its core functionality.
      </>
    ),
  },
  {
    title: <>Various UI Packages</>,
    description: (
      <>
        Aren't you designer? Don't worry. Our plugin repository is rich. There are premium and free packages. 
        If you want complicated and easy to use components, try premium packages. We will continue release new UI packages. Be patient.  
      </>
    ),
  },
  {
    title: <>Auto Form AJAX</>,
    description: (
      <>
        Kapseli has a connection with its storage manager to store form data automatically when the form is submitted. With this feature, collect data is pie.
      </>
    ),
  },

  {
    title: <>Built-in Route System</>,
    description: (
      <>
        Kapseli has built-in auto init router. Only register your pages. Routing is the task of Kapseli. Don't worry! 
      </>
    ),
  },

  {
    title: <>Customizable HTML Render Engine</>,
    description: (
      <>
        Kapseli has its own HTML Render Engine. No dependency! This engine is powered by Event-Listen-Network of Kapseli. You can customize it by using this network and the loew level API.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} - A UI Framework for creating a SPA dashboard application.`}
      description="A UI Framework for creating a SPA dashboard application.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              href="https://github.com/Swindler36/Kapseli-UI-Framework">
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
