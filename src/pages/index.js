import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import CodeBlock from "@theme/CodeBlock";
import Gist from "react-gist";

const features = [
  {
    imageUrl: "/img/low-level-api.svg",
    title: <>Powerful Low-Level API</>,
    description: (
      <>
        Kapseli provides a robust low-level API that allows you to modify and extend its functionality. With its extensive Event-Listen-Network, you have the ability to utilize and listen to all events effortlessly.
      </>
    ),
  },
  {
    imageUrl: "/img/structure.svg",
    title: <>Flexible and Extensible Structure</>,
    description: (
      <>
        Leveraging the Low-Level API of Kapseli, you have the freedom to easily extend and even overwrite its core features. Shape Kapseli according to your unique requirements and preferences.
      </>
    ),
  },
  {
    imageUrl: "/img/ui.svg",
    title: <>Diverse Selection of UI Packages</>,
    description: (
      <>
        No design background? No problem! Our plugin repository offers a wide range of UI packages, including both premium and free options. Whether you're looking for sophisticated or user-friendly components, explore our premium packages. We are committed to regularly releasing new UI packages, so stay tuned!
      </>
    ),
  },
  {
    imageUrl: "/img/form.svg",
    title: <>Effortless Auto Form AJAX</>,
    description: (
      <>
        Kapseli seamlessly integrates with its storage manager, automatically storing form data upon submission. Simplify your data collection process with this convenient feature.
      </>
    ),
  },

  {
    imageUrl: "/img/route.svg",
    title: <>Built-in Route System</>,
    description: (
      <>
        Leave the hassle of routing to Kapseli. With its built-in auto init router, all you need to do is register your pages. Kapseli takes care of the rest, ensuring smooth navigation throughout your application.
      </>
    ),
  },

  {
    imageUrl: "/img/render-engine.svg",
    title: <>Customizable HTML Render Engine</>,
    description: (
      <>
       Kapseli boasts its own HTML Render Engine, completely independent of any external dependencies. This engine is powered by Kapseli's Event-Listen-Network. Take full control of the rendering process by leveraging this network and the powerful low-level API.
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

  // useEffect(() => {
  //   let iFrames = document.querySelectorAll("iframe");
  //   for (let i = 0; i < iFrames.length; i++) {
  //     const iFrame = iFrames[i];
  //     let doc = iFrame.contentDocument;
  //     doc.body.innerHTML =
  //       doc.body.innerHTML +
  //       `<style>.gist-meta {
  //         display: none;
  //       }
  //       .gist-file{
  //         filter: invert(1);
  //       }
  //       .highlight {
  //         margin: .5rem!important;
  //       }</style>`;
  //   }
  // }, []);

  return (
    <Layout
      title={`${siteConfig.title} - A UI Framework for creating a SPA dashboard application.`}
      description="A UI Framework for creating a SPA dashboard application."
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <img
                src="/img/kapseli-logo.png"
                style={{
                  maxHeight: "10rem",
                }}
              ></img>
            </div>
            <div
              className="col col--12"
              style={{
                display: "flex",
              }}
            >
              <h1
                className="hero__title"
                style={{
                  margin: "auto",
                }}
              >
                Kapseli Framework
              </h1>
            </div>
          </div>

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
                "button button--outline button--secondary button--lg d-none d-md-flex",
                styles.getStarted
              )}
              href="https://github.com/Swindler36/Kapseli-UI-Framework"
            >
              <img
                src="/img/github.svg"
                className="mr-2 my-auto"
                alt="GitHub Logo"
              />
              <span className="my-auto">GitHub</span>
            </Link>

            <Link
              className={classnames(
                "button button--primary button--lg",
                styles.getStarted
              )}
              href="https://www.npmjs.com/package/@stingydev/kapseli"
            >
              Install
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* <section className="py-5">
          <YouTubeEmbed embedId="rokGy0huYEA" />
        </section> */}
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

        <section className="py-3">
          <h2 className="text-center pb-5">
            Perfect Combination of Vue Syntax and React Utility
          </h2>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h3 className="text-center">React</h3>
                <Gist id="46edcbacfa8b35d5da76a69dc398efa4" />
              </div>
              <div className="col col--6">
                <h3 className="text-center">Vue</h3>
                <Gist id="23fbea528381548f2d3cfd4b55383d27" />
              </div>
              <div
                className="col col--12"
                style={{
                  height: "6rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    height: "6rem",
                    margin: "auto 0",
                  }}
                >
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                </div>
              </div>
              <div className="col col--12">
                <h3 className="text-center">Kapseli</h3>
                <Gist id="b3c7e444ed3e784eaacddfdaf9d75265"></Gist>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
