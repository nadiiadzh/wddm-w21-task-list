import {getJsonData, addNewTask} from './fetch.js'
//import {renderList} from './tasks.js'
import TaskList from './taskList.js'
import NewTask from './newTask.js'

// ONLY when the interface is loaded, do we go and look for data and render
window.addEventListener(`load`, (event) => {

  // Go get some data! (Assume some "await" time)
  const todoList = getJsonData(`http://whatever.com/tasks`)
  const $app = document.getElementById(`app`)


  // Pass the array of data, build the UI
  // renderList(todoList)

  // 1 way to build task list 
  // document.getElementById(`app`).innerHTML = `<task-list></task-list>`
 
  // 2nd way to build task list(todolist- we can pass information to the TaskList constructor)  
  const theListElement = new TaskList(todoList)

  // the "<new-task>" form
  const theNewTaskForm = new NewTask()
  $app.appendChild(theNewTaskForm)
  
  theNewTaskForm.addEventListener(`new`,(event) =>{
    console.log(`New task has been added`, event.detail)
    // now what ?
    // -update the datebase
    // -get a new listings of tasks
    // -refresh the UI to match the tasks
    //theListElement.addNewTask(`Class complete!`) 

    let updateTaskList = addNewTask(event.detail)
    console.table(updateTaskList)

    //"render" the new list
    theListElement.render(updateTaskList)
  })


  $app.appendChild(theListElement)

  //Prototype adding a new item to the list
 // theListElement.addNewTask(`Class complete!`) 
  
})































/*
- Order by priority and completeness

Reminder:
- Compare then() to async/await
- Destructuring
*/