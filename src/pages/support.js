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

  useEffect(() => {
    function load(d, s, id, src) {
      var js,
        kjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = src;
      kjs.parentNode.insertBefore(js, kjs);
    }

    load(
      document,
      "script",
      "kreosus-iframe-api",
      "https://kreosus.com/public/iframe/js/iframe-api.js"
    );
    load(
      document,
      "script",
      "patreon-script",
      "https://c6.patreon.com/becomePatronButton.bundle.js"
    );
  });

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
          <div className="col col--12">
            <h2>Pareon</h2>
            <p>
              Stingy Developer is a content and product creator on web. I
              develop apps, website templates, themes and plugins. Also, you can
              hire me for your projects. Sometimes, I publish podcasts, videos
              or articles. You can donate me for my open-source projects and
              free online tools.
            </p>
            <a
              class="button button--outline button--secondary button--lg"
              href="https://www.patreon.com/bePatron?u=32387384"
              data-patreon-widget-type="become-patron-button"
            >
              Become a Patron!
            </a>
          </div>
          <div className="col col--12">
            <h2>Buy Me a Coffee</h2>
            <a href="https://www.buymeacoffee.com/stingydev" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style="height: 60px !important;width: 217px !important;"
              />
            </a>
          </div>
          <div className="col col--12">
            <h2>Kreosus</h2>
            <div id="kreosus" data-id="2127"></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Support;
