sayS()


//함수선언문 - 어디든 호출 가능
function sayS() {
    console.log("SS")
}

//js는 변수에 함수를 할당 가능
//함수표현식 - 함수 생성(초기화) 아래서만 호출 가능
const sayP = function () {
    console.log("PP")
}

//화살표함수 - 표현식과 호이스팅 동일 = function을 안씀
const sayH = () => {
    console.log("HH")
}


sayS()

sayP()

sayH()