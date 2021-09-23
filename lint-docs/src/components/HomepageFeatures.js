import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '覆盖全面',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        包括前端开发基础规范ESLint(Vue、React、Taro、Next、Nuxt)、StyleLint(Less、CSS)、CommitLint
      </>
    ),
  },
  {
    title: '使用简单',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        提供三大基础包，安装即用；且提供轻量级命令行，一键为项目添加规范、升级规范
      </>
    ),
  },
  {
    title: '易于扩展',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        lerna统一版本模式发包，便于基础包升级、扩展自定义paser、plugin等
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
