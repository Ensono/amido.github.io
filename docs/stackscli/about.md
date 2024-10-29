# Using the Ensono Stacks CLI

The Ensono Stacks CLI is built using Go, which means that it is a single binary which can be downloaded and run without the need to run an installer. It is currently built for the following platforms

- ![windows](./images/icons/windows.png) Windows

- ![apple](./images/icons/apple.png) Mac OS

- ![linux](./images/icons/linux.png) Linux

The CLI will help you get started with scaffolding your applications and workspaces using Ensono Stacks! Through a series of questions the CLI will determine how and what to build for your workspace, helping to accelerate your development process!

## Installation

As the CLI is a single binary, the quickest way to install it is to download it and add it to your PATH. The following code snippets show how this can be achieved using Bash and PowerShell.

### Linux and Mac OS

```bash
# Download the binary to a location in the PATH
## Mac OS
curl -L https://github.com/Ensono/stacks-cli/releases/download/v{stackscli_version}/stacks-cli-darwin-amd64-{stackscli_version} -o /usr/local/bin/stacks-cli

## Linux
curl -L https://github.com/Ensono/stacks-cli/releases/download/v{stackscli_version}/stacks-cli-linux-amd64-{stackscli_version} -o /usr/local/bin/stacks-cli

## Ensure that the command is executable
chmod +x /usr/local/bin/stacks-cli
```

### Windows

The following PowerShell snippet will download the Stacks CLI executable to the user's Downloads directory. It should be moved somewhere accessible for use through the PATH (or alternatively, use the full path to the app when using it).

```bash
# Download the binary
Invoke-RestMethod -Uri https://github.com/Ensono/stacks-cli/releases/download/v{stackscli_version}/stacks-cli-windows-amd64-{stackscli_version}.exe -OutFile $env:USERPROFILE\Downloads\stacks-cli.exe
```

:::info

We are currently updating this section, please visit the **[`stacks-cli`](https://github.com/Ensono/stacks-cli/releases)** releases page and download the latest releases **Stacks.CLI.Manual** to get started!

:::
