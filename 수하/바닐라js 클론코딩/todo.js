const todoForm = document.querySelector("#todo-form") //입력&생략된 버튼 가진 폼
const todoInput = todoForm.querySelector("input") //투두폼에서 입력칸
// = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list") //입력받은 투두리스트

//새로고침 할 때 마다 todo 로컬이 초기화 되는건 이처럼 todo array가 빈값으로 초기화 되도로 해놔서.
let todos = [];

const tdkey = "todos"

function saveTodo() {
    localStorage.setItem(tdkey, JSON.stringify(todos))
}


function todoHandler(event) {
    event.preventDefault();
    const newTodo = todoInput.value; //입력받은 걸 newtodo에 넣어놓고
    todoInput.value = ""; //인풋 칸은 비워야지
    const newTodoObj = { //todo를 string으로 주는게 아닌 id까지 해서 obj로 줌
        text : newTodo,
        id : Date.now(),
    }
    todos.push(newTodoObj) //새 할일 array에 저장
    paintList(newTodoObj); //새 할일 넘겨줘서 리스트에 표시
    saveTodo() //새 할일 array에 다 업뎃 되었으니 그걸 로컬에 저장
}

function paintList(newTodo) { //obj로 받음
    const li = document.createElement("li") //만들고 변수 li에 저장하겠단 마인드
    const span = document.createElement("span")
    const button = document.createElement("button")
    li.id = newTodo.id;
    li.appendChild(span); //html에서 자기 하위(들여쓰기)로 놓겠다
    li.appendChild(button);
    span.innerText = newTodo.text; 
    button.innerText = "X";
    button.addEventListener("click", deleteTodo); //이벤트 리스너만 달아놓는 거니까 여기놔도 될듯
    todoList.appendChild(li); //ul 안에 현재 추가한 li 넣겠다    
}

function deleteTodo(event) {
    // console.dir(event.target.parentNode.innerText) 
    // target은 클릭된 html ele (버튼)
    // 클릭된 ele의 부모 (li)
    const li = event.target.parentNode;
    li.remove(); //html 상에서만 지워짐, 로컬에선 안지워짐

    //console.log(typeof li.id) 가 string 이므로
    //맨위 todo 어레이를 업뎃하는 것
    //누른 정보는 li에서 받아왔고 그 id랑 어레이 id랑 같은거 제외하고 새 어레이 만듦 
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    saveTodo(); //todo 어레이를 로컬에 업뎃
}


todoForm.addEventListener("submit", todoHandler); //todo에 입력 후 엔터 시 (엔터=submit 됨)

const savedTodos = localStorage.getItem(tdkey); //로컬에서 가져옴

if(savedTodos!==null) { //로컬에 뭔가 있으면
    const parsedTodos = JSON.parse(savedTodos) //스트링->어레이
    todos = parsedTodos; //이전 로컬에 있던걸 todo array에 업뎃, 안그럼 계속 덮어씌워짐
    parsedTodos.forEach(paintList) //foreach는 어레이의 각 item에 대해 func 실행하게 함
    
}