var parse = require('./parse')

/**
 * @param {string} el | 严格顺序：tag#id.class.class 
 * @param {object} attr 
 */
module.exports = function(el, attr){
  // 修剪 el
  el = el.trim()

  var attrStr = ''
  for(var key in attr)
    attrStr += (' ' + key + '="' + attr[key] + '"')
  
  var conf = parse(el)
  var idStr = conf.id
    ?(' id="' + conf.id + '"')
    :''
  var classStr = conf.classList.length
    ?(' class="' + conf.classList.join(' ') + '"')
    :''

  return '<' + conf.tag + idStr + classStr + attrStr + '>' + conf.content + '</' + conf.tag + '>'
}