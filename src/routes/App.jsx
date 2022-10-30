import React from "react";
import { BrowserRouter , Switch , Route } from "react-router-dom";
import Footer from "../containers/Footer";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ButtonComprar from "../components/ButtonComprar";
import AddProduct from "../components/AddProduct";
import Nav from "../containers/Nav";
import ItemProduct from "../components/ItemProduct";
import SeccionHamBgs from "../containers/SeccionHamBgs";
import "../styles/global.css";
import SeccionCalentado from "../containers/SeccionCalentado";
import TitleMenu from "../components/TitleMenu";
import Header from "../containers/Header";
import Admin1 from "../pages/Admin1";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/recovery-password"
              component={RecoveryPassword}/>
              <Route exact path="/footer" component={Footer} />
              <Route exact path="/button" component={ButtonComprar} />
              <Route exact path="/add-product" component={AddProduct}/>
              <Route exact path="/nav" component={Nav}/>
              <Route exact path="/itemproducto" component={ItemProduct}/>
              <Route exact path="/calentao" component={SeccionCalentado}/>
              <Route exact path="/hamburguesa" component={SeccionHamBgs} />
              <Route exact path="/menu" component={TitleMenu} />
              <Route exact path="/header" component={Header} />
              <Route exact path="/admin" component={Admin1}/>
              <Route path="*" component={NotFound} />
          </Switch>
      </Layout> 
    </BrowserRouter>
  );
};

export default App;
