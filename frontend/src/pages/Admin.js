import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateMark from '../components/modals/CreateMark';
import CreateAuto from '../components/modals/CreateAuto';

const Admin = () => {
  const [markVisible, setMarkVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [autoVisible, setAutoVisible] = useState(false)
  return (
    <Container className="d-flex flex-column">
       <Button variant={"danger"} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Добавить тип кузова</Button>
       <Button variant={"danger"} className="mt-4 p-2" onClick={() => setMarkVisible(true)}>Добавить марку автомобиля</Button>
       <Button variant={"danger"} className="mt-4 p-2" onClick={() => setAutoVisible(true)}>Добавить автомобиль</Button>
    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
    <CreateMark show={markVisible} onHide={() => setMarkVisible(false)}/>
    <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)}/>
    </Container>
  );
};

export default Admin;