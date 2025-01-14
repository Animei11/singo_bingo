import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/home'
import { Page1 } from './Pages/page1'
import { Page2 } from './Pages/page2'
import { Page3 } from './Pages/page3'


const socket = io.connect("http://localhost:3001");

function App() {
  // Room State
  const [room, setRoom] = useState("");

  // Message States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <>
      {/* Connects different js files */}
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/page1" element={ <Page1/> }/>
          <Route path="/page2" element={ <Page2/> }/>
          <Route path="/page3" element={ <Page3/> }/>
        </Routes>
      </Router>
      <h1>Hello</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>

    // <div className="App">
    //   <input
    //     placeholder="Room Number..."
    //     onChange={(event) => {
    //       setRoom(event.target.value);
    //     }}
    //   />

    //   <button onClick={joinRoom}> Join Room </button>
    //   <input
    //     placeholder="Message..."
    //     onChange={(event) => {
    //       setMessage(event.target.value);
    //     }}
    //   />
    //   <button onClick={sendMessage}>Send Message</button>
    //   <h1>Message:</h1>
    //   {messageReceived}
    //   <a href="homeWebsite.js"> Test Page </a>
    // </div>
  );
}

export default App;
