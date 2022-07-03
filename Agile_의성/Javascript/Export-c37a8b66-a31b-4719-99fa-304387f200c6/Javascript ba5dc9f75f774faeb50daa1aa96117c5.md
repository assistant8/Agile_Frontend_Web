# Javascript

경고창 띄울 함수 alert()

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
    
    ![Untitled](Javascript%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled.png)
    
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
    
    ![Untitled](Javascript%20ba5dc9f75f774faeb50daa1aa96117c5/Untitled%201.png)
    
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
    - alert() : 창으로 알려준다
    - prompt : 입력받을때 사용
    -