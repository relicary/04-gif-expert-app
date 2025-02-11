# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to create

**IMPORTANT:** At this moment, instead using `TS`, it is going to be used `JS`

This project has been created with VITE using YARN:

```console
> yarn create vite
yarn create v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Installed "create-vite@6.1.1" with binaries:
      - create-vite
      - cva
√ Project name: counter-app
√ Select a framework: » React
√ Select a variant: » JavaScript

Done. Now run:

  cd counter-app
  yarn
  yarn dev

Done in 170.30s.

> yarn install
yarn install v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 118.40s.
```

# How to run

```
> yarn dev
```
Or
```
> npm run dev
```

# Hooks

`useEffect`: Hook para disparar efectos secundarios

# Howe to deploy

```
> yarn build
```

And creates the folder `dist` which contains de Prod App optimized

http-server -o