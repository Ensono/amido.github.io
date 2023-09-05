import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

export default function SearchBarWrapper() {
  return (
    <>
        {/* Can we put the appId, indexName and apiKey somewhere else? */}
        <DocSearch
          appId="HZJPMBSKK3"
          indexName="stacks-amido"
          apiKey="6b3dcd0dbf85334a8c18a2d62f1bff35"
        />
    </>
  );
}
