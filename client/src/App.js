import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { PlayerLogin } from './pages/PlayerLogin';
import { BingoCard } from './pages/BingoCard';
import { Test } from './pages/Test';
import { Layout } from './Layout';


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
          {/* Parent route */}
          <Route element={<Layout/>}>
            {/* Children routes */}
            <Route path="/" element={ <Home/> }/>
            <Route path="/PlayerLogin" element={ <PlayerLogin/> }/>
            <Route path="/BingoCard" element={ <BingoCard/> }/>
            <Route path="/Test" element={ <Test/> }/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
