/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateResolversArgs, GatsbyNode } from 'gatsby'

export const createResolvers: GatsbyNode['createResolvers'] = async ({
  createResolvers,
}: CreateResolversArgs) => {
  createResolvers({
    Member: {
      activities: {
        type: ['Mdx'],
        resolve(source: { name: string }, _args: unknown, context: any) {
          return context.nodeModel
            .getAllNodes({ type: 'Mdx' })
            .filter(
              (log: { frontmatter?: { participants?: string[] } }) =>
                log.frontmatter?.participants?.includes?.(source.name) || false
            )
        },
      },
    },
  })
}
