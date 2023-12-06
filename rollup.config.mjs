import typescript from "rollup-plugin-typescript2";
//import typescript from "@rollup/plugin-typescript";

export default {
    input: ["src/index.ts"],
    output: {
        format: "es",
        dir: "dist",
        preserveModules: true
    },

    plugins: [typescript({})]
};
