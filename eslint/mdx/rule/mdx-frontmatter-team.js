/* eslint-disable  */
// @ts-check
const matter = require('gray-matter')
const stringSimilarity = require('string-similarity')
const yaml = require('yaml-ast-parser')
const getLineColumn = require('../helper/get-line-column').getLineColumn
const teamName = require('../../../src/data/team').teamName

/**
 * @typedef { import("eslint").Rule.RuleModule } RuleModule
 */

/**
 *  @type { RuleModule }
 */
module.exports = {
  meta: {},
  create(context) {
    const filename = context.getFilename()
    const sourceCode = context.getSourceCode()
    const isActivityLog = filename.includes('activity_log')
    if (!isActivityLog) return {}

    const sourceCodeText = sourceCode.text
    const frontmatter = matter(sourceCodeText)
    return {
      Program: (node) => {
        if (!frontmatter.data.team) return
        if (!teamName.includes(frontmatter.data.team)) {
          const matches = stringSimilarity.findBestMatch(
            frontmatter.data.team,
            [...teamName]
          )
          const matter = sourceCodeText.match(
            /^\s*---(?<frontmatter>[\s\S]*)---/
          ).groups.frontmatter
          const match = sourceCodeText.match(matter)

          const data = yaml.load(matter)
          const target = data.mappings.find(
            (mapping) => mapping.key.value === 'team'
          ).value
          const start = target.startPosition + match.index
          const end = target.endPosition + match.index
          const loc = {
            start: getLineColumn(sourceCodeText, start),
            end: getLineColumn(sourceCodeText, end),
          }
          context.report({
            node,
            loc,
            suggest:
              matches.bestMatch.rating > 0.5
                ? [
                    {
                      desc: `${frontmatter.data.team}を${matches.bestMatch.target}に変更する`,
                      fix: (fixer) =>
                        fixer.replaceTextRange(
                          [start, end],
                          matches.bestMatch.target
                        ),
                    },
                  ]
                : undefined,
            message: `${frontmatter.data.team}というチームは存在しません。`,
          })
        }
      },
    }
  },
}
