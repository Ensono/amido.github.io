import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import './SearchBar.module.css';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function SearchBarWrapper() {
  const {
    siteConfig: {customFields: {docSearch: {appId, apiKey, indexName} = {}} = {}}
  } = useDocusaurusContext();

  if (!appId || !apiKey || !indexName) {
    return null;
  }

  return (
    <DocSearch
      appId={appId}
      indexName={indexName}
      apiKey={apiKey}
    />
  );
}
