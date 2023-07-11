import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../css/Style.css";

export default function Header() {
    return (
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark" className="navbar-center">
                <Container>
                    <Navbar.Brand href="#home">
                        OSTAD Module 6 Assignment
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </Fragment>
    );
}
