/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const features = [
  {
    title: "Accelerates architecture setup",
    content:
      "Stacks helps you to build a solid foundation, meaning that you can focus on solving the project challenges more quickly. You no longer have to re-invent the wheel for every new project!",
  },
  {
    title: "De-risks delivery of digital transformation",
    content:
      "Through our extensive experience, we have made educated and opinionated decisions on tools, frameworks and platforms. Being open source we also encourage reviews and developer input on these decisions.",
  },
  {
    title: "Solutions to build, test and deploy",
    content:
      "Behind our boilerplate projects, we use Terraform, Kubernetes, and pipeline as code with other amazing tools to deploy your tested application. Advanced configuration for multiple cloud providers and offer no lock-in.",
  },
];

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl, baseRepoUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Stacks Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target} rel="noreferrer noopener" target="_blank">
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl("index")}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const CodeBlock = (props) => (
      <div>
        <pre>
          <code className="code">{props.code}</code>
        </pre>
      </div>
    );

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
        <CodeBlock 
          align="center"
          code={props.code} 
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block id="try" background="dark" code="npx @amidostacks/scaffolding-cli run -i">
        {[
          {
            content:
              "Amido Stacks let you focus on the problem, not the tools or setup. To start creating your project run this command to interactively guide: npx @amidostacks/scaffolding-cli run -i",
            image:
              "https://amidostacksassets.blob.core.windows.net/docs/assets/npx_amidostacks_scaffolding_cli_run_i.gif",
            imageAlign: "right",
            title: "Get started in as little as 5 commands",
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        
        {[
          {
            content: `${features[0].content}`,
            // image: `${baseUrl}img/undraw_react.svg`,
            // imageAlign: 'top',
            title: `${features[0].title}`,
          },
          {
            content: `${features[1].content}`,
            // image: `${baseUrl}img/undraw_react.svg`,
            // imageAlign: 'top',
            title: `${features[1].title}`,
          },
          {
            content: `${features[2].content}`,
            // image: `${baseUrl}img/undraw_react.svg`,
            // imageAlign: 'top',
            title: `${features[2].title}`,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
