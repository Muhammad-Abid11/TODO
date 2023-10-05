function addTodo() {
    var inputValue = document.getElementById("inputs")
    var ulELement = document.getElementById("list")
    var liElement = document.createElement("li")
    //1 new thing down create and add button element
    var editBtn = "<button onclick='EditBtn(event)'>Edit Button</button>"
    var delBtn = "<button onclick='DeleteBtn(event)'>Delete Button</button>"
    //attach with li
    liElement.innerHTML = inputValue.value + editBtn + delBtn;
    ulELement.append(liElement)
    inputValue.value = ''

    DeleteBtn = (e) => {// here normal function error due to scope
        console.log(e)
        // e.target.parentElement.remove() // both work
        e.target.parentNode.remove()
    }
    EditBtn = (e) => {
        // console.log(e)
        //2 new thind add css from here
        var addTodo = document.getElementById("addTodo")
        var UpdateTodo = document.getElementById("UpdateTodo")
        addTodo.className = 'hide' //button hide
        UpdateTodo.className = ''  //button unhide

        //--edit functionality here down
        // inputValue.value = e.target.previousSibling.innerHTML //Sir Kashif  use it when text in a <span></span>
        inputValue.value = e.target.parentNode.firstChild.nodeValue // use it when text in a <span></span>
        // console.log("Sir Ghous--->", e.target.parentNode.firstChild.nodeValue)

    }
    UpdateTodo = (e) => {
        var addTodo = document.getElementById("addTodo")
        var UpdateTodo = document.getElementById("UpdateTodo")
        addTodo.className = ''
        UpdateTodo.className = 'hide'

        var inputValue = document.getElementById("inputs")
        liElement.innerHTML = inputValue.value + editBtn + delBtn;
        ulELement.append(liElement)
        inputValue.value = ''
    }
    deleteAll = () => {
        ulELement.innerHTML = ""
    }
}

//
// 