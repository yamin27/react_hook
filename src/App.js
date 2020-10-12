import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Demo from "./Demo";
import Son from "./Component/Son";
import {DadaProvider} from "./Component/myContext";


function App() {
  return (
    <div className="App">

        <DadaProvider value="Data send to DADA to PUTI">

            <Son/>
        </DadaProvider>

    </div>
  );
}

export default App;
