/*
Site-wide variables, usage:
- include in MDX/JSX (has to be in a tag)
- doesn't work with pure Markdown
- import the file first: import {siteVariables} from '@site/versions';
- then reference like: <tag>{siteVariables.variableName}</tag>
 */
export const siteVariables = {
    javaModuleParentVersion: '1.0.0',
    javaCommonsVersion: '1.0.0',
    javaApiVersion: '1.0.0',
    javaMessagingVersion: '1.0.0',
    javaCqrsVersion: '1.0.0',
    javaAzureCosmosVersion: '1.0.0',
    javaAzureServicebusVersion: '1.0.0'
}