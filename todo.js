const listElement = document.querySelector('#app ul')
const buttonElement = document.querySelector('#app button').addEventListener('click', addTodo)
const inputElement = document.querySelector('#app input')


let todos = JSON.parse(localStorage.getItem('list_todo')) || []

function renderTodos(){
    listElement.innerHTML = ''

    for(todo of todos){
        listElement.style.padding = '5px'
        
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)

        todoElement.style.borderBottom = '1px solid #6c968b'
        todoElement.style.display = 'flex'
        todoElement.style.alignItems = 'center'
        todoElement.style.marginLeft = '5px'
        
        
        let check = document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', 'box')
        check.style.justifySelf = 'start'
        check.style.marginRight = '5px'

        if(todo.length == 0){
            
        }

        let linkElement = document.createElement('button')
       

        const text = document.createTextNode('x')
        
        linkElement.style.borderRadius = '100px'
        linkElement.style.border = 'none'
        linkElement.style.outline = 'none'
        linkElement.style.background = 'black'

        linkElement.style.position = 'absolute'
        linkElement.style.right = '0'
        linkElement.style.marginRight = '5px'
        
        //

        let pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

       
        let linkText = document.createTextNode('x')
        
         let spanlink = document.createElement('span')
        spanlink.appendChild(linkText)
        spanlink.style.padding = '4px'
        spanlink.style.color = 'white'

        linkElement.appendChild(spanlink)


        listElement.appendChild(check)
     
    
      
    
      

      
      
        todoElement.appendChild(check)
        todoElement.appendChild(todoText)
         todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
     let todoText = inputElement.value

     if(todos.value == 0){
         alert("ainda sem todos")
     }
      
     if(todoText.length == 0){
         alert(`por favor digite algo`)
     }else{
          todos.push(todoText)
     inputElement.value = ''
     renderTodos()
     saveToStorage()
     }

    
     
}


function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
    
}

function saveToStorage(){
    localStorage.setItem('list_todo', JSON.stringify(todos))
    
}

