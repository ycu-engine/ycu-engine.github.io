import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<{
    allMember: { nodes: { id: string; name: string }[] }
    allTeam: { nodes: { id: string; name: string }[] }
    allEvent: { nodes: { id: string; name: string }[] }
  }>(/* GraphQL */ `
    query CreatePages {
      allMember {
        nodes {
          id
          name
        }
      }
      allTeam {
        nodes {
          id
          name
        }
      }
      allEvent: allFile(
        filter: {
          sourceInstanceName: { eq: "events" }
          childrenMdx: {
            elemMatch: { frontmatter: { private: { ne: false } } }
          }
        }
        sort: { fields: childrenMdx___frontmatter___createdAt, order: DESC }
      ) {
        nodes {
          id
          name
        }
      }
    }
  `)
  if (result.data) {
    result.data.allMember.nodes.forEach(({ id, name }) => {
      createPage({
        path: `/members/${name}`,
        component: resolve('src/templates/member.tsx'),
        context: {
          slug: id,
        },
      })
    })
    result.data.allTeam.nodes.forEach(({ id, name }) => {
      createPage({
        path: `/teams/${name}`,
        component: resolve('src/templates/team.tsx'),
        context: {
          slug: id,
        },
      })
    })
    result.data.allEvent.nodes.forEach(({ id, name }) => {
      createPage({
        path: `/events/${name}`,
        component: resolve('src/templates/event.tsx'),
        context: {
          slug: id,
        },
      })
    })
  }
}
