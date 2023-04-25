import {
  ListGroup,
  Container,
  Button,
  ButtonGroup,
  Image
} from "react-bootstrap";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuantity,
  addToCart,
  getCart,
  removeItem,
  subtractQuantity
} from "../../actions";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [lists, setLists] = useState([]);
  let list = useSelector((state) => state.products.addedItems);
  const totalCartQuantity = useSelector(
    (state) => state.products.totalCartQuantity
  );
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = (id) => {
    console.log("trigger");
    dispatch(addQuantity(id));
  };
  const handleRemoveItem = (id) => {
    dispatch(subtractQuantity(id));
  };
  useEffect(() => {
    setLists(list);
    let sum = 0;

    lists.map((e) => {
      sum = sum + e.quantity;
    });
    console.log(sum, "cart sum", lists, totalCartQuantity);
    setQuantity(sum);
  }, [dispatch, setLists, list, lists, totalCartQuantity]);
  let sum = 0;
  return (
    <div className={styles.cartWrapper}>
      <Container>
        <ListGroup as="ol" numbered>
          {lists.length > 0 &&
            lists.map((item) => (
              <ListGroup.Item
                key={item.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <Image src={item.image} className={styles.thumbImg} />
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                  <div>PRICE: {(item.price * item.quantity).toFixed(2)}$</div>
                  Quantity : {item.quantity}
                </div>
                <div>
                  <ButtonGroup size="lg" className="mb-2">
                    <Button
                      variant="outline-dark"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <div className={styles.totalAmounttWrapper}>
          <h2>Total quantity : </h2>
          <h2>{quantity}</h2>
        </div>
        <div className={styles.totalAmounttWrapper}>
          <h2>Total amount : </h2>
          <h2>
            {lists.length > 0 &&
              lists.map((item) => {
                sum += item.price * item.quantity;
              })}
            {sum.toFixed(2)} $
          </h2>
        </div>
        <div className={styles.textRight}>
          <Button>Order</Button>
        </div>
      </Container>
    </div>
  );
};
export default Cart;
