import { Container } from "react-bootstrap";
import styles from "./style.module.css";
const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <Container>
        <p className={styles.footerText}>&copy; Footer</p>
      </Container>
    </footer>
  );
};
export default Footer;
