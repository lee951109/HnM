# 💃🏻 H&M

> 리액트 & json-server를 공부하면서 만들어본 H&M !!

## 📌 Json-server

- 설치 <br/>
  `npm i json-server`

- 시작 <br/>
  - root 경로에 `db.json` 파일을 만들어준다.
  - db.json 파일안에 json형태로 데이터를 만들어준다.
  - `json-server --watch db.json --port 5000` 를 통해 서버를 실행한다. <br/>
  - 주의!! json-server 포트와 개발서버(localhost) 포트와 같으면 안된다.

<br/><br/>

![H&M](https://user-images.githubusercontent.com/71690561/178652006-7c0eb532-67a0-41d7-8409-e79d40ea76fc.png)

<br/> <br/>

## 📌 Middleware

> 리덕스에서 미들웨어는 주로 비동기 작업을 처리 할 때 사용한다.<br>
> 리듀서에서 발생한 예외를 서버로 전송하는 등의 목적으로 미들웨어를 사용 할 수 있다.<br>
> 미들웨어는 리듀서가 액션을 처리하기 전에 실행되는 함수로 액션과 리듀서 사이의 중간자라고 볼 수 있다.
