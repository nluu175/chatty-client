import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // Use this if client and server are running on the same domain
  // const socket = io();
  // Else:
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://localhost:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div>
      {/* Background */}
      <div
        className="flex justify-center items-center
        bg-contain bg-blue-300 
        h-screen "
      >
        {/* Container */}
        <div
          className="flex bg-white min-w-[90%] max-w-[95%] h-[90%] 
          border-[1px] border-solid border-black rounded-md
        hover:border-zinc-500 hover:border-[2px]"
        >
          {/* Sidebar */}
          <div
            className="flex flex-col flex-initial w-[25%] rounded-tl-md rounded-bl-md
            border-[1px] border-solid border-zinc-200"
          >
            {/* Profile & Settings */}
            <div className="flex-initial h-[10%] bg-red-200">
              PROFILE AND SETTINGS
            </div>
            <div className="flex-1 bg-red-400"></div>
          </div>
          {/* Content Container */}
          <div
            className="flex flex-col flex-1 
            rounded-tr-md rounded-br-md
            border-[1px] border-solid border-zinc-200"
          >
            <div className="flex-initial h-[5%] bg-lime-400">Chat Name</div>
            <div className="flex-1 bg-lime-800">Chat Log</div>
            <div className="flex-initial h-[10%] bg-lime-200">
              Chat Input
              <form></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
