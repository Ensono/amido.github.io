---
id: repository_overview_netcore
title: Repository Overview
sidebar_label: Repository
---

<div class="line number1 index0 alt2"><code class="java plain">├── build</code></div>
<div class="line number2 index1 alt1"><code
        class="java plain">│&nbsp;&nbsp; ├── azDevOps: stores configuration, build steps and scripts used by azure dev ops only</code>
</div>
<div class="line number3 index2 alt2"><code
        class="java plain">│&nbsp;&nbsp; ├── jenkins: stores configuration, build steps and scripts used by jenkins only</code>
</div>
<div class="line number4 index3 alt1"><code
        class="java plain">│&nbsp;&nbsp; └── scripts: stores scripts used by build steps that can be resused by multiple</code>
</div>
<div class="line number5 index4 alt2"><code
        class="java plain">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tools without changes. ie: Docker script&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">Container Image creation</code></div>
<div class="line number6 index5 alt1"><code class="java plain">├── deploy</code></div>
<div class="line number7 index6 alt2"><code
        class="java plain">|&nbsp;&nbsp; ├── k8s: stores yaml files&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code
        class="java plain">k8s deployments. i.e: deployments, services,</code></div>
<div class="line number8 index7 alt1"><code
        class="java plain">|&nbsp;&nbsp; |&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp; configMap and related dependencies&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">each service in an application</code></div>
<div class="line number9 index8 alt2"><code
        class="java plain">|&nbsp;&nbsp; |&nbsp;&nbsp; ├── ui: stores yaml&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">ui service</code></div>
<div class="line number10 index9 alt1"><code
        class="java plain">|&nbsp;&nbsp; |&nbsp;&nbsp; └── api: stores yaml&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">the api service and configuration files</code>
</div>
<div class="line number11 index10 alt2"><code
        class="java plain">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── base: store raw yaml used by k8s</code>
</div>
<div class="line number12 index11 alt1"><code
        class="java plain">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── kustomization: store kustomize files(</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">kubectl apply -k)</code></div>
<div class="line number13 index12 alt2"><code
        class="java plain">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; ├── dev: configuration files&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">dev environment</code></div>
<div class="line number14 index13 alt1"><code
        class="java plain">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; │&nbsp;&nbsp; └── test: configuration files&nbsp;</code><code
        class="java keyword">for</code>&nbsp;<code class="java plain">test environment</code></div>
<div class="line number15 index14 alt2"><code
        class="java plain">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── helm-chart: store helm chart files(</code><code
        class="java keyword">if</code>&nbsp;<code class="java plain">helm used)</code></div>
<div class="line number16 index15 alt1"><code
        class="java plain">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── templates</code>
</div>
<div class="line number17 index16 alt2"><code
        class="java plain">|&nbsp;&nbsp; ├── serviceFabric: scripts used to deploy applications on serviceFabric</code>
</div>
<div class="line number18 index17 alt1"><code
        class="java plain">|&nbsp;&nbsp; ├── terraform: terraform scripts used to provision dependencies only needed by&nbsp;</code><code
        class="java keyword">this</code>&nbsp;<code class="java plain">application</code></div>
<div class="line number19 index18 alt2"><code
        class="java plain">|&nbsp;&nbsp; └── scripts: deployment scripts shared by multiple tools. ie: Variable substitution</code>
</div>
<div class="line number20 index19 alt1"><code
        class="java plain">├── contracts: stores swagger specs, ui mocks and other documents describing the overall solution</code>
</div>
<div class="line number21 index20 alt2"><code class="java plain">└── src</code></div>
<div class="line number22 index21 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
        class="java plain">├── services (i.e: apis, queue listerner, scheduled jobs)</code></div>
<div class="line number23 index22 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
        class="java plain">├── tests: stores tests not built in other services solutions(functional tests, performance, etc)&nbsp;</code>
</div>
<div class="line number24 index23 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
        class="java plain">└── ui: stores the front end service and components</code></div>
