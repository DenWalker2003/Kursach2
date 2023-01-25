import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import MarkBar from "../components/MarkBar";
import AutoList from "../components/AutoList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchMarks, fetchAutos, fetchTypes} from "../https/autoApi";
import Pages from "../components/Pages";



const Shop = observer(() => {
    const {auto} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => auto.setTypes(data))
        fetchMarks().then(data => auto.setMarks(data))
        fetchAutos(null, null, 1, 2).then(data => {
            auto.setAutos(data.rows)
            auto.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchAutos(auto.selectedType.id, auto.selectedMark.id, auto.page, 2).then(data => {
            auto.setAutos(data.rows)
            auto.setTotalCount(data.count)
        })
    }, [auto.page, auto.selectedType, auto.selectedMark,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <MarkBar/>
                    <AutoList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
