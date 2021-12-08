import React, { useEffect } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Support() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.title} - A UI Framework for creating a SPA dashboard application.`}
      description="A UI Framework for creating a SPA dashboard application."
    >
      <main className="container">
        <div className="row">
          <h1 className="padding-vert--lg">Support</h1>
        </div>
        <div className="row">
          <div className="col col--4">
            <h2>Patreon</h2>
            <a
              class="button button--outline button--secondary button--lg"
              href="https://www.patreon.com/bePatron?u=32387384"
            >
              Become a Patron!
            </a>
          </div>
          <div className="col col--4">
            <h2>Buy Me a Coffee</h2>
            <a
              class="button button--outline button--secondary button--lg"
              href="https://www.buymeacoffee.com/stingydev"
              target="_blank"
            >
              Buy Me A Coffee!
            </a>
          </div>
          <div className="col col--4">
            <h2>Kreosus</h2>
            <a
              class="button button--outline button--secondary button--lg"
              href="https://kreosus.com/stingydev"
              target="_blank"
            >
              Support on Kreosus
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Support;
