import React from "react";


// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// File external
import { route_nav } from "./route_nav";

// console.log(route_nav);





const RouteMapping = () => {

    // console.log(route_nav.map((e) => e));


    return (
        <Routes>
            {
                route_nav.map((route, index) => (

                    <Route key={index} path={route.path} exact={route.exact}
                        element={<route.element routes={route.routes} {...route}/>}  />
                ))
            }
        </Routes>
    )
}

const AppRouting = () => {


    return (

        <Router>

            <RouteMapping />

        </Router>
    );
}

export default AppRouting;