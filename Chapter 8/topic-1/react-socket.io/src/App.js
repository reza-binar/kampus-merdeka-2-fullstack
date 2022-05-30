import { useEffect, useState } from "react";
import logo from "./logo.svg";
import io from "socket.io-client";
import "./App.css";

// Connect to socket.io server
const socket = io.connect(process.env.REACT_APP_BACKEND_URL);

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [clientID, setClientID] = useState("");

  function handleTextChange(e) {
    setMessage(e.target.value);
    socket.emit("typing", clientID);
    console.log(message);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!message || message === "") return;
    console.log("Submitted!");

    socket.emit("chat message", message);
  }

  useEffect(() => {
    socket.on("connect", () => {
      setClientID(socket.id);
    });

    socket.on("incoming message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("incoming typing", (incomingClient) => {
      setClient(incomingClient);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    });
  }, [messages, client, clientID]);

  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="react logo" />
      <div className="App-messages">
        {messages.map((message, index) => (
          <div className="App-message" key={index}>
            {message}
          </div>
        ))}
        {isTyping && <div className="App-client">{client} is typing...</div>}
      </div>
      <form className="App-control" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Message..."
          onChange={handleTextChange}
        />
        <input className="App-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
