const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
