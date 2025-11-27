# Ensono Stacks Documentation Site - AI Assistant Guidelines

> **⚠️ MANDATORY: Security and Compliance Requirements**  
> All AI assistants MUST adhere to the security instructions defined in `.github/instructions/security.instructions.md`. These instructions are non-negotiable and apply to ALL operations in this repository. Violations of security controls, branch protection, GPG signing, or change management processes are strictly prohibited.

## Project Overview

This is the **Ensono Stacks documentation microsite** built with Docusaurus 3.9.2. It documents workload templates, plugins, and infrastructure patterns for multi-cloud development (Azure, AWS, GCP) across .NET, Java, Node.js, and React stacks.

**Live site:** https://stacks.ensono.com  
**Repository:** https://github.com/Ensono/amido.github.io

## Architecture & Key Concepts

### Documentation Structure

- **`docs/`**: Primary Markdown documentation (published)
- **`asciidoc/`**: Legacy AsciiDoc content (being migrated)
- **`src/components/`**: React components for landing page sections (EnsonoStacksImage, Introduction, Features, etc.)
- **`src/theme/`**: Docusaurus theme customizations (SearchBar swizzled for Algolia v3 compatibility)
- **`sidebars.js`**: Navigation hierarchy with nested categories for workloads, plugins, and guides

### Content Organization Pattern

Documentation follows cloud → workload type → language structure:

- `docs/workloads/{aws|azure|gcp}/backend/{java|netcore}/` - Backend workloads
- `docs/workloads/{cloud}/frontend/` - Frontend patterns
- `docs/getting_started/{plugin-name}/` - Nx plugin documentation
- `docs/stackscli/` - CLI tool documentation

### Version Management

- **`versions.js`** exports `siteVariables` for dynamic version references in MDX files
- Import in MDX: `import {siteVariables} from '@site/versions';`
- Use in tags: `<code>{siteVariables.javaModuleParentVersion}</code>`
- Used for package versions across Java workload docs

## Development Workflows

### Local Development

```bash
npm install          # Install dependencies
npm start            # Dev server at localhost:3000
npm run build        # Production build to ./build
npm run serve        # Preview production build
```

### Linting & Validation

```bash
npm run lint         # Run markdownlint on docs/
npm run validate     # Auto-fix markdown issues
npm run lint:spell   # CSpell check with British English
```

### Custom Dictionary

Add technical terms to `cspell.json` words array (e.g., "Ensono", "amidostacks", "fuzzies")

### Deployment

GitHub Actions workflow (`.github/workflows/deployment.yml`) triggers on `master` branch:

1. Builds with Algolia secrets (search indexing)
2. Deploys to `gh-pages` branch via JamesIves action
3. Uses Node 24.x (package.json requires >=24 for local dev)

## Key Patterns & Conventions

### Component Organization

Custom React components in `src/components/`:

- Each component has own folder with index barrel export
- Exported via `src/components/index.ts` for clean imports
- Used primarily in `src/pages/index.js` for landing page composition

### MDX Enhancements

- **Tabs component**: `import Tabs from '@theme/Tabs';` for multi-option content (npm/yarn commands)
- **Admonitions**: Use `:::note`, `:::caution`, `:::warning` for callouts
- **Code blocks**: Specify language for syntax highlighting (supports csharp, docker, powershell, java, bash, json)

### Search Implementation

- **Algolia DocSearch** integrated via swizzled `src/theme/SearchBar.js`
- Uses `@docsearch/react` (new infrastructure) for compatibility
- Configuration in `docusaurus.config.js` pulls from environment variables
- Dashboard access: stacks@ensono.com

### Content Cross-References

Many docs link to external Ensono Stacks repositories:

- [stacks-dotnet](https://github.com/Ensono/stacks-dotnet)
- [stacks-java](https://github.com/Ensono/stacks-java)
- [stacks-nx-plugins](https://github.com/Ensono/stacks-nx-plugins)
- See `README.md` for complete list

## Project-Specific Guidance

### When Adding New Documentation

1. Add Markdown file to appropriate `docs/` subdirectory
2. Include YAML frontmatter with `id`, `title`, `sidebar_label`, `keywords`
3. Update `sidebars.js` to add to navigation hierarchy
4. Use `@site/versions` for version references (Java packages)
5. Test with `npm start` before PR

### When Editing Components

- Maintain barrel export pattern in `src/components/index.ts`
- Follow existing style modules pattern (`.module.css` files)
- Test on home page at `http://localhost:3000`

### Working with MDX Files

- For plugin documentation (stackscli, nx plugins), use `.mdx` extension
- Import reusable partials: `import GeneratorExample from './generator-example.md';`
- Reference with `<GeneratorExample />`

### Common Commands Context

- **Docker local dev**: Build image with `docker build . -t amido.github.io` and run on port 3000
- **Docusaurus CLI**: Direct access via `npm run docusaurus -- <command>`
- **Node version**: Requires Node >=24 and npm >=11.6 (see `package.json` engines)

## Testing Strategy

No automated tests in this repository - documentation site focused on:

- Markdown linting (markdownlint-cli)
- Spell checking (cspell with British English)
- Manual preview via `npm start`

## Contributing Guidelines

See `.github/CONTRIBUTING.md` for full details:

- PRs must pass markdown linting
- Documentation isn't optional
- Cross-platform compatibility required
- Look for `good-first-issue` and `documentation` labels

## Security and Compliance (MANDATORY)

**All operations in this repository MUST comply with `.github/instructions/security.instructions.md`.**

### Key Security Requirements

1. **GPG Commit Signing**: All commits MUST be signed. Never bypass with `--no-gpg-sign` or disable signing configuration.

2. **Branch Protection**: Never commit directly to `master`. Always use feature branches and Pull Requests with required reviews.

3. **No Credential Exposure**: Never hard-code secrets, API keys, or credentials. Use environment variables (e.g., `ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`).

4. **Change Control**: Follow proper SDLC processes. No direct production changes without PR approval.

5. **Secure Dependencies**: When updating `package.json`, verify no known CVEs are introduced. Check with `npm audit`.

### Prohibited Actions

- ❌ Force pushing to protected branches
- ❌ Bypassing branch protection or GPG signing
- ❌ Hard-coding credentials or API keys in source files
- ❌ Disabling security linting or checks
- ❌ Merging without required approvals

### Required Workflow

```bash
# 1. Create feature branch (never commit to master directly)
git checkout -b feature/your-change-description

# 2. Make changes and commit (GPG signed automatically if configured)
git add .
git commit -m "feat: descriptive commit message"

# 3. Push and create PR
git push origin feature/your-change-description
# Then create PR via GitHub with proper description
```

If GPG signing fails, do NOT bypass—resolve the configuration issue first. See security instructions for diagnostic commands.

## Using MCP Server for Azure DevOps

When getting work items using MCP Server for Azure DevOps, always try to use batch tools for updates instead of many individual single updates. For updates, try and update up to 200 updates in a single batch. When getting work items, once you get the list of IDs, use the tool `get_work_items_batch_by_ids` to get the work item details. By default, show fields ID, Type, Title, State. Show work item results in a rendered markdown table.

## Using MCP Server for GitHub

When investigating Issues, Pull Request, Builds and Alerts (Dependabot / Security) always use the GitHub MCP server to fetch information before answering queries or using the `gh` CLI tool.

## Using MCP Server for Exploratory Testing

The Chrome DevTools MCP server is configured for this repository, when you are asked to do exploratory testing use the Chrome DevTools MCP server to help automate access to a browser and perform the exploratory testing tasks.
