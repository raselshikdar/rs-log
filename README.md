<h1 align="center"> VitePress @sugarat/theme </h1>

<p align="center">
A minimalist style <a href="https://theme.sugarat.top" target="_blank">VitePress blog theme</a> demo project.
</p>

<p align="center">
    <a href="https://atqq.github.io/vitepress-blog-sugar-template/" target="_blank">GitHub Pages Demo</a>
</p>

## Usage

First, install `pnpm`:

```sh
npm i -g pnpm
```

Install dependencies:

```sh
pnpm install
```

Start development:

```sh
pnpm dev
```

Build the project:

```sh
pnpm build
```

Preview the output:

```sh
pnpm serve
```

## GitHub Pages Deployment

① Enable GitHub Actions deployment for GitHub Pages:

![](https://img.cdn.sugarat.top/mdImg/sugar/8a2454c628d0e2abcc7a0451ddd7d2dc)

② Copy the `.github/workflows/deploy.yml` file to the same directory in your project.

This file is already included in the demo project, so you can proceed directly to the next step.

③ Modify the build config in `docs/.vitepress/config.mts`.

**If your repository name is already set to `username.github.io`, you don’t need to change anything — keep the default base `/`.**

Otherwise, change `base` to `"/your-repo-name/"`. Example:

```ts
// Other unrelated code omitted
const base = '/vitepress-blog-sugar-template/'
export default defineConfig({
  base,
})
```

④ Push to the `main` branch.

If additional adjustments are needed for deployment or build settings, refer to the `deploy.yml` file for more details.
