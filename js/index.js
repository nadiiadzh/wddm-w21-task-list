import {getJsonData} from './fetch.js'
import {renderList} from './tasks.js'



// ONLY when the interface is loaded, do we go and look for data and render
window.addEventListener(`load`, (event) => {

  // Go get some data! (Assume some "await" time)
  const todoList = getJsonData(`http://whatever.com/tasks`)

  // Pass the array of data, build the UI
  renderList(todoList)
})































/*
- Order by priority and completeness

Reminder:
- Compare then() to async/await
- Destructuring
*/