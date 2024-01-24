import type { Config } from "jest"

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  roots: ["<rootDir>/tests"],
  rootDir: "./",
}

export default config
