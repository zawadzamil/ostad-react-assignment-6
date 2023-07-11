import { Fragment } from "react";
import Form from "react-bootstrap/Form";

export default function Content() {
    return (
        <Fragment>
            <section className="content">
                <div className="w-100 text-center  p-4 my-4  ml-auto">
                    <h4 className="display-5">Content Section</h4>
                    <Form className="w-50">
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>
            </section>
        </Fragment>
    );
}
