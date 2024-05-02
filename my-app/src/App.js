import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SearchComponent from './components/Search';

function App() {
  return (
    <div className="App">
    </div>
  );
}

const Search = () => {
  const data = [
    { place: 'New York', price: 100 },
    { place: 'Los Angeles', price: 150 },
    { place: 'London', price: 200 },
    { place: 'Paris', price: 250 },
  ];

  return (
    <div>
      <h1>Search</h1>
      <SearchComponent data={data} />
    </div>
  );
};

export default App;
