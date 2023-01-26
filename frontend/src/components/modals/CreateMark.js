import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { createMark } from '../../https/autoApi';

const CreateMark = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addMark = () => {
    createMark({name: value}).then(data => {
      setValue('')
      onHide()
  })
  }
    return (
        <Modal
      show={show}
      onHide={onHide}  
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить марку автомобиля
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
              value={value}
              onChange={e => setValue(e.target.value)}
               placeholder={"Название марки"}
            />

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-danger" onClick={addMark}>Добавить</Button>
      </Modal.Footer>
    </Modal>

    );
};

export default CreateMark;
