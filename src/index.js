var simplePug = require('./simple-pug')

/**
 * @param {string} el | 严格顺序：tag#id.class.class 
 * @param {object} attr 
 */
module.exports = function(el, attr){
  var attrStr = ''
  for(var key in attr)
    attrStr += (' ' + key + '="' + attr[key] + '"')
  return simplePug(el) + attrStr + '/>'
}