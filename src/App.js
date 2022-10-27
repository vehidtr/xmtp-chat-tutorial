import { useContext } from 'react';
import './App.css';
import { WalletContext } from './contexts/WalletContext';

function App() {
  const { connectWallet } = useContext(WalletContext);
  return (
    <div className="App">
      <button onClick={connectWallet}>Connect wallet</button>
    </div>
  );
}

export default App;
