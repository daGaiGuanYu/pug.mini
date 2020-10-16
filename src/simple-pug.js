var startWith = require('./start-with')

module.exports = function(el){
  if(!el)
    throw Error('需要一个 pug 模板字符串')
  
  var tag = 'div'
  if(startWith.letter(el)){
    var indexSharp = el.indexOf('#')
    if(indexSharp > -1){ // 如果有 #
      tag = el.slice(0, indexSharp)
      el = el.slice(indexSharp)
    } else {
      var indexDot = el.indexOf('.') // 如果有 .
      if(indexDot > -1){
        tag = el.slice(0, indexDot)
        el = el.slice(indexDot)
      }else{ // 什么也没有
        tag = el
        el = ''
      }
    }
  }
  var id = ''
  if(startWith.sharp(el)){
    var indexDot = el.indexOf('.')
    if(indexDot > -1){
      id = el.slice(1, indexDot)
      el = el.slice(indexDot)
    }else{
      id = el.slice(1)
      el = ''
    }
  }
  var classList = el.split('.')
  classList.shift()
  return '<' + tag + ' id="' + id + '" class="' + classList.join(' ') + '"'
}