import React from 'react';

import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import styles from './SearchBar.module.css'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SearchBarWrapper() {
  const {
    siteConfig: {customFields: {docSearch: {appId, apiKey, indexName}}}
} = useDocusaurusContext()
  return (
      <DocSearch
        appId={appId}
        indexName={indexName}
        apiKey={apiKey}
      />
  );
}
