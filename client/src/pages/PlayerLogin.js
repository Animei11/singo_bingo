import { lobbyCode } from './Home';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';


const socket = io.connect("http://localhost:3001");


export function PlayerLogin() {
    // Room State
    const [room, setRoom] = useState("");
    alert({ lobbyCode })
    const joinRoom = () => {
        if (room !== lobbyCode) {
            alert("Lobby not found. Please reenter.")
        } else {
            socket.emit("join_room", lobbyCode);
        }
    };
    return (
        <>
            <input
                placeholder="Room Number..."
                onChange={(event) => {
                    setRoom(event.target.value);
            }}
            />
            <button onClick={joinRoom}> Join Room </button>
        </>
    )
       
    // return (
    //     <>
    //         {/* Username, Lobby Code */}
    //         <button>Join Game</button>
    //     </>
    // )
}