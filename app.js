var listt = document.getElementById("list")

function addTodo()
{
    var todo = document.getElementById("todo-item")
    var textnode = document.createTextNode(todo.value)
    var li = document.createElement("li")
    li.appendChild(textnode)
    li.style.fontSize = "20pt"
    li.style.fontStyle = "Comic Sans MS"
    listt.appendChild(li)
    todo.value=""

    var editBtn = document.createElement("button")
    var editPng = document.createElement("img")
    editPng.src = 'imgFolder/edit.png'
    editPng.style.width = "20px";
    editPng.style.height = "20px";
    editBtn.appendChild(editPng)
    editBtn.style.margin = "0 0 0 10px"
    li.appendChild(editBtn)


    var deleteBtn = document.createElement("button")
    var deletePng = document.createElement("img")
    deletePng.src = 'imgFolder/delete.png'
    deletePng.style.width = "20px";
    deletePng.style.height = "20px";
    deleteBtn.appendChild(deletePng)
    deleteBtn.style.margin = "0 0 0 10px"
    li.appendChild(deleteBtn)

    deleteBtn.setAttribute("onclick","deleteItem(this)")
    editBtn.setAttribute("onclick","editItem(this)")
}

function deleteAll(){
    listt.innerHTML=""
}

function deleteItem(e)
{
    e.parentNode.remove()
}


function editItem(e)
{
    var promptt = prompt("Edit here...",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = promptt
}