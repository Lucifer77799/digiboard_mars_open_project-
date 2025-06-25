import { FormEvent, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { socket } from "@/common/lib/socket";

const ChatInput = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (msg.trim() !== "") {
      socket.emit("send_msg", msg);
      setMsg("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 rounded-xl border border-zinc-300 bg-white p-3 shadow-md"
    >
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
        className="flex-grow rounded-md border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-150"
      />
      <button
        type="submit"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        title="Send Message"
      >
        <AiOutlineSend size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
