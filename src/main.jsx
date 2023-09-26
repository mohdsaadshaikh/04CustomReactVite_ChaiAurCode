import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx} from 'react/jsx-runtime.js'

function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'button',
  {type: "submit", width: "200px" },
  // 'click me to visit google',
  anotherElement,
  anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(reactElement)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )