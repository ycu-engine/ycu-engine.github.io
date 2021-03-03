import { writeFileSync } from 'fs'
import { GatsbyNode } from 'gatsby'
import { getIntrospectionQuery, graphql } from 'gatsby/graphql'
import { join, resolve } from 'path'

export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = async ({
  store,
}) => {
  const { schema } = store.getState()

  const res = await graphql(schema, getIntrospectionQuery())
  const schemaPath = resolve(join(__dirname, '../../../schema.json'))
  writeFileSync(schemaPath, JSON.stringify(res.data, null, 2))
  console.log('Wrote schema')
}
