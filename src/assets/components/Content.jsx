import { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

export default function Content() {
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);

    const submitForm = (event) => {
        event.preventDefault();
        message && setUpdated(message);
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    return (
        <Fragment>
            <section className="content">
                <div className="w-100 text-center  p-4 my-4 ">
                    <h4 className="display-5">Content Section</h4>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6"><Form className="p-4 m-4  form">
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Enter Your Text</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handleChange} />
                            </Form.Group>
                            <Button variant="success" type="submit" onClick={(e) => submitForm(e)} >Submit</Button>
                        </Form></div>

                        <div className="col-md-3"></div>
                    </div>

                    <div className="row text-center" id="textMessage">
                        <p className="fw-bold  w-50 displayText ">{updated}</p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
