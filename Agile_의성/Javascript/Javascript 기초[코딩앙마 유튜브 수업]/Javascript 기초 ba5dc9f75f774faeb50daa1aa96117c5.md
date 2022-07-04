# Javascript 기초

- 변수 선언
    
    ```jsx
    name = "Mike";
    age = 30;
    
    alert(name);
    console.log(age);
    ```
    
    근데 이렇게하면 약간 위험함
    
    ```jsx
    let name = "Mike";
    
    let name = "google";
    ```
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled.png)
    
    다른개발자가 이미 사용하고 있구나
    
    let grade = “F” ;
    
    grade = “a+”; 바꿀수 있다
    
    const : 절대로 바뀌지 않는 상수 
    
    - 바꾸면 에러가 남
    - 대문자로 사용하는게 좋음
    
    변수를 선언할때는 
    
    - 변하지 않는 값은 const
    - 변할 수 있는 값은 let으로 선언
    
    모든 변수를 const로 선언하고 나머지를 let으로 사용하는게 좋음
    
- 자료형 선언
    
    String
    
    ```jsx
    const name = "Mike";
    const age = 30;
    
    const name1 = "Mike"
    const name2 = "Mike"
    const name3 = "Mike"
    
    const message = "I'm a boy."
    const message2 = 'I\'m a boy.';
    
    const message3 = `My name is ${name}`;
    
    const message4 = `나는 ${30+1}살 입니다.`;
    console.log(name);
    console.log(age);
    console.log(message);
    console.log(message3);
    console.log(message4);
    ```
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%201.png)
    
    <aside>
    💡 ‘’와 ``는 다르다. string이 아닌 $가 들어간 것은 1 옆에있는 ``를 사용해야 출력이 잘 된다.
    
    </aside>
    
    - 숫자형
    - boolean형
    - null과 undefined
        
        ```jsx
        let age 
        console.log(age)
        
        >undefined
        
        let age = null;
        console.log(age);
        
        >null
        ```
        
    - typeof 연산자
        - 다른 개발자가 작성한 코드
        - api로 받아온 코드
        
        에서 타입을 받아올때 사용한다
        
        ```jsx
        const name = "Mike";
        
        console.log(typeof 3);
        console.log(typeof name);
        console.log(typeof true);
        console.log(typeof "xxx");
        
        ---
        number
        string
        boolean
        string
        ```
        
        숫자 + 문자열 = 문자열로 변환된다
        
- 대화상자(alert)
    - alert() : 창으로 알려준다, 메세지를 보여준다
    
    ```jsx
    const name = prompt("이름을 입력하세요","너의 이름은");
    alert(name)
    ```
    
    - prompt : 입력받을때 사용, 메세지를 보여준다, 두번째 인수 넣어주면 default값 준다
    
    ```jsx
    const name = prompt("이름을 입력하세요","너의 이름은");
    console.log(name);
    ```
    
    - confirm : 사용자에게 확인이나 취소 확인할때
    
    ```jsx
    const isAdult = confirm("당신은 성인입니까?");
    
    console.log(isAdult);
    ```
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%202.png)
    
    confirm과 다르게 확인과 취소가 뜨고 true false로 반환
    
    단점 
    
    1. 스크립트가 일시 정지 된다, 확인 누를때까지 정지된다
    2. 스타일링이 불가능하다
    
- 형변환 (Type Conversion)
    
    문자형과 문자형 = 문자형
    
    숫자 + 숫자 = 숫자
    
    자료형 다르면 의도치않은 동작 발생
    
    ```jsx
    const mathScore = prompt("수학 몇점?");
    const engScore = prompt("영어 몇점?");
    const result = (mathScore + engScore) / 2;
    
    console.log(result);
    
    90 80 입력했을때
    >>4540
    ```
    
    prompt입력 → 문자형이 된다 
    
    “9080” / 2 = 4540 
    
    자동 형변환이 되는데 이는 나중에 알기 힘들수가있기떄문에 
    
    명시적 형변환을 해야함
    
    ```jsx
    console.log(
    String(3),
    String(true),
    String(null),
    )
    
    "3" "true" "null"
    ```
    
    - console.log는 이렇게 ,를 찍어서 다양하게 출력이 가능
    - String으로 형변환 예시
    
    Number()
    
    ```jsx
    console.log(
    Number("1234"),
    Number("124adsf"),
    Number(true),
    Number(false))
    
    >1234 NaN 1 0
    ```
    
    - 문자를 숫자로 형변환할때 사용
    - 문자가 들어가면 NaN이 되니 주의
    - true나 false 는 1과 0으로 반환
    
    Boolean()
    
    ```jsx
    console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
    Boolean(1),
    Boolean("java"));
    
    >false false false false false true true
    ```
    
    - 적어놓은 것들 이외에는 다 true로 반환
    
    String() → 문자형으로 변환
    
    Number() → 숫자형으로 변환
    
    - Number(”문자”) →NaN이다
    - Number(null) → 0
    - Number(undefined) → NaN
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%203.png)
    
- 연산자 (Operators)
    
    % 
    
    - 홀수 , 짝수
    - 어떤값이 들어와도 5 이상 들어오면 안될때 %5
    
- 비교 연산자
    
    숫자형 문자형 비교했을떄 같게 나올때도 있대
    
    일치연산자
    
    - === 할때 type까지 비교한다
    - ==보단 ===를 사용하자
    
- 조건문
    
    
- 논리 연산자
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%204.png)
    
    And 나 or 일떄 앞에있는것만 읽어보고 조건이 맞지않으면 바로 넘어간다
    
    성능 최적화에 사용
    
- 반복문
    
    ```jsx
    for(let i =0;i<10;i++)
      {
        console.log(i);
      }
    
    const 말고 let을 사용한다
    ```
    
- 함수
    
    ```jsx
    function showError(){
      alert("에러가 발생");
    }
    
    showError();
    
    ```
    
    function 을 사용
    
    javascript는 되게 직관적이네
    
    ```jsx
    function sayHello(name){
      const msg= `Hello, ${name}`;
      console.log(msg);
    }
    
    sayHello('의성');
    ```
    
    ```jsx
    function sayHello(name = 'friend'){
    let msg = `Hello, ${name}`
    console.log(msg)
    }
    
    sayHello();
    sayHello('Jane');
    
    매개변수에 default값을 넣을 수 있다
    
    ```
    
    return 하는 함수
    
    ```jsx
    function add(num1,num2){
      return num1 + num2;
    }
    
    const result = add(2,3)
    console.log(result);
    
    int 이렇게 안적어줘도 되구나
    
    function showError(){
      alert('에러 발생');
      return;
      alert('이 코드는 실행이 안된다');
    }
    const result = showError();
    console.log(result);
    
    return; 하면 함수가 바로 종료된다
    
    ```
    
    함수는 한번에 한작업에 집중
    
- 함수 표현식
    
    함수선언문 : 어디서든 호출 가능 
    
    - 아래로 내려가면서 읽는 언어인 인터프리터이다
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%205.png)
    
    어떻게 코드가 실행될수 있었을까?
    
    - 호이스팅
    
    초기 모든 함수 선언문 찾아서 모임을만든다
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%206.png)
    
    함수 표현식은 코드에 도달하면 생성이 된다 
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%207.png)
    
    뭐가 더 좋을까?
    
    함수 선언문 쓰는게 더 자유롭다
    
    화살표 함수
    
    ```jsx
    //함수 표현식
    showError();
    
    let showError = function(){
      console.log('error');
    }
    
    함수 표현식이기 때문에 실행이 안됨
    
    //함수 선언문
    showError();
    
    function showError(){
      console.log('error');
    }
    
    //화살표 함수
    let showError = () =>{
      console.log('error');
    }
    
    showError();
    ```
    
    ```jsx
    const sayHello = function(name){
      const msg = `Hello, ${name}`;
      console.log(msg);
    };
    
    sayHello("euisung");
    
    //화살표함수
    const sayHello = (name) => {
      const msg = `Hello, ${name}`;
      console.log(msg);
    };
    
    sayHello("euisung");
    
    //function을 지우고 매개변수 뒤에 화살표를 그려주면 끝 
    ```
    
    ```jsx
    const add = function(num1,num2){
      const result = num1 +num2 ;
      return result;
    };
    
    console.log(add(1,2));
    
    const add = (num1,num2) =>{
      return result = num1 +num2 ;
    };
    
    console.log(add(1,2));
    
    const add = (num1,num2) =>(num1 +num2) ;
    console.log(add(1,2));
    
    ```
    
- 객체
    
    ```jsx
    const superman = {
       name : 'clark',
       age : 30,
    }
    
    console.log(superman.name)
    console.log(superman['age'])
    
    .으로 접근하거나 ['']로 접근한다
    
    console.log(superman)
    
    ```
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%208.png)
    
    ```jsx
    //추가
    
    const superman = {
       name : 'clark',
       age : 30,
    }
    
    superman.hairColor = 'black';
    superman['hobby'] = 'football';
    console.log(superman)
    
    //제거
    delete superman.age;
    console.log(superman);
    
    ```
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%209.png)
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%2010.png)
    
    - 객체 함수로 만들기
    
    ```jsx
    객체 함수로 만들기
    
    function makeObject(name,age){
      return {
        name : name,
        age : age,
        hobby : 'football'
      }
    }
    
    const Mike = makeObject('Mike',30);
    console.log(Mike);
    ```
    
    - in 함수
    
    ```jsx
    function makeObject(name,age){
      return {
        name,
        age,
        hobby : 'football'
      }
    }
    
    const Mike = makeObject('Mike',30);
    console.log(Mike);
    
    console.log('age' in Mike);
    console.log('birthday' in Mike);
    
    >true
    >false
    ```
    
    ```jsx
    function isAdult(user){
      if(user.age < 20){
        return false;
      }
        return true;
    }
    
    const Mike = {
      name : 'Mike',
      age : 30
    };
    
    const Jane = {
      name : "Jane"
    };
    
    console.log(isAdult(Mike))
    console.log(isAdult(Jane))
    
    >>true
    >>true
    
    이러면 age가 없는데도 둘다 true가 나옴, 여기서 in을 사용
    
    function isAdult(user){
      if(!('age' in user) || user.age < 20){
        return false;
      }
        return true;
    }
    
    const Mike = {
      name : 'Mike',
      age : 30
    };
    
    const Jane = {
      name : "Jane"
    };
    
    console.log(isAdult(Mike))
    console.log(isAdult(Jane))
    
    >>false
    >>true
    ```
    
    ```jsx
    const Mike = {
      name : 'Mike',
      age : 30
    };
    
    const Jane = {
      name : "Jane"
    };
    
    for(key in Mike){ 
      console.log(Mike[key])
    }
    
    "Mike"
    30
    ```
    
- 객체 method
    
    ![Untitled](Javascript%20%E1%84%80%E1%85%B5%E1%84%8E%E1%85%A9%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%2011.png)
    
    this 사용해서 객체 받는다
    
    - 하지만 화살표 함수는 일반 함수와는 달리 자신만의 this를 갖지 않는다
    - 내부에서 this를 사용하면 외부에서 가져온다
    
    ```jsx
    let boy = {
      name: "Mike",
      showName : function(){
        console.log(boy.name)
      }
    };
    
    boy.showName();
    
    let man = boy;
    man.name = "Tom"
    
    console.log(boy.name);
    
    자바스크립트는 다른 언어와 다르게 boy가 바뀌네..??
    ```
    
    ```jsx
    let boy = {
      name: "Mike",
      showName : function(){
        console.log(boy.name)
      }
    };
    
    boy.showName();
    
    let man = boy;
    man.name = "Tom"
    man.showName();
    boy = null;
    console.log(man)
    console.log(man.name)
    console.log(man.showName())
    // man.showName();
    // man.name;
    
    이러면 man의 name만 남고 나머지 다 사라진다 이떄
    
    let boy = {
      name: "Mike",
      showName : function(){
        console.log(this.name)
      }
    };
    
    boy.showName();
    
    let man = boy;
    man.name = "Tom"
    man.showName();
    boy = null;
    console.log(man)
    console.log(man.name)
    console.log(man.showName())
    // man.showName();
    // man.name;
    
    this로 바꿔주면 된다.
    
    ```
    
    객체 만들때
    
    - this를 사용하고
    - 화살표 메소드는 사용하지말자
- 배열
    
    ```jsx
    let days = ["mon","tue","wed"];
    days[1]='화요일'
    
    days.push('thus');
    days.unshift("sun");
    console.log(days)
    
    ["sun","mon","화요일","wed","thus"]
    
    //shift 와 unshift는 첫번째 배열요소 접근
    ```
    
    ```jsx
    for(let index = 0; index<days.length; index++)
    {
    console.log(days[index]);
    }
    
    for(let day of days)
    {
    console.log(day);
    }
    ```
    
    - of를 사용