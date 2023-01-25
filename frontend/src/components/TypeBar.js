import React, { useContext } from 'react';
import {Context} from "../index";
import ListGroup from 'react-bootstrap/ListGroup';
import {observer} from "mobx-react-lite";

const TypeBar = observer(() => {
    const {auto} = useContext(Context) 
    return (
        <ListGroup>
            {auto.types.map(type =>
               <ListGroup.Item action variant="secondary" 
                    style={{cursor: 'pointer'}}
                    active= {type.id === auto.selectedType.id}
                    onClick={() => auto.setSelectedType(type)}
                    key={type.id}
                > 
                    {type.name}
                </ListGroup.Item>               
            )}
        </ListGroup>
    );
});

export default TypeBar;