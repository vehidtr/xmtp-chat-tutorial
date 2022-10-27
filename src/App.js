import { useContext } from "react";
import "./App.css";
import { WalletContext } from "./contexts/WalletContext";
import { XmtpContext } from "./contexts/XmtpContext";

function App() {
  const { connectWallet, walletAddress, signer } = useContext(WalletContext);
  const [providerState] = useContext(XmtpContext);
  
  return (
    <div className="App">
      {walletAddress ? (
        <div className="wrapper">
          {!providerState.client ? (
            <button
              className="btn"
              onClick={() => providerState.initClient(signer)}
            >
              Connect to XMTP
            </button>
          ) : (
            <p>Connected: {walletAddress}</p>
          )}
        </div>
      ) : (
        <button onClick={connectWallet}>Connect wallet</button>
      )}
    </div>
  );
}

export default App;
