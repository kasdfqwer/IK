import '../App.css';
import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([null]);
    const getProductsDetail = async() => {

        //let url = `http://localhost:5000/products/${id}`
        let url = `https://my-json-server.typicode.com/kasdfqwer/IK/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        setProduct(data)


    /* 
    usestate[] (2개 이상의 데이터 값 전제, 배열) productList 초기값 []
    data.json 파일 넘기기
    
    */
  }
// 데이터를 갖고오는 작업


  useEffect(() => {
    getProductsDetail();
  }, []) 
  return (
    <>
      <Row className='product-detail'>
        <Col className='productDetail-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col className='detail-info'>
          <div className="new">{product?.new === true? '[신상품]':''}</div>
          <div className="choice">{product?.choice === true? 'Conscious Choice':''}</div>
          <div className="title">{product?.title}</div>
          <div className="price">{product?.price}</div>
          <div className="content">{product?.content}</div>

          <Form.Select>
            <option>Color</option>
            <option value="1">black</option>
            <option value="2">white</option>
            <option value="3">silver</option>
          </Form.Select>
          <Button variant="dark">구매하기</Button>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetail
