# Docusaurus assets

As per the [Docusaursus documentation](https://docusaurus.io/docs/en/doc-markdown#linking-to-images-and-other-assets), static assets used in documents and blogs should go into `docs/assets` and `website/blog/assets` respectively.

To reduce the size of the monorepo, we instead insist on ALL assets to be hosted publically.

## Amido Maintainers

If you have access to the `Amido.Stacks` subscription in Azure, under the `amido-stacks-assets` resource group there is a Storage Account named `amidostacksassets`. This contains `docs` a _public read only storage container_ under which you may upload all static assets to the `assets` folder.

These are then available via URL to insert into the documentation as markdown assets.

## External Contributors

Please upload and host the static assets from a secure location and reference it in the documentation.

## Exammple: Embedding images in markdown

Inline-style:
![example gif](https://amidostacksassets.blob.core.windows.net/docs/assets/axe_cypress_good_quality.gif "Example gif")

Reference-style:
![example gif][gif]

[gif]: https://amidostacksassets.blob.core.windows.net/docs/assets/axe_cypress_good_quality.gif "Example gif"
