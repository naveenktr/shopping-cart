import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "./style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Header = () => {
  let lists = useSelector((state) => state.products.addedItems);

  const totalCartQuantity = useSelector(
    (state) => state.products.totalCartQuantity
  );
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    let sum = 0;

    lists.map((e) => {
      sum = sum + e.quantity;
    });
    //console.log(sum, "sum", lists, totalCartQuantity);
    setQuantity(sum);
  }, [totalCartQuantity]);

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <NavLink className="navbar-brand" to="/">
          POC
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/cart" className={`${styles.cartLink} nav-link`}>
              <FaShoppingCart />
              <span className={styles.itemsCart}>
                {/* {lists.map((item) => {
                  console.log("header quantity", item.quantity);
                  quantintity = quantintity + Number(item.quantity);
                })} */}
                {quantity}
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
