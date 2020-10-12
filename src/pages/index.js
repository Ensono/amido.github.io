import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Accelerates architecture setup',
    description: (
      <>
        Stacks helps you to build a solid foundation, meaning that you can focus on solving the project challenges more quickly. You no longer have to re-invent the wheel for every new project!
      </>
    ),
  },
  {
    title: 'De-risks delivery of digital transformation',
    description: (
      <>
        Through our extensive experience, we have made educated and opinionated decisions on tools, frameworks and platforms. Being open source we also encourage reviews and developer input on these decisions.
      </>
    ),
  },
  {
    title: 'Solutions to build, test and deploy',
    description: (
      <>
        Behind our boilerplate projects, we use Terraform, Kubernetes, and pipeline as code with other amazing tools to deploy your tested application. Advanced configuration for multiple cloud providers and offer no lock-in.
      </>
    ),
  },
];

function TryOutText ({title, content, command, imageUrl}) {
  return (
      <div className={clsx('col col--6', styles.tryOut)}>
        <h3>{title}</h3>
        <p>{content}</p>
        <pre>{command}</pre> 
      </div>
  );
}

function TryOutImage({imageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.tryOut)}>
      <img src={imgUrl} />
    </div>
  )
}

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
          {features && features.length > 0 && (
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
          <section className={styles.tryOut}>
            <div className="container">
              <div className="row">
                <TryOutText title="Get started in as little as 5 commands" 
                            content="Amido Stacks let you focus on the problem, not the tools or setup. To start creating your project run this command to interactively guide:"
                            command="npx @amidostacks/scaffolding-cli run -i"
                />
                <TryOutImage imageUrl="https://amidostacksassets.blob.core.windows.net/docs/assets/npx_amidostacks_scaffolding_cli_run_i.gif"/>
              </div>
            </div>
          </section>
          
      </main>
    </Layout>
  );
}

export default Home;
