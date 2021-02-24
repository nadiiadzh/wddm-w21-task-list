export default class NewTask extends HTMLElement{
    constructor(){
        super()
        console.log(`New task , whodis`)

        // Attach the styling to the shadow dom
        this.root = this.attachShadow({mode:`open`})
        const eleStyle = document.createElement(`style`)
        const txtStyle = document.createTextNode(`
          
        `)
        eleStyle.appendChild(txtStyle) 
        this.root.appendChild(eleStyle)

        //attach the form to the shadow dom
        /*
        <form name="newtasks">
			<input type="text" name="taskname"><button type="submit">Add</button>
		</form>
        */
       const eleForm = document.createElement(`form`)
       eleForm.setAttribute(`name`,`taskname`)

       const eleInput = document.createElement(`input`)
       eleInput.setAttribute(`type`,`text`)
       eleInput.setAttribute(`name`,`task`)

       const eleButton = document.createElement(`button`)
       eleButton.setAttribute(`type`,`submit`)
       eleButton.textContent = `Add task` 
       
       eleForm.addEventListener(`submit`, (event) =>{
           event.preventDefault()
           //console.log(eleInput.value)
           this.dispatchEvent(new CustomEvent(`new`,{detail:eleInput.value}))
       })

       eleForm.appendChild(eleInput)
       eleForm.appendChild(eleButton)

       this.root.appendChild(eleForm)


    }
}
window.customElements.define(`new-task`, NewTask)