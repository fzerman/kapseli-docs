import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    imageUrl: "/img/low-level-api.svg",
    title: <>Low Level API</>,
    description: (
      <>
        Kapseli has a low-level API to modify and extend it. It has also a
        large-scale Event-Listen-Network. You can add event listeners to all
        events thanks to this API.
      </>
    ),
  },
  {
    imageUrl: "/img/structure.svg",
    title: <>Extendible Structure</>,
    description: (
      <>
        Thanks to the low-level API of Kapseli, you can extend, even overwrite,
        its core functionality.
      </>
    ),
  },
  {
    imageUrl: "/img/ui.svg",
    title: <>Various UI Packages</>,
    description: (
      <>
        Aren't you a designer? Don't worry. Our plugin repository is rich. There
        are premium and free plugins. If you want complicated and easy-to-use
        components, try premium packages. We will continue to release new UI
        packages.
      </>
    ),
  },
  {
    imageUrl: "/img/form.svg",
    title: <>Auto Form AJAX</>,
    description: (
      <>
        Kapseli has a connection with its storage manager to async form data
        automatically when the form is submitted. With this feature, collecting
        data is pie.
      </>
    ),
  },

  {
    imageUrl: "/img/route.svg",
    title: <>Built-in Route System</>,
    description: (
      <>
        Kapseli has built-in auto init router. Only register your pages. Routing
        is the task of Kapseli. Don't worry!
      </>
    ),
  },

  {
    imageUrl: "/img/render-engine.svg",
    title: <>Customizable HTML Render Engine</>,
    description: (
      <>
        Kapseli has a HTML Render Engine. No dependency! This engine is powered
        by the Event-Listen-Network of Kapseli. You can customize it by using
        this network and the low-level API.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      <p
        style={{
          display: "flex",
        }}
      >
        <img
          src={imgUrl}
          alt={title.innerText}
          style={{ height: "14rem", margin: "auto" }}
        />
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} - A UI Framework for creating a SPA dashboard application.`}
      description="A UI Framework for creating a SPA dashboard application."
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Get Started
            </Link>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              href="https://github.com/Swindler36/Kapseli-UI-Framework"
            >
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
