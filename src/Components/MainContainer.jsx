import Sidebar from "./Sidebar";
import Chatbox from "./ChatBox";

const MainContainer = (props) => {
  return (
    <div
      className="flex bg-white min-w-[90%] max-w-[95%] h-[90%] 
      border-[1px] border-solid border-black rounded-md
    hover:border-zinc-500 hover:border-[2px]"
    >
      {/* Sidebar */}
      <Sidebar />
      {/* Chatbox */}
      <Chatbox socket={props.socket} />
    </div>
  );
};

export default MainContainer;
