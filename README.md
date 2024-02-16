# Next.js Monorepo Starter

based on [turborepo](https://turbo.build/repo/docs), other deps need mention:

- Next.js
- prettier
- SASS
- vitest
- clxs

## Apps

- `temlpate`: app template

## Packages

- `@deps/ui`: React component library shared by apps
- `@deps/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@deps/typescript-config`: `tsconfig.json`s used throughout the monorepo

## Script

- `npm run dev:PARAM`: run a/multi dev server(s)
- `npm run build:PARAM`: build a/multi app/deps
- `npm run lint`: lint code
- `npm run format`: format code
- `npm run reset`: remove cache and re-install deps
