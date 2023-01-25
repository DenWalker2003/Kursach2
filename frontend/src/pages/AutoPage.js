import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom' 
import { fetchOneAuto } from '../https/autoApi';

const AutoPage = () => {
  const [auto, setAuto] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneAuto(id).then(data => setAuto(data))

  }, [])
  return (  
    <Container className="mt-3">
      <Row>
       <Col md={4}>
           <Image width={300} height={300} src={process.env.REACT_APP_API_URL + auto.img} />
           <h2>{auto.name}</h2>
       </Col>
       <Col md={4}>
        <Card
         className="d-flex flex-column align-items-center justify-content-around"
         style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
        >
          <h3>От: {auto.price} руб.</h3>
          <Button variant={"outline-dark"}>В избранное</Button>
        </Card>
       </Col>
       </Row>
       <Row className="d-flex flex-column m-3">
           <h1>Характеристики</h1>
         {auto.info.map((info, index )=>
             <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding: 10}}>
                      {info.title}: {info.description}
              </Row>

         )}
       </Row>
    </Container>
  );
};

export default AutoPage;