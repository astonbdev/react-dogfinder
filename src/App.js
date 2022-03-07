import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Routes from './Routes';
import Nav from './Nav';

function App() {
  const [dogList, setDogList] = useState([]);


  async function getData() {
    const result = await axios.get("http://localhost:5001/dogs");
    setDogList(result.data);
  }

  if (dogList.length === 0) {
    getData();
    return (
      <div>Loading..</div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogList={dogList} />
        <Routes dogList={dogList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
