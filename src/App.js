
import React from "react";

// Routing
import AppRouting from "./HELPERS/config-route/AppRouting";

// Redux
import { Provider } from "react-redux";
import { store } from "./REDUX/store";
 
// Provider
import ThemeProvider from 'react-bootstrap/ThemeProvider'


// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";



function App() {
  return (

    <>



      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >

        <Provider store={store}>
          <AppRouting />
        </Provider>

      </ThemeProvider>



    </>
  );
}

export default App;
