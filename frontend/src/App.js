import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import { DeckContext } from './data/DeckContext';

function App() {
  const { Provider: DeckData, Consumer } = DeckContext;
  const [state, setState] = useState({});

  return (
    <div className="App">
      <DeckData value={{ state, setState}}>
        <Header />
        <Main />
      </DeckData>
    </div>
  );
}

export default App;
