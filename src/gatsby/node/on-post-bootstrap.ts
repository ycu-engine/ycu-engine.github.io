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
  writeFileSync(
    schemaPath,
    JSON.stringify(
      res.data,
      (_, v) =>
        !(v instanceof Array || v === null) && typeof v == 'object'
          ? Object.keys(v)
              .sort()
              .reduce<Record<string, any>>((r, k) => {
                r[k] = v[k]
                return r
              }, {})
          : v,
      2
    )
  )
  console.log('Wrote schema')
}
