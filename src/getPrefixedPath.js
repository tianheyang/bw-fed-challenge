// Gatsby's path prefixer for static assets doesn't seem to work on my machine. I've added a path prefixer utility below.

import path from "path"
import config from "../gatsby-config"
const { pathPrefix } = config

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
const isDevelopment = activeEnv === "development"

const getPrefixedPath = url => {
  return isDevelopment ? url : path.join(pathPrefix, url)
}
export default getPrefixedPath