// import React from 'react'
// const React = require('react')

const App = [1, 2].includes(1)

// const foo = {...{a:1,b:2}}

// class App extends React.Component {
//   render() {
//     return <div>App66666</div>
//   }
// }
import(/* webpackChunkName: "lodash", webpackPreload: true */ 'lodash').then(
  _ => {
    console.log(_.join(['Another', 'module', 'loaded!'], ' '))
  }
)

export default App

// let arrowFunction = (foo, bar) => {
// //   const CNT = 1
// //   CNT = 2
//   return Math.floor(foo + bar.attr[1])
// }

// export default arrowFunction
