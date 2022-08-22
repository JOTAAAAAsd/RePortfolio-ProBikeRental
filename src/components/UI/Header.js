import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const Header = () => {



    return (

        <>

            <Navbar className="mb-5 navbar_style">
                <Container>
                    <Navbar.Brand style={{ color: "#4defa7" }}><h3>Pro-Bike Rental</h3></Navbar.Brand>
                </Container>
            </Navbar>



        </>
    );

}
