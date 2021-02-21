// Define the TaskItem class for the <task-item> Element
export default class TaskItem extends HTMLElement {

	id = null
	task = ``
	complete = false

	constructor(item) {
		super() // Extend the properties and methods of an HTMLElement
		console.log(item.complete)

		// set local variables
		this.id = item.id
		this.task = item.task
		this.complete = item.complete

		const customCompleteEvent = new CustomEvent('taskChanged')

		// Shadow DOM (the element)
		this.root = this.attachShadow({mode: `open`})
		
		// Apply styling
		const eleStyle = document.createElement(`style`)
		const txtStyle = document.createTextNode(`
				.task {
					display: block;
					background-color: #fff;
					padding: 0.5em;
					border: 1px solid #666;
				}

				[type="checkbox"] {
				   display: none;
				}

				[type="checkbox"]:checked + .task {
					text-decoration: line-through;
					background-color: #eee;
					color: #666;
				}

				[type="checkbox"]:not(:checked) + .task {
					counter-increment: todo-items;
				}`)
		
		eleStyle.appendChild(txtStyle)
		this.root.appendChild(eleStyle)
		
		
		// Apply content

		
		const eleItem = document.createElement(`li`)
		
		const eleInput = document.createElement(`input`)
		eleInput.setAttribute(`type`, `checkbox`)
		eleInput.setAttribute(`id`, `task-${this.id}`) 
		eleInput.setAttribute(`name`, `task-${this.id}`) 
		if(item.complete){// Complete
			eleInput.setAttribute(`checked`, `checked`)
		}
		
		eleInput.addEventListener(`change`,(event)=>{
			console.log(`check`,eleInput.checked)
			this.complete =eleInput.checked
			this.dispatchEvent(customCompleteEvent)
		})

		eleItem.appendChild(eleInput)
		
		const eleLabel = document.createElement(`label`)
		eleLabel.setAttribute(`for`, `task-${this.id}`)
		eleLabel.setAttribute(`class`, `task`)
		eleLabel.textContent = this.task
		eleItem.appendChild(eleLabel)
		
		this.root.appendChild(eleItem)
	}
}

// Add a <task-item> CUSTOM element
window.customElements.define(`task-item`, TaskItem)