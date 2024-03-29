/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';


function ErrorPageContent() {
  return (
    <Layout title="Page Not Found">
      <BrowserOnly  fallback={<div>Loading...</div>}>
        <script>
        {
          React.useEffect(() => {
            window.onload = () => {
              const pathNames = window.location.pathname.split("/");
              if (pathNames.length > 2 && pathNames[1]?.includes("stacks")) {
                window.location.pathname = "/" + pathNames.slice(2, pathNames.length).join("/"); 
              }
            }
          })
        }
        </script>
      </BrowserOnly>
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p>We could not find what you were looking for.</p>
            <p>
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ErrorPageContent;
