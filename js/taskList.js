import TaskItem from './taskItem.js'
/*
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
//document.getElementById(`tasks`).innerHTML = taskAr.map(loadTaskView).join('\n')
}
*/
export default class TaskList extends HTMLElement{

    list = null

    constructor(todoList){
        super()
        this.root = this.attachShadow({mode: `open`})

        const eleStyle = document.createElement(`style`)
        const txtStyle = document.createTextNode(`
            ul{
                padding-left: 0;
                list-style: none;
            }
        `)
        eleStyle.appendChild(txtStyle) 
        this.root.appendChild(eleStyle)

        //build an empty list
        this.list = document.createElement(`ul`)
/*
        const loadTaskView = ({id, complete, task}) => {
            return `<task-item data-id="${id}" data-complete="${complete}" data-task="${task}"></task-item>`

        }
        // Add all of the <task-item> elements to empty list 
        eleList.innerHTML  = todoList.map(loadTaskView).join(`\n`)
*/      
        todoList.forEach((item) => {

            const aTask = new TaskItem(item)
            aTask.addEventListener('taskChanged', event =>{console.log('Task complete',aTask.complete)})
            this.list.appendChild(aTask)
            
        });

        // add the list to the root
        this.root.appendChild(this.list)
    }

    addNewTask(name){
            // Figure out what the next available id is
       const aTask = new TaskItem({id:4, task:name, complete:false})
        aTask.addEventListener('taskChanged', event =>{console.log('Task complete',aTask.complete)})
        this.list.appendChild(aTask)
    }
}
window.customElements.define(`task-list`,TaskList)