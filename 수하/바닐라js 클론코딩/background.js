const images = [
    "1.jpg", "2.jpg", "3.jpg"
]

//이전까지와 달리 js에서 이미지를 만든다음 이걸 html에 추가

const chosenImg = images[Math.floor(Math.random()*images.length)]

//쿼리 이런게 아닌 아마 html에 img를 만드는 함수인듯
const bgImg = document.createElement("img"); 
bgImg.src = `img/${chosenImg}`; //img 폴더안에 ~ 의미
document.body.appendChild(bgImg); //body의 가장 아래에 덧붙인다는 의미