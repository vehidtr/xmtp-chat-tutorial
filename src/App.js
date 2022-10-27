import { useContext } from "react";
import "./App.css";
import { WalletContext } from "./contexts/WalletContext";
import { XmtpContext } from "./contexts/XmtpContext";

function App() {
  const { connectWallet, walletAddress, signer } = useContext(WalletContext);
  const [providerState] = useContext(XmtpContext);
  const { client } = providerState;

  const sendMessage = async () => {
    const message = "gm";
    if (!client || !walletAddress) {
      return;
    }
    const conversation = await client.conversations.newConversation(
      walletAddress
    );
    if (!conversation) return;
    await conversation.send(message);
  };

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
            <>
              <p>Connected: {walletAddress}</p>
              <button className="btn" onClick={sendMessage}>
                Send gm
              </button>
            </>
          )}
        </div>
      ) : (
        <button onClick={connectWallet}>Connect wallet</button>
      )}
    </div>
  );
}

export default App;
