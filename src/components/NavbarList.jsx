import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { AppState } from "../context/Context";
import { Link } from "react-router-dom";

const NavbarList = ({ cart }) => {
  const { state } = AppState();
  const items = state.cart.length;

  function handleClick() {
    cart((prev) => !prev);
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Link className="link lm" to={"/"}>
            HOME
          </Link>
          <Link className="link" to={"/store"}>
            STORE
          </Link>
          <Link className="link" to={"/about"}>
            ABOUT
          </Link>
        </Nav>
      </Container>
      <button className="cart_btn" onClick={handleClick}>{`Cart ${items}`}</button>
    </Navbar>
  );
};

export default NavbarList;
