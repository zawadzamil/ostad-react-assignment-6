import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../css/Style.css";

export default function Header({ title }) {
    return (
        <Fragment>
            <Navbar bg="dark" data-bs-theme="dark" className="navbar-center p-4">
                <Container>
                    <Navbar.Brand href="#" >
                        {title}
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </Fragment>
    );
}
