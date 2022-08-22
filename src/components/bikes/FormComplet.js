
import React, { useState, useEffect } from "react";

// Bootstrap
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// Icons
import { CgNametag } from "react-icons/cg";
import { BiBarcodeReader } from "react-icons/bi";
import { MdAlternateEmail, MdNearbyError } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

// External File
import { calculatePrice } from "../../HELPERS/calculatePrice";

// Components
import { ModalConfirm } from "../UI/Modal";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { action_showAlert, action_hideAlert, action_inputValues } from "../../REDUX/actions";


const FormComplete = () => {

    const date = new Date();

    // REDUX     
    const dispatch = useDispatch();
    const { isAlert, txt_alert } = useSelector(state => state.state_alert);

    const { input_data } = useSelector(state => state.state_input);
    const { firstname, lastname, email, phone } = input_data;

    // State
    const [useRentBy, setRentBy] = useState(0);
    const [usePriceTotalRent, setPriceTotalRent] = useState(0);

    const [useModalDataDetails, setModalDataDetails] = useState([]);
    const [useIsOpenModal, setIsOpenModal] = useState(false);


    useEffect(() => {

        var data_bike_storage = JSON.parse(localStorage.getItem('data_bike_storage'));


        if (data_bike_storage) {
            // console.log(data_bike_storage);
            setRentBy(data_bike_storage.rentBy);
            setPriceTotalRent(data_bike_storage.price_total);
        }

    }, []);


    const onChangeRentBy = (e) => {
        setRentBy(Number.parseInt(e.target.value));
    }

    const onChangeInputValues = (e) => {

        dispatch(action_inputValues({
            ...input_data,
            [e.target.name]: e.target.value
        }));
    }


    const onSubmitForm = (e) => {
        e.preventDefault();

        if (firstname.trim() === "" || lastname.trim() === "" || email.trim() === "" || phone.trim() === "") {

            dispatch(action_showAlert("All fields are required"));

            return;
        }

        dispatch(action_hideAlert());

        setIsOpenModal(true);

        var current_values = {
            firstname: firstname,
            lastname: lastname,
            bike_type: data_bike_storage.bike_type,
            name_bike: data_bike_storage.name_bike,
            rentBy: data_bike_storage.rentBy,
            price_total: data_bike_storage.price_total
        };

        // console.log(current_values);


        setModalDataDetails(current_values);

        dispatch(action_inputValues({
            firstname: "",
            lastname: "",
            email: "",
            phone: ""
        }));

    }


    var data_bike_storage = JSON.parse(localStorage.getItem('data_bike_storage'));

    if (!data_bike_storage) {
        window.location.href = "/";

    } else {
        return (

            <Col md={8} className="mx-auto mb-5">
                <Card className="card_style_container">

                    <Card.Header className="text-center card_style_header_main">
                        <h4>Please, fill the fields to complete rent.</h4>
                    </Card.Header>

                    <Card.Body>

                        <Row>

                            <Col md={6} className="mx-auto">

                                {
                                    isAlert ? (
                                        <Alert variant="danger" className="text-center">
                                            <MdNearbyError style={{ fontSize: "1.5em" }} /> <b>{txt_alert}</b>
                                        </Alert>
                                    ) : null
                                }

                                <Form onSubmit={onSubmitForm} autoComplete="off">

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input"><CgNametag style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your firstname"
                                            aria-label="Firstname"
                                            name="firstname"
                                            value={firstname}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input" ><BiBarcodeReader style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your lastname"
                                            aria-label="Lastname"
                                            name="lastname"
                                            value={lastname}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input"><MdAlternateEmail style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your email"
                                            aria-label="Email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text className="ico_input"><AiFillPhone style={{ fontSize: "1.5em" }} /></InputGroup.Text>
                                        <Form.Control
                                            placeholder="Enter your phone"
                                            aria-label="Phone"
                                            name="phone"
                                            value={phone}
                                            onChange={onChangeInputValues}
                                        />
                                    </InputGroup>

                                    <Card className="mb-3 card_item_content">
                                        <Card.Body>

                                            {
                                                String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear()
                                            }

                                            <Card.Title style={{ fontSize: "1em" }} className="text-center mb-3">
                                                Your bike will be rented for a period of {useRentBy} day{useRentBy <= 1 ? null : "s"} for a total of ${usePriceTotalRent},00
                                            </Card.Title>

                                            <Card.Text>
                                                <b>Change rent:</b> {useRentBy} {useRentBy <= 1 ? "day" : "days"}
                                                <Form.Range name="useRentBy" onChange={onChangeRentBy} value={useRentBy} onClick={() => calculatePrice(useRentBy, setPriceTotalRent)} />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <div className="d-grid gap-2">
                                        <Button className="btn2" type="submit" onMouseDown={(e) => e.preventDefault()}>
                                            Finish
                                        </Button>{' '}
                                    </div>
                                </Form>


                            </Col>

                        </Row>

                    </Card.Body>

                </Card>

                {/* MODAL */}
                <ModalConfirm useIsOpenModal={useIsOpenModal} useModalDataDetails={useModalDataDetails} />

            </Col>

        )
    }

}

export default FormComplete;