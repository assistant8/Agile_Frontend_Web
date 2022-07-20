# JavaScript 중급편

[자바스크립트 중급 강좌 : 140분 완성](https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=56)

- 변수
    
    var, let ,const 호이스팅이 다 된다.
    
    Temporal Dead Zone, 할당을 하기전에 사용할 수 없다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%20f0479bd6f24445428b11ef39f5d97f7a/Untitled.png)
    
    - 선언과 초기화 전에 사용할 수 없는게 TDZ이다.
    
    1. 선언
    2. 초기화
    3. 할당
    
    let은 선언과 초기화 단계 분리
    
    const 선언+초기화 + 할당 한번에
    
     var는 함수 스코프
    
    let과 const는 블록 스코프( 블록 외에선 사용 불가)
    
- 생성자 함수
    
    비슷한 객체 여러개 만들때 생성자 함수 사용한다
    
    ```kotlin
    function Item(title,price){
        
        this.title = title;
        this.price = price;
        this.showPrice = function(){
            console.log(`가격은 ${price}`);
    
        }
    
    }
    
    const item1 = new Item('인형', 3000);
    const item2 = Item('가방', 4000);
    const item3 = new Item('지갑', 9000);
    
    console.log(item1,item2,item3);
    item3.showPrice();
    ```
    
    - new를 쓰고
    - 대문자로 생성한다
    
- 객체 메소드
    - Computed Property
    - Object 메소드
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%20f0479bd6f24445428b11ef39f5d97f7a/Untitled%201.png)
    
    - 객체를 생성할때 [a]를 통해서 값을 직접 넣어줄 수 있다.
        - Computed Property
        
        ```jsx
        let n = "name";
        let a = "age";
        
        const user = {
          [n] : "Mike",
          [a] : 25,
          [1+4] : 5,
        };
        
        console.log(user);
        
        려
        ```
        
    
    ```jsx
    function makeObj(key, val){
      return {
        [key] : val,
      };
    }
    
    const obj = makeObj("성별", "male")
    
    console.log(obj);
    ```
    
    <aside>
    💡 이렇게 조금더 유용하게 객체에 []를 사용하여 집어 넣을 수 있다
    
    </aside>
    
    - 객체 복사 (Object.assign)
        
        newUser = user; 하면 참조값을 복사하기 때문에 제대로 복사하려면 이 메소드 사용
        
        Object.assign
        
    
    ```jsx
    const user= {
      name : "Mike",
      age : 30
    }
    
    const newUser = Object.assign({},user);
    console.log(newUser);
    
    //Object.assign을 통하여 객체 복사
    ```
    
    newUser = user;
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%20f0479bd6f24445428b11ef39f5d97f7a/Untitled%202.png)
    
    ```jsx
    const user= {
      name : "Mike",
      age : 30
    }
    
    // Object.keys(user); 
    // Object.values(user);
    console.log(Object.keys(user))
    console.log(Object.values(user))
    
    >>
    // [object Array] (2)
    ["name","age"]
    // [object Array] (2)
    ["Mike",30]
    ```
    
    - Object.keys(user)
    - Object.values(user)
    
- Symbol
    
    자료형
    
    [https://www.notion.so](https://www.notion.so)
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%20f0479bd6f24445428b11ef39f5d97f7a/Untitled%203.png)
    
    - 유일한 값이고 Object.keys() 객체 메소드를 사용했을떄 건너뛴다
    - 원본 데이터는 건드리지 않고 자신만의 key를 추가할수있다
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%20f0479bd6f24445428b11ef39f5d97f7a/Untitled%204.png)
    
    하지만 기존의 key를 바꾸면 안됨 !
    
    - 유일한 property를 추가하고 싶을때 symbol을 사용하자 !
    
    ```jsx
    //다른 개발자가 만들어 놓은 객체
    const user =  {
      name : "Mike",
      age : 30,
    };
    
    //내가 작업
    // user["showName"] = function(){
    //   console.log(this.name);
    // };
    
    const showName = Symbol("show name");
    user[showName] = function(){
        console.log(this.name);
    };
    
    for(let key in user)
      {
        console.log(`His ${key} is ${user[key]}.`);
      }
    ```
    
    다른 개발자가 만들어 놓은 객체를 해치지 않으면서 자신만의 유일한 property를 추가할수있음
    
- Number, math
    
    ![Untitled](JavaScript%20%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%B3%E1%86%B8%E1%84%91%E1%85%A7%E1%86%AB%20f0479bd6f24445428b11ef39f5d97f7a/Untitled%205.png)
    
    - toFixed 하면 String이 되므로 Number로 다시 변환해줘야함
    
    isNan
    
    parseInt()
    
    등등 쇼핑몰이나 계산같은것 할떄 도움이 된다