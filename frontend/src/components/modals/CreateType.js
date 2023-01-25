import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { createType } from '../../https/autoApi';

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data => {
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
          Добавить тип кузова
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder={"Название типа"}
            />

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Добавить</Button>
        <Button variant="outline-secondary" onClick={addType}>Закрыть</Button>
      </Modal.Footer>
    </Modal>

    );
};

export default CreateType;