import React, { useEffect } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Support() {
  useEffect(() => {
    (function (d, s, id) {
      var js,
        kjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://kreosus.com/public/iframe/js/iframe-api.js";
      kjs.parentNode.insertBefore(js, kjs);
    })(document, "script", "kreosus-iframe-api");
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
              href="https://www.patreon.com/bePatron?u=32387384"
              data-patreon-widget-type="become-patron-button"
            >
              Become a Patron!
            </a>
            <script
              async
              src="https://c6.patreon.com/becomePatronButton.bundle.js"
            ></script>
          </div>
          <div className="col col--12">
            <h2>Buy Me a Coffee</h2>
            <script
              type="text/javascript"
              src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
              data-name="bmc-button"
              data-slug="stingydev"
              data-color="#FFDD00"
              data-emoji=""
              data-font="Cookie"
              data-text="Buy me a coffee"
              data-outline-color="#000000"
              data-font-color="#000000"
              data-coffee-color="#ffffff"
            ></script>
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
