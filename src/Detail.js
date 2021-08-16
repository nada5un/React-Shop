import React,{useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss'

//클래스명 없이 사용가능 
let Box = styled.div`
  padding:20px;
`;

let Title = styled.h4`
  font-size:25px;
  color: ${props =>props.색상}
`;

function Detail(props){
  let history = useHistory();
  let [alert,alertSet] = useState(true);
  let [input,inputSet] = useState('');
  let {idx} = useParams();
  
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alertSet(false)},2000);

    //컴포넌트 사라질때 실행 
    return ()=>{clearTimeout(타이머)};
    // return function f(){}
    //alert 변경 될때만 실행 
  },[]);

  
  const data = props.shoesData;

  let 찾은상품 = data.find(function(d){
    return d.id == idx
  })
  
    return (
      <div className="container">
        <Box>
          <Title>Detail</Title>
        </Box>

        {
          alert?<Alert></Alert>:null
        }
        
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} alt="" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-primary" onClick={()=>{history.goBack();}}>뒤로가기</button> 
          </div>
        </div>
      </div> 
      
    )
  }

  function Alert(){
    return (
      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>
    )
  }

export default Detail;