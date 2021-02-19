/* eslint-disable  */
// @ts-check
const matter = require('gray-matter')
const stringSimilarity = require('string-similarity')
const yaml = require('yaml-ast-parser')
const getLineColumn = require('../helper/get-line-column').getLineColumn
const memberName = require('../../../src/data/member').memberName

/**
 * @typedef { import("eslint").Rule.RuleModule } RuleModule
 */

/** @type { RuleModule } */
module.exports = {
  meta: {},
  create(context) {
    const filename = context.getFilename()
    const sourceCode = context.getSourceCode()
    const isActivityLog = filename.includes('activity_log')
    if (!isActivityLog) return {}

    const sourceCodeText = sourceCode.text
    /** @type {matter.GrayMatterFile<string>} */
    let frontmatter
    try {
      frontmatter = matter(sourceCodeText)
    } catch {
      frontmatter = undefined
    }
    if (!frontmatter) {
      return {
        Program: (node) => {
          context.report({
            node,
            message:
              'ファイルのメタ情報(frontmatter)部分に構文エラーがあります',
          })
        },
      }
    }
    return {
      Program: (node) => {
        for (const participant of frontmatter.data.participants) {
          if (!participant) continue
          if (!frontmatter.matter) continue
          if (!memberName.includes(participant)) {
            const matches = stringSimilarity.findBestMatch(participant, [
              ...memberName,
            ])
            const match = sourceCodeText.match(frontmatter.matter)
            const data = yaml.load(frontmatter.matter)
            const particiapnts = data.mappings.find(
              (mapping) => mapping.key.value === 'participants'
            ).value
            const target = particiapnts.items.find(
              (item) => item.value === participant
            )
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
                        desc: `${participant}を${matches.bestMatch.target}に変更する`,
                        fix: (fixer) =>
                          fixer.replaceTextRange(
                            [start, end],
                            matches.bestMatch.target
                          ),
                      },
                    ]
                  : undefined,
              message: `${participant}というユーザーは存在しません。`,
            })
          }
        }
      },
    }
  },
}
