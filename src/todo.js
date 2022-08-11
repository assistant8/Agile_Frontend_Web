import {useState, useEffect} from "react";


function App() {
  const [toDo, setToDo] = useState(""); 
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value) //input 바뀔 때 todo 값 설정
  const onSubmit = (event) => { //엔터 누르면
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); //todo 어레이에 curr 추가
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange} //input의 기본 절차
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr /> 
      <ul>
        {toDos.map((item, index) => (  //todos 어레이에서 각 값을 item으로 꺼내와 list에 담기(변환) 이후 각 key값을 index로 주어 콘솔 오류를 없앰
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
