---
id: deployment_node_js
title: Pipeline
sidebar_label: Pipeline
---

The pipeline component (Azure DevOps) is fully prepped for this application and runs the following stages

Current set up albeit all configurable is rigged to work with Azure, AKS, and ACR.

- Build
    - unit test
    - pact broker tests
    - regression tests
    - pacakge auditing
    - build for docker container
        - typescript compile
        - [next](https://nextjs.org/) build
        - Dockerfile can be customized - current set up uses Debian (Buster). Not `slim` purely for additional python dependencies used during the build process
    - vulnerability scan on the packaged container
    - deploy to registry (defaults to ACR)
- Deploy Dev
    - create/check any application level infrastructure
        - Cache/DNS record
    - deploy to an AKS Cluster
    - run integration tests
- Deploy Prod
    - create/check any application level infrastructure
        - Cache/DNS record
    - deploy to an AKS Cluster
    - run smoke tests

### Kustomize and Kubectl

Currenty we support 2 ways of deploying your application into the K8s cluster 1 using Kustomize (part of Kubernetes since version 1.14)

- K8s cluster is updated with Kustomize and does deploy time replacements of various components such as: host_urls, environment variables, etc... To gain a more in-depth understading please review the `deploy/k8s/app/base` & `deploy/k8s/app/kustomize` folders. The downside is that each environment will have to be statically defined so makes it hard for any ad hoc environments, the upside is that the original yaml can be used as is.
- Kubectl apply on a templated out yaml file - using templating task. Upside of this approach is that your app is visibly defined in a single place and it can create any number of environments based on input to the same definition. Downside it cannot be run as is as it contains unreplaced variables

#### kube dashboard

If you want to proxy to the kube dashboard you will need to run the below:

```bash
kubectl create clusterrolebinding kubernetes-dashboard -n kube-system --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard
```

### Variable declaration and extending

TFS ONLY:

- All variables should be declared at the global scope
    - all steps and jobs should be passed as parameters
- you can assign groups at a stage or job level
