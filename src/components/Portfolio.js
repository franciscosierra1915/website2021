import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <>
            <Row>
                <p>Code:</p>
                <Col>
                Phaser.js:
                    <ul>
                        <li>
                            <a href="https://franciscosierra1915.github.io/codeys_counting/" target="_blank" rel="noopener noreferrer">Codey's Counting Conundrum</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                ThreeJS:
                    <ul>
                        <li>
                            <a href="https://tech-friend-64422.web.app/" target="_blank" rel="noopener noreferrer">Tech Friend</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    WebGL Shaders:
                        <ul>
                            <li>
                                <a href="https://my-portfolio-c19b5.web.app/" target="_blank" rel="noopener noreferrer">My Old Website</a>
                            </li>
                        </ul>
                </Col>
                {/* <Col>
                Webflow:
                    <ul>
                        <li>
                            <a href="https://franciscosierra.webflow.io/" target="_blank" rel="noopener noreferrer">Old Portfolio</a>
                        </li>
                    </ul>
                </Col> */}
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