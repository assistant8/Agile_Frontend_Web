// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("#login-form button")


// function loginClickHandler() {
//     console.log(loginInput.value);
// }

// loginButton.addEventListener("click", loginClickHandler)



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");


function loginSubmitHandler(event) { //js가 제공하는 이벤트 관한 정보
    event.preventDefault(); //브라우저가 디폴트로 하는 기본동작(새로고침) 막기 위함
    const username = loginInput.value;
    loginForm.classList.add("hidden"); //html에서 로그인 form에 hidden class 추가시킴
    greeting.innerText = `hello ${username}` //"hello" + username 와 동일
    greeting.classList.remove("hidden");
    localStorage.setItem("username", username); //유저가 친 이름 저장해놓음
}

function handleLinkClick(event) {
    event.preventDefault(); //브라우저 기본인 링크 클릭 시 딴 페이지로 넘어가는거 막음
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem("username")

if(savedUsername===null) { //이전 유저네임 정보없으면 로그인폼 보여주고 로컬에 저장해야지
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginSubmitHandler);
} else { //유저네임 정보 있으면 h1 보여줘야지
    greeting.innerText = `hello ${savedUsername}`;
    greeting.classList.remove("hidden");
}
    
