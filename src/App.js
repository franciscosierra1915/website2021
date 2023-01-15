import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';
import WaveShader from "./components/WaveShader"
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import github from "./assets/github.png";


function App() {
  return (
    <main>
      <Router>
        <Container>
          <Row className="about-me">
            <Col className="headshot-container">
              <Link to="/">
                <div className="headshot-container">
                  <WaveShader />
                </div>
              </Link>
            </Col>
            <Col className="bio-container">
              <div className="bio">
                <h1>Hello world :)</h1>
                <p>My name is Francisco Sierra, but you can call me Frank! I'm a UX Developer who loves 3D animations on the web. I write code that merges these things.</p>
                <div className="social-media">
                  <a href="https://www.linkedin.com/in/francisco-sierra-munoz/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIN icon" /></a>
                  <a href="https://github.com/franciscosierra1915" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github icon" /></a>
                  <a href="https://twitter.com/franksierra_" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter icon" /></a>
                </div>
              </div>
            </Col>
          </Row>
          <Switch>
            <Route exact path="/" render={() => <Portfolio />} />
          </Switch>
        </Container>
      </Router>
    </main>
  );
}

export default App;
