import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import SingIn from "./components/SingIn";
import SingUp from "./components/Singup";
import Header from "./components/header";
import Footer from "./components/footer";
import theme from "./config/theme";
import Society from "./components/Society";
import DetailCenter from "./components/DetailCenter";
import HomePage from "./pages/home";

function BasicExample() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route path='/sing-in' component={SingIn} />
          <Route path='/sign-up' component={SingUp} />
          <Route path='/society' component={Society} />
          <Route path='/center' component={DetailCenter} />
          {/* <SingIn />
          <SingUp />
          <Society />
          <DetailCenter /> */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default BasicExample;
