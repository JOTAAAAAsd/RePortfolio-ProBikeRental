import React, { useEffect } from "react";

// Bootstrap
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

// Components
import CardData from "./CardData";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { action_getData, action_resetData } from "../../REDUX/actions";


const List = () => {
 
    // REDUX
    const dispatch = useDispatch();
    const { get_data } = useSelector(state => state.state_data);


    useEffect(() => {
 
        var data_bike_storage = JSON.parse(localStorage.getItem('data_bike_storage'));
 
        if (data_bike_storage) {
            localStorage.removeItem("data_bike_storage");
        }

        fetch("/data_bikes.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            dispatch(action_getData(data));

        });

    }, [dispatch]);
 
    return (

        <>

            {/* Data bikes */}
            <Col md={8} className="mx-auto mb-5">

                <Card className="card_style_container">

                    <Card.Header className="text-center card_style_header_main">
                        <h2>Rental your bike right now! </h2>
                    </Card.Header>

                    <Card.Body>

                        <Row>

                            {
                                get_data.map((e, i) => (
                                    <Col md={4} key={i} className="mb-3">
                                        <CardData data={e} dispatch={dispatch} action_resetData={action_resetData} />

                                    </Col>
                                ))
                            }

                        </Row>

                    </Card.Body>
                </Card>

            </Col>

        </>
    );

}

export default List;