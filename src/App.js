import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import {storage} from './firebase';
import WaveShader from "./components/WaveShader"
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import github from "./assets/github.png";


function App() {

  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      let result = await storage.ref().child('images').listAll();
      
      let urlPromises = result.items.map(photoRef => photoRef.getDownloadURL());
      return Promise.all(urlPromises);
    }
    const loadPhotos = async () => {
        const urls = await fetchPhotos();
        setPhotos(urls);
    }
    loadPhotos();
    }, []);
  
  return (
    <main>
      <Router>
        <Container>
          <Row className="about-me">
            <Col className="headshot-container">
              <Link to="/">
                <div className="headshot-container">
                  <WaveShader/>
                  </div>
              </Link>
            </Col>
            <Col className="bio-container">
              <div className="bio">
                <h1>Hello world :)</h1>
                <p>My name is Francisco Sierra, but you can call me Frank! I'm a web developer who loves photography, video and 3D animations. I write code that merges these things.</p>
                <div class="social-media">
                <a href="https://www.linkedin.com/in/francisco-sierra-munoz/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIN icon"/></a>
                <a href="https://github.com/franciscosierra1915" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github icon"/></a>
                <a href="https://twitter.com/franksierra_" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter icon"/></a>
                </div>
              </div>
            </Col>
          </Row>
          <Switch>
            <Route exact path="/" render={() => <Portfolio/>}/>
            <Route path="/gallery" render={() => <Gallery photos={photos}/>}/>
          </Switch>
        </Container>
      </Router>
    </main>
  );
}

export default App;
