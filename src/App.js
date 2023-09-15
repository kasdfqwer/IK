import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
/* import UserPage from './page/UserPage'; */
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

/* 
1. 전체상품 페이지 / 로그인 / 상세페이지 -src 폴더에 페이지 폴더 생성해서 작업할 페이지 생성
app.js에서 routes로 각 페이지 연결
1-1 네비게이션바 컴포넌트
- app.js에서 import해서 연결함
- 네비게이션바에서 
1) 로그인영역
2) 로고영역
3) 네비게이션 영역 -> 부트스트랩에서 navbar 연결해볼 것 권장
----> localhost:3000을 기준으로 각각 페이지 연결 확인
----> localhost:3000/login
----> localhost:3000/user
----> localhost:3000/products
----> localhost:3000뒤에 붙는 경로는 app.js에서 route 속성의 paht에 선언된 경로
  
2. 전체상품페이지에서는 기본 상품 카드 진열
npm install -g json-server
새 터미널을 열어서 json server --watcch db.json --port 5000
포트 번호는 3000번만 아니면 됨.
서버 연결이 되면 resources 정보 확인
2-1 전체상품 페이지에서 진열될 각 상품은 컴포넌트로 productcard.js로 생성
----> 전체상품 페이지에서 불려진 db.json 파일의 필드값을 카드 페이지로 상속되게 함. --> distructuring (객체분할)
---> 전체 상품 페이지에 생성한 productCard 엘리먼트를 뿌려줌


3. 로그인 버튼을 클릭하면 로그인 페이지 나옴
--> 전체 상품 페이지에서 상품 카드를 클릭하면
   ->> 로그인상태가 true -> 상세페이지가 보이고 
   ->> 로그인상태가 false -> 로그인페이지 로드

3. 상품을 클릭했을 때 로그인 상태면 -> 상세페이지가 보이고 / 아니면 로그인 페이지가 보여짐
-- app.js 페이지에서 기본 로그인 상태를 false로 설정 --> useState(false)
--> PrivateRoute.js 페이지를 생성
  --> 로그인 상태가 true -> 디테일로 가고
  --> 로그인 상태가 false -> 로그인으로 가는 redirect 설정

4. 상품 상세 페이지 
-->useParam -> id를 받아서 해당 id에 할당된 정보를 출력

*/

function App() {
  const [authenticate, setAuthenticate] = useState(false); //로그아웃상태 기본값
  useEffect(()=> {
    console.log(authenticate)
  },[authenticate]) //화면이 바뀔 때마다 authenticate 값을 불러 체크함
  /* 
  useEffect()
  - 인자로 함수를 받음 -> 콜백함수
  - Mount --> 화면에 첫 렌더링
  - Update --> 다시 렌더링
  - UnMount --> 화면에서 사라짐
  1) useEffect( () => {}, [])
  -> 화면에 처음 렌더링될 대 실행 -> 빈배열값을 전달하면 화면에 첫 렌더링할 때만 실행
  2) useEffect( () => {}, [value])
  --> value의 값이 바뀔 때마다 실행
  */
  return (
    <Container>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
          <Route path='/' element={<ProductAll/>} />
          {/* <Route path='/product/:id' element={<ProductDetail/>} /> */}

          {/* privateRouote 설정 */}
          <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>} />
          <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate}/>} />
          {/* <Route path='/user' element={<UserPage/>} /> */}
      </Routes>
    </Container>
  );
}

export default App;
