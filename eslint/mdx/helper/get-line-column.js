/* eslint-disable  */
/** @type {(text: string, index: number) => {line: number, column: number}} */
module.exports.getLineColumn = (text, index) => {
  const lines = text.split('\n')
  let line = 0
  while (line < lines.length) {
    if (index > lines[line].length) {
      index -= lines[line].length + 1
      line++
    } else {
      break
    }
  }
  return {
    line: line + 1,
    column: index,
  }
}
