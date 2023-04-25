import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Card,
  Col,
  Row,
  Button,
  Form,
  Spinner,
  InputGroup
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductDetails, addToCart } from "../../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const id = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id.id));
    // setPrice(item[0].price);
  }, []);
  const item = useSelector((state) => state.products.item);

  useEffect(() => {
    setPrice(item ? item.price : 0);
  }, [item]);
  console.log(item, "single item");
  const handleQauntityChange = (e) => {
    setQuantity(e.target.value);
    // setPrice(item[0].price * e.target.value);
  };
  const handleAddToCart = () => {
    dispatch(addToCart(item.id, Number(quantity)));
    navigate(`/cart`);
  };
  return (
    <Container className="mb-3 mt-3">
      <h1>Product Details</h1>

      <Row>
        {item ? (
          <>
            <Col sm={6}>
              <Card className="bg-dark text-white">
                <Card.Img src={item.image} alt="Card image" />
              </Card>
            </Col>
            <Col sm={6}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Category: {item.category}</p>
              <h4>PRICE : {price}$</h4>
              <Row>
                <Col sm={8} md={6}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Quantity"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      type="number"
                      min="1"
                      max="5"
                      defaultValue={1}
                      onChange={handleQauntityChange}
                    />
                    <Button
                      variant="outline-secondary"
                      id="button-addon2"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </Col>
          </>
        ) : (
          <h4>No details found...!</h4>
        )}
      </Row>
    </Container>
  );
};
export default ProductDetails;
