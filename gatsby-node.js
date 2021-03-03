'use strict'

require('ts-node').register()

const {
  createSchemaCustomization,
  sourceNodes,
  createPages,
  createResolvers,
  onPostBootstrap,
} = require('./src/gatsby/node/index.ts')

exports.createPages = createPages
exports.sourceNodes = sourceNodes
exports.createSchemaCustomization = createSchemaCustomization
exports.createResolvers = createResolvers
exports.onPostBootstrap = onPostBootstrap
