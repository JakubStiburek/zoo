import './App.css';
import Navigation from "./components/Navigation";
import Projector from "./components/Projector";
import Map from "./components/Map";
import News from "./components/News";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Map />
      <News />
      <Newsletter />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
