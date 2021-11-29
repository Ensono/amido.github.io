/*
Site-wide variables, usage:
- include in MDX/JSX (has to be in a tag)
- doesn't work with pure Markdown
- import the file first: import {siteVariables} from '@site/versions';
- then reference like: <tag>{siteVariables.variableName}</tag>
 */
export const siteVariables = {
    javaModuleParentVersion: 'parentversion',
    javaCommonsVersion: 'commonsversion',
    javaApiVersion: 'apiversion',
    javaMessagingVersion: 'messagingversion',
    javaCqrsVersion: 'cqrsversion',
    javaAzureCosmosVersion: 'cosmosversion',
    javaAzureServicebusVersion: 'servicebusversion'
}