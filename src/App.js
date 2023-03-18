import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import Block from './components/Block.js'
import Footer from './components/Footer.js'
import Flotingnavbar from './components/Flotingnavbar.js'

function App() {
  return (
    <div className="App">
      <Herosection/>
      <Block/>
      <Footer/>
      {/* <Flotingnavbar/> */}
    </div>
  );
}

export default App;
