'use strict'

module.exports = function generateJSONArray({ sheetData, colKeys }) {
  let resultLabel = []
  let resultValue = []
  let result = {}

  colKeys.forEach((row, index) => {
    resultLabel.push(row)
  })

  for (let i = 0, len = Math.min(sheetData.length, 30); i < len; i++) {
    let tempArr = [];
    for (let j = 0, len = colKeys.length; j < len; j++) {
      const col = colKeys[j]
      let val = sheetData[i][col]
      if (typeof val === 'undefined') val = []
      tempArr.push([val])
    }
    resultValue[i] = tempArr
  }

  sheetData = null
  colKeys = null
  result['dateLabel'] = resultLabel
  result['dateValue'] = resultValue
  return reuslt
}
