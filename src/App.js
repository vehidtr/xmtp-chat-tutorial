import { useContext } from "react";
import "./App.css";
import { WalletContext } from "./contexts/WalletContext";
import { XmtpContext } from "./contexts/XmtpContext";
import useStreamMessages from "./hooks/useStreamMessages";

function App() {
  const { connectWallet, walletAddress, signer } = useContext(WalletContext);
  const [providerState] = useContext(XmtpContext);
  const { convoMessages,client } = providerState;
  useStreamMessages(walletAddress);

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
              <div className="msg-container">
                {convoMessages &&
                  convoMessages.get(walletAddress)?.map((msg) => {
                    return (
                      <div className="msg" key={msg.id}>
                        {msg.content}
                      </div>
                    );
                  })}
              </div>
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
