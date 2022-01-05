import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import MainContainer from "./MainContainer";

const ChatPage = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Use this if client and server are running on the same domain
    // const newSocket = io();
    // Else:
    const newSocket = io(`http://localhost:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    // Background
    <div className="flex justify-center items-center bg-contain bg-blue-300 h-screen ">
      <MainContainer socket={socket} />
    </div>
  );
};

export default ChatPage;
