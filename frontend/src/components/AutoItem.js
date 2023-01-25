import React from 'react';
import { Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { AUTO_ROUTE } from '../utils/consts';

const AutoItem = ({auto}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(AUTO_ROUTE + '/' + auto.id)}>
           <Card style={{width: 150, cursor: 'pointer'}} border={"secondary"}>
               <Image width={140} height={140} src={process.env.REACT_APP_API_URL + auto.img}/>
               <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    
               </div>
               <div>{auto.name}</div>

           </Card>
        </Col>
    );
};

export default AutoItem;