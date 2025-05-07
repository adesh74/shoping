import './App.css';
import Header from './Header.jsx';
import Secondnav from './Secondnav.jsx';
import Sideba from './Sideba.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <div>
        <h1>
        DISCOVER OUR PRODUCTS
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <Secondnav />
      <div className='bodydiv'>
        <Sideba />
        </div>
    </div>
  );
}

export default App;
