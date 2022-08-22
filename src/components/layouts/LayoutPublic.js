

import React from "react";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Components
import { Header } from "../UI/Header";

// Routing
import { Route, Routes } from "react-router-dom";




const LayoutPublic = (props) => {

    // console.log(props);

    const { routes } = props;
var data_bike_storage = JSON.parse(localStorage.getItem('data_bike_storage'));
    // const [useRenderBack, setRenderBack]= useState(false);


    // useEffect(() => {


    //     

    //     if (!data_bike_storage) {
    //         window.location.href = "/";
    //         setRenderBack(true);
    //         return;
    //     } 

    //     setRenderBack(false);


    // }, [useRenderBack]);


    return (
        <>


            <Header />


            <Container>
                <Row>


                    


                    <Routes>
                        {
                            routes.map((route, index) => (

                                <Route key={index} path={route.path}
                                    exact={route.exact} element={<route.element />} />
                            ))
                        }
                    </Routes>

                </Row>
            </Container>

        </>
    );
}

export default LayoutPublic;