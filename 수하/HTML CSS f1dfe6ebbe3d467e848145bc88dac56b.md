# HTML CSS

[https://yunbinni.tistory.com/63](https://yunbinni.tistory.com/63)

- <!DOCTYPE html> 웹 문서의 유형을 html로 지정
- <html lang="ko"> 문서를 html로 시작, 언어를 한국어로 지정
- <head>
    - <meta charset="UTF-8">
    <title>Document</title>
- <body>문서 내용을 입력

문서 구조 태그

<header> 맨 위

<main>

<section> 콘텐츠 영역

<aside> 사이드바

<footer> 맨 아래

<nav> 네비 바

<article> 독립 콘텐츠

<div> 여러 소스 묶기

내용입력

<h1>, <h2>

<p>

<br>

<blockquote>

<strong>

<ol>
<li>항목 1</li>
<li>항목 2</li>
</ol>

= 순서있는 목록 ordered

type = “1” 숫자

<ul>은 unordered

<table>
<tr>
<td>1행 1열</td>
<td>1행 2열</td>
</tr>
<tr>
<td>2행 1열</td>
<td>2행 2열</td>
</tr>
</table>

<img src="이미지 파일 경로" alt="대체용 텍스트">

width= height=

<a href="링크할 주소">텍스트 또는 이미지</a>

<p><a href="~">표시 텍스트</a></p>

# **css 선택자 종류**

[https://youtu.be/cb7VlXqFla4](https://youtu.be/cb7VlXqFla4)

![Untitled](HTML%20CSS%20f1dfe6ebbe3d467e848145bc88dac56b/Untitled.png)

전체 선택자 - 모두

*{margin :0 ; text-decoration:none;}

태그 선택자 - 이 태그 가진 모든 어트리뷰트에 적용

p {background : yellowgreen;}

클래스 선택자 - 어트리뷰트에 클래스이름 붙이면 다 적용

.class1 {back~}

- <p class = “class1”> i am red </p>

id 선택자 - id는 어트마다 하나로 유일해야함 - 한 어트만 적용되겠지

#id1 {background = }

- <p id=”id1”> i am red </p>

하위 선택자 - a 어트 아래 있는 모든 b에게 적용

tb td {border:1px;}

- 

<table>
<thead class="tb-head">
<tr>
<td>이름</td>

자식 전택자 - 하위와 달리 모든 하위 경로 명시해줘야

tb-body >tr >td {border;}