/* eslint-disable  */
// @ts-check
const stringSimilarity = require('string-similarity')
const { memberName } = require('../../../src/data/member')
const { teamName } = require('../../../src/data/team')
const getLineColumn = require('../helper/get-line-column').getLineColumn

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
    const sourceText = sourceCode.getText()

    return {
      JSXElement: (node) => {
        if (node.openingElement.name.name == 'user') {
          const userName = node.openingElement.attributes.find(
            (v) => v.name.name === 'name'
          ).value
          if (!memberName.includes(userName.value)) {
            const loc = {
              start: getLineColumn(sourceText, userName.start),
              end: getLineColumn(sourceText, userName.end),
            }
            const matches = stringSimilarity.findBestMatch(userName.value, [
              ...memberName,
            ])
            context.report({
              node: userName,
              loc,
              suggest: [
                {
                  desc: `${userName.value}を${matches.bestMatch.target}に変更する`,
                  fix: (fixer) =>
                    fixer.replaceText(
                      userName,
                      `"${matches.bestMatch.target}"`
                    ),
                },
              ],
              message: `${userName.value}というユーザーは存在しません。`,
            })
          }
        } else if (node.openingElement.name.name == 'team') {
          const team = node.openingElement.attributes.find(
            (v) => v.name.name === 'name'
          ).value
          if (!teamName.includes(team.value)) {
            const loc = {
              start: getLineColumn(sourceText, team.start),
              end: getLineColumn(sourceText, team.end),
            }
            const matches = stringSimilarity.findBestMatch(team.value, [
              ...teamName,
            ])
            context.report({
              node: team,
              loc,
              suggest: [
                {
                  desc: `${team.value}を${matches.bestMatch.target}に変更する`,
                  fix: (fixer) =>
                    fixer.replaceText(team, `"${matches.bestMatch.target}"`),
                },
              ],
              message: `${team.value}というチームは存在しません。`,
            })
          }
        }
      },
    }
  },
}
