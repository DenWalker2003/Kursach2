import React, { useContext, useState, useEffect } from 'react';
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { Context } from '../../index';
import {createAuto, fetchMarks, fetchAutos, fetchTypes} from "../../https/autoApi";
import {observer} from "mobx-react-lite";

const CreateAuto = observer(({show, onHide}) => {
  const {auto} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
      fetchTypes().then(data => auto.setTypes(data))
      fetchMarks().then(data => auto.setMarks(data))
  }, [])


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
      setFile(e.target.files[0])
  }
  
  const addAuto = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('MarkId', auto.selectedMark.id)
    formData.append('typeId', auto.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createAuto(formData).then(data => onHide())
}

    return (
        <Modal
      show={show}
      onHide={onHide}  
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить автомобиль
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{auto.selectedType.name || "Выберите тип кузова"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {auto.types.map(type =>
                        <Dropdown.Item onClick={() => 
                        auto.setSelectedType(type)}
                        key={type.id}
                        >{type.name}
                        </Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{auto.selectedMark.name || "Выберите марку автомобиля"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {auto.marks.map(mark =>
                        <Dropdown.Item onClick={() => auto.setSelectedMark(mark)}
                        key={mark.id}
                        >{mark.name}
                        </Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                 value={name}
                 onChange={e => setName(e.target.value)}
                 className="mt-3"
                 placeholder="Модель автомобиля"
            />
            <Form.Control
                 value={price}
                 onChange={e => setPrice(Number(e.target.value))}
                 className="mt-3"
                 placeholder="Стоимость автомобиля"
                 type="number"
            />
            <Form.Control
                 className="mt-3"
                 type="file"
                 onChange={selectFile}
            />
            <hr/>
            <Button variant={"secondary"} onClick={addInfo}>Добавить характеристику</Button>
            {info.map(i =>
                <Row className="mt-4" key={i.number}>
                    <Col md={4}>
                        <Form.Control
                          value={i.title}
                          onChange={(e) => changeInfo('title', e.target.value, i.number)}
                          placeholder="Введите название характеристики"
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control
                          value={i.description}
                          onChange={(e) => changeInfo('description', e.target.value, i.number)}
                          placeholder="Введите описание характеристики"
                        />
                    </Col>
                    <Col md={4}>
                        <Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>Удалить</Button>
                    </Col>
                </Row>                             
            )}                
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Добавить</Button>
        <Button variant="outline-secondary" onClick={addAuto}>Закрыть</Button>
      </Modal.Footer>
    </Modal>

    );
});

export default CreateAuto;