import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GridComponent from './components/grid';

function App() {
  const [data, setData] = useState<any>([])

  const loadData = async () => {
    await setData([{ "color": "#Ff0000", "value": 1 }, { "color": "#Ff0000", "value": 2 }, { "color": "#Ff0000", "value": 3 }, { "color": "#Ff0000", "value": 4 }, { "color": "#Ff0000", "value": 5 }, { "color": "#Ff0000", "value": 6 }, { "color": "#Ff0000", "value": 7 }, { "color": "#Ff0000", "value": 8 }])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="App">
      <GridComponent data={data}>Votantes</GridComponent>
    </div>
  );
}

export default App;
