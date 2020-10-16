# pug.mini
微型 pug，只能生成一个元素。

# 用法
##### 安装
```bash
npm install pug.mini
```
##### go
```
const pugEl = require('pug.mini')

console.log(pugEl('.class1')) // <div id="" class="class1"/>
console.log(pugEl('#id.class1')) // <div id="id" class="class1"/>
console.log(pugEl('span#id.class1')) // <span id="id" class="class1"/>
console.log(pugEl('.class1', { // <div id="" class="class1" name="gy" date="20201016"/>
  name: 'gy',
  date: '20201016'
}))
```

> 注意，pug.mini 有点傻，它只认识 ```tag#id.className.className``` 这种顺序