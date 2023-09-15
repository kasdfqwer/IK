import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'; //라이브러리 안에 있는 함수 

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        let url = 'http://localhost:5000/products/'
        //getProducts 함수를 통해서 API를 호출할 때에 쿼리가 있는 값을 넣어줌
        let searchQuery = query.get('q')||"" //사용자가 입력한 쿼리문이 있으면 q를 넣어주고 아니면 null 값

        //로컬에 설치된 json-server로 데이터를 불러와서 보여주는 주소
        //let url = `http://localhost:5000/products?q=${searchQuery}`

        //my json-server에서 자료를 가져오기
        //let url = `https://my-json-server.typicode.com/kasdfqwer/IK/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        setProductList(data)


    /* 
    usestate[] (2개 이상의 데이터 값 전제, 배열) productList 초기값 []
    data.json 파일 넘기기
    
    */
  }
// 데이터를 갖고오는 작업


  useEffect(() => {
    getProducts();
  }, [query]) /* [] 빈 배열값을 넣어줄 때 한 번만 실행함 */

  /* useState 없는 배열에 값이 생기는 작업, 상태가 변함
    useEffect 상태가 변한 걸 페이지 로드
    useEffect( 괄호 안의 함수가 실행 ) 콜백함수와 같이 씀(괄호 안의 다른 함수가 실행됨)
  */

    //데이터를 뿌려주는 작업
  return (
    <Container>
      <Row>
        {
            productList.map((menu, idx) => (
                <Col lg={3} key={idx}>
                    <ProductCard item={menu} />
                </Col>
            ))
        }
        {/* 한 개씩 출력(map) , menu - 임의의 인자값 배열 각각의 값, productcard에 출력 props를 통해 item={menu} */}
      </Row>
    </Container>

  )
}

export default ProductAll
