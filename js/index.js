import {getJsonData} from './fetch.js'
//import {renderList} from './tasks.js'
import TaskList from './taskList.js'


// ONLY when the interface is loaded, do we go and look for data and render
window.addEventListener(`load`, (event) => {

  // Go get some data! (Assume some "await" time)
  const todoList = getJsonData(`http://whatever.com/tasks`)

  // Pass the array of data, build the UI
  // renderList(todoList)

  // 1 way to build task list 
  // document.getElementById(`app`).innerHTML = `<task-list></task-list>`
 
  // 2nd way to build task list(todolist- we can pass information to the TaskList constructor)  
  const theListElement = new TaskList(todoList)
  document.getElementById(`app`).appendChild(theListElement)
  
})































/*
- Order by priority and completeness

Reminder:
- Compare then() to async/await
- Destructuring
*/