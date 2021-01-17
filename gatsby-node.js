'use strict'

require('ts-node').register()

// require('./src/__generated__/gatsby-types')

const { createSchemaCustomization, sourceNodes } = require('./gatsby/node.ts')

exports.createSchemaCustomization = createSchemaCustomization
exports.sourceNodes = sourceNodes
