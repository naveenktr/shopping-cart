import { Container, Card, Col, Row, Button } from "react-bootstrap";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../actions";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const lists = useSelector((state) => {
    console.log(state, "allsate");
    return state.products.items;
  });
  console.log(lists);
  return (
    <div className={styles.productListWrapper}>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4">
          {lists.length > 0 &&
            lists.map((item) => (
              <Col key={item.id}>
                <Card>
                  <Link to={`/details/${item.id}`}>
                    <Card.Img
                      className={styles.prodImg}
                      variant="top"
                      src={item.image}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description.substr(0, 50)}...</Card.Text>
                      <Button variant="primary">Details</Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default ProductList;