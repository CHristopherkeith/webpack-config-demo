let myvar = 'ggggggggggg'
let myvar2 = 'ffffffff'

let bar = function() {
  console.log(6666)
  let returnValue = 'barfffffff'
  return returnValue
}

let foo = function() {
  let returnValue = bar()
  return returnValue
}

myvar = foo()
myvar2 = myvar

// function component() {
//   let element = document.createElement('div')

//   // lodash（目前通过一个 script 引入）对于执行这一行是必需的
//   element.innerHTML = '6666'

//   return element
// }

// document.body.appendChild(component())
