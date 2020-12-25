import './App.css';
import { Container } from "react-bootstrap";
import Slider from "./Slider"

function App() {
  return (
    <Container className="align-items-center justify-content-center">
      <div className="row">
        <h2 className="mt-3">Photo Editor</h2>
      </div>
      
      <div className="row">
        <div className="col-lg-10 main-image-bg">
          <div className="main-image" />
          
        </div>
        <div className="col-lg-2 pl-5">
          <button className="btn btn-primary">Brightness</button>
        </div>
      </div>
      <div className="row align-items-center mt-3"> 
        <div className="col-lg-10 ">
          <Slider />
        </div>
      </div>
      
    </Container>
  );
}

export default App;
