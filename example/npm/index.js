const pugEl = require('pug.mini')

console.log(pugEl('.class1')) // <div id="" class="class1"/>
console.log(pugEl('#id.class1')) // <div id="id" class="class1"/>
console.log(pugEl('span#id.class1')) // <span id="id" class="class1"/>
console.log(pugEl('.class1', {
  name: 'gy',
  date: '20201016'
}))