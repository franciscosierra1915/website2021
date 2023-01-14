import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <>
            <Row>
                <p>Code:</p>
                <Col lg={6}>
                    Phaser.js:
                    <ul>
                        <li>
                            <a href="https://franciscosierra1915.github.io/codeys_counting/" target="_blank" rel="noopener noreferrer">Codey's Counting Conundrum</a>
                        </li>
                    </ul>
                </Col>
                <Col lg={6}>
                    ThreeJS:
                    <ul>
                        <li>
                            <a href="https://tech-friend-64422.web.app/" target="_blank" rel="noopener noreferrer">Tech Friend</a>
                        </li>
                        <li>
                            <a href="https://franciscosierra1915.github.io/fox/" target="_blank" rel="noopener noreferrer">Animated model with Blender</a>
                        </li>
                        <li>
                            <a href="https://interactive-tic-tac-toe.web.app/" target="_blank" rel="noopener noreferrer">Interactive Tic-Tac-Toe</a>
                        </li>
                        <li>
                            <a href="https://franciscosierra1915.github.io/sea-of-particles/" target="_blank" rel="noopener noreferrer">Sea of Particles</a>
                        </li>
                        <li>
                            <a href="https://franciscosierra1915.github.io/scroll-three-js/" target="_blank" rel="noopener noreferrer">Scroll Animation</a>
                        </li>
                        <li>
                            <a href="https://franciscosierra1915.github.io/interactive-galaxy/" target="_blank" rel="noopener noreferrer">Interactive Galaxy</a>
                        </li>
                        <li>
                            <a href="https://franciscosierra1915.github.io/3d-text/" target="_blank" rel="noopener noreferrer">3D Text</a>
                        </li>
                    </ul>
                </Col>
                <Col lg={6}>
                    React Three Fiber:
                    <ul>
                        <li>
                            <a href="https://franciscosierra1915.github.io/bananas/" target="_blank" rel="noopener noreferrer">Apples</a>
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
            {/* <Row>
                <p>Photography:</p>
                <Col>
                    <ul>
                        <li>
                            <Link to="/gallery">Photography</Link>
                        </li>
                    </ul>
                </Col>
            </Row> */}
        </>
    )
}

export default Portfolio