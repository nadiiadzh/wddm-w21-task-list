import TaskItem from './taskItem.js'
const loadTaskView = ({id, complete, task}) => {
 // return `
 //   <li>
 //		<input type="checkbox" id="task${id} name="todoItem" ${(complete) ? `checked` : ``}>
 //			<label for="task${id}" class="task">${task}</label>
 //	</li>`
 return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`
}

// A function that will build an entire list based on an Array of data
export const renderList = (taskAr) => {
document.getElementById(`tasks`).innerHTML = taskAr.map(loadTaskView).join('\n')
}
