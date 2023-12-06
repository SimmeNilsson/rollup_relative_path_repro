# rollup_relative_path_repro

Trouble generating relative paths in library type definitions

After upgrading to Rollup 4.x, from 3.x, typescript-transform-paths no longer works for .d.ts files with rollup-plugin-typescript2.

It works with @rollup/plugin-typescript, but it has other issues when introducing plugins like rollup-plugin-vue.

Steps
yarn
yarn build

Check dist/index.d.ts

Import should be relative
export { print } from "./dep";

If it doesn't work we will see
export { print } from "@/dep";

Rollup 4 + rollup-plugin-typescript2 - does not work
Rollup 3 + rollup-plugin-typescript2 - works
Rollup 3/4 + @rollup/plugin-typescript - works
tsc - works
