import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <>
            <Row>
                <p>Code:</p>
                <Col>
                    HTML, CSS & JS:
                        <ul>
                            <li>
                                <a href="https://www.franciscosierra.site/" target="_blank" rel="noopener noreferrer">Old Portfolio</a>
                            </li>
                        </ul>
                </Col>
                <Col>
                WordPress:
                    <ul>
                        <li>
                            <a href="https://franciscosierra.net/" target="_blank" rel="noopener noreferrer">Adcetera</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                ThreeJS:
                    <ul>
                        <li>
                            <a href="https://techfriend.dev/" target="_blank" rel="noopener noreferrer">Tech Friend</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                Webflow:
                    <ul>
                        <li>
                            <a href="https://franciscosierra.webflow.io/" target="_blank" rel="noopener noreferrer">Old Portfolio</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <p>Photography:</p>
                <Col>
                    <ul>
                        <li>
                            <Link to="/gallery">Photography</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default Portfolio