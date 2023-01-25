import React, { useContext } from 'react';
import { Row } from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { Context } from "../index";
import AutoItem from "./AutoItem";

const AutoList = observer(() => {
    const {auto} = useContext(Context)
    return (
        <Row className= "d-flex">
           {auto.autos.map (auto =>
              <AutoItem key={auto.id} auto={auto}/>

            )}              
        </Row>
    );
});

export default AutoList;