import { useState, useEffect } from "react";

const Chatbox = (props) => {
  const { socket } = props;
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", input);
    setInput("");
  };

  return (
    <div
      className="flex flex-col flex-1 
    rounded-tr-md rounded-br-md
    border-[1px] border-solid border-zinc-200"
    >
      <div className="flex-initial h-[5%] bg-lime-400">Chat Name</div>
      <div className="flex-1 bg-lime-800">Chat Log</div>
      <div className="flex-initial h-[10%] bg-lime-200">
        Chat Input
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="chatContent"
            value={input}
            onChange={(e) => handleOnChange(e)}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
