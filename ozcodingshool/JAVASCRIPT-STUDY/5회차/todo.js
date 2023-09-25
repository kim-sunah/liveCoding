// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];

// 할일 보여주기
function displayTodos() {
    todoList.innerHTML = ""
    todoArr.forEach((aTodo) => {
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')
        todoDelBtn.innerText = 'x'
        todoDelBtn.title = 'delete'
        todoItem.innerText = aTodo.todoText
        todoItem.title = 'complete'
        todoItem.classList.add(aTodo.todoDone ? 'done' : 'yet')
        todoItem.appendChild(todoDelBtn)
        todoDelBtn.addEventListener('click', function () {
            handleTodoDelBtnClick(aTodo.todoId)
        })
        todoItem.addEventListener('click', function () {
            handleTodoItemClick(aTodo.todoId)
        })
        todoList.appendChild(todoItem)
    });
}

// 할일 삭제하기
function handleTodoDelBtnClick(clickedId) {
    todoArr = todoArr.filter(function (aTodo) {
        return aTodo.todoId !== clickedId
    })
    displayTodos()
    saveTodos()
}

// 할일 수정하기
function handleTodoItemClick(clickedId) {
    todoArr = todoArr.map(function (aTodo) {
        return aTodo.todoId !== clickedId ?
            aTodo : { ...aTodo, todoDone: !aTodo.todoDone }
    })
    displayTodos()
    saveTodos()
}

// 로컬스토리지에 저장
function saveTodos() {
    const todoSting = JSON.stringify(todoArr)
    localStorage.setItem('myTodos', todoSting)
}

// 로컬스토리지에서 가져오기
function loadTodos() {
    const myTodos = localStorage.getItem('myTodos')
    todoArr = myTodos !== null ? JSON.parse(myTodos) : todoArr
    displayTodos()
}

// 할일 입력 후 제출하면 발생하는 이벤트 핸들링
todoForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const toBeAdded = {
        //할 일의 내용
        todoText: todoForm.todo.value,
        //할 날짜
        todoId: new Date().getTime(),
        //달성여부
        todoDone: false
    }
    todoForm.todo.value = ""
    todoArr.push(toBeAdded)
    displayTodos()
    saveTodos()
})

loadTodos() // 시작할 때 한번만!