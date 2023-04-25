import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import { Spinner } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route exact path="/" element={<ProductList />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route
                exact
                path="/details/:id"
                element={<ProductDetails />}
              ></Route>
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}
