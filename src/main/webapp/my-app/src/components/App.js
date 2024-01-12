import React, { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import ResultTable from "./ResultTable";

const App = () => {

  const [dots, setDots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('api/dots')
        .then(response => response.json())
        .then(data => {
          setDots(data);
          setLoading(false);
        })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>JUG List</h2>
            {dots.map(dot =>
                <div key={dot.id}>
                  {dot.x}
                </div>
            )}
          </div>
        </header>
      </div>
  );
}

export default App;