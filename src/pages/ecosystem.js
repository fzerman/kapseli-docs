import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

let PLUGINS = [
    {
        imageUrl: "",
        title: "",
        description: "",
        url: "",
        tags: ["a", "b"]
    }
]

function Plugin({ imageUrl, title, description, url }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className="card">
            <div className="card__image">
                <img
                    src={imgUrl}
                    alt={title + " | " + description}
                    title={title}
                />
            </div>
            <div className="card__body">
                <h4>{title}</h4>
                <small>
                    {description}
                </small>
            </div>
            <div className="card__footer">
                <a href={url} className="button button--primary button--block">See Details</a>
            </div>
        </div>
    );
}

let FILTERS = [
    {
        id: "components",
        label: "Components"
    },
    {
        id: "manager",
        label: "Manager"
    },
    {
        id: "supports",
        label: "Supports"
    },
    {
        id: "third-party-service",
        label: "Third Party Service"
    }
]

function Ecosystem() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    const [filter, setFilter] = React.useState([]);

    const chageFilter = (idx) => {
        if(filter.includes(idx)){
            setFilter(
                filter.filter(f => f !== "idx")
            )
        }else{
            setFilter([...filter,sets.id])
        }
    }

    return (
        <Layout
            title={`${siteConfig.title} - A UI Framework for creating a SPA dashboard application.`}
            description="A UI Framework for creating a SPA dashboard application.">

            <main className="container">
                <div className="row">
                    <div className="col col--3">
                        {
                            FILTERS.map((sets, idx) => (
                                <div className="margin-vert--xs">
                                    <input type="checkbox" id={sets.id} onChange={()=>chageFilter(sets.id)} /><label htmlFor={sets.id}>{sets.label}</label>
                                </div>
                            ))
                            }

                    </div>
                    <div className="col col--9">
                        <div className="container">
                            <div className="row">
                                {
                                    filter.length > 0 ?
                                        PLUGINS.map((props, idx) => {
                                            let enable = false;
                                            props.tags.forEach((tag) => {
                                                if (filter.includes(tag)) {
                                                    enable = true;
                                                }
                                            })

                                            if (enable) {
                                                return (<Plugin key={idx} {...props}></Plugin>);
                                            }

                                        }) :
                                        PLUGINS.map((props, idx) => (
                                            <Plugin key={idx} {...props}></Plugin>
                                        ))

                                }


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Ecosystem;
