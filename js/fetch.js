const todoList = [
  {
    "id": 1,
    "task": "Complete this example",
    "complete": false 
  }, {
    "id": 2,
    "task": "Order groceries",
    "complete": true 
  }, {
    "id": 3,
    "task": "Learn about Web Components",
    "complete": false 
  }
]



export const getJsonData = (url) => {
  // Pretend we fetched this data
  // fetch(url, blah blah blah)

  return todoList
}
 export const addNewTask = (taskName) =>{
   //pretend we are updating the database
  // POST request
   todoList.push({
     "id": todoList.length+1,
     "task": taskName,
     "complete": false
   })
   //pretend this came from the database after a succesful update 
   return todoList
 }