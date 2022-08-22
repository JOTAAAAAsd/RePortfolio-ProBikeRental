import React, { useState } from "react";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

// Icons
import { TbReportMoney } from "react-icons/tb";
import { GrBike } from "react-icons/gr";
import { calculatePrice } from "../../HELPERS/calculatePrice";

// Routing
import { Link } from "react-router-dom";



const CardData = (props) => {

    // console.log(props); 

    const { data, dispatch, action_resetData } = props;

    // console.log(data);

    const [useRentBy, setRentBy] = useState(0);
    const [usePriceTotalRent, setPriceTotalRent] = useState(10);

    const onChangeRentBy = (e) => {
        setRentBy(Number.parseInt(e.target.value));
    }


    const onResetData = () => {
        dispatch(action_resetData());
    }

    return (

        <Card className="h-100 card_item_content">

            <Card.Header>
                <h5 style={{ color: "#e77c59", borderRadius: "25px", background: "#25121f" }}><GrBike /> {data.bike_type}</h5>
            </Card.Header>

            <Image className=" h-100 card_img_item" fluid={true} thumbnail={true} src={data.image_bike} alt={data.name_bike} />

            <Card.Body>
                <Card.Title style={{color:"#9796ab"}}>{data.name_bike}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>

                <Form.Label  style={{color:"#9796ab"}}><b>Rent by</b> {useRentBy} {useRentBy <= 1 ? "day" : "days"}
                    <Form.Range name="useRentBy" onChange={onChangeRentBy} value={useRentBy} onClick={() => calculatePrice(useRentBy, setPriceTotalRent, data)} />
                </Form.Label>

                {useRentBy <= 0 ? null : <>

                    <div className="mb-3" style={{color:"#1bb76e"}}>
                        <TbReportMoney style={{ fontSize: "2em" }} /> ${usePriceTotalRent},00 USD
                    </div>

                    <Link to={`/complete-rent/${data.id}`} style={{ textDecoration: "none" }}>
                        <div className="d-grid gap-2">
                            <Button className="btn1" onMouseDown={(e) => e.preventDefault()} onClick={onResetData}>
                                Ready?
                            </Button>{' '}
                        </div>
                    </Link>

                </>
                }

            </Card.Body>

        </Card>

    );

}


export default CardData;