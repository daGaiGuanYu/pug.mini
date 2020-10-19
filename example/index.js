// TODO 测试用例：使用断言
var pugEl = require('../src/index')

var test = [
  'span#id.class1.class2',
  'span#id.class1',
  'span#id',
  'span.class1.class2',
  'span.class2',
  'span',

  '#id.class1.class2',
  '#id.class1',
  '#id',

  '.class1.class2',
  '.class1'
]

for(var tmpl of test)
  console.log(pugEl(tmpl))

console.log('\n\n')

for(var tmpl of test)
  console.log(pugEl(tmpl, {
    name: 'gy',
    date: '20201016'
  }))

console.log('\n\n')

for(var tmpl of test)
  console.log(pugEl(tmpl, {
    name: 'gy'
  }))

console.log('\n\n')

for(var tmpl of test){
  tmpl += ' haha'
  console.log(pugEl(tmpl))
}

console.log('\n\n')

for(var tmpl of test){
  tmpl += ' haha'
  console.log(pugEl(tmpl, {
    name: 'gy'
  }))
}