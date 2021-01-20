'use strict'

require('ts-node').register()

const {
  createSchemaCustomization,
  sourceNodes,
  createPages,
} = require('./src/gatsby/node.ts')

exports.createPages = createPages
exports.sourceNodes = sourceNodes
exports.createSchemaCustomization = createSchemaCustomization
