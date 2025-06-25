import { socket } from "@/common/lib/socket";

const Message = ({ userId, msg, username, color }: Message) => {
  const isSender = socket.id === userId;

  return (
    <div
      className={`my-3 flex ${isSender ? "justify-end" : "justify-start"} px-3`}
    >
      <div className={`max-w-[75%] ${isSender ? "text-right" : "text-left"}`}>
        {!isSender && (
          <span
            className="block text-sm font-semibold mb-1"
            style={{ color }}
          >
            {username}
          </span>
        )}

        <div
          className={`rounded-lg px-4 py-2 text-sm leading-snug shadow-sm ${
            isSender
              ? "bg-blue-600 text-white"
              : "bg-zinc-200 text-black"
          }`}
          style={{ wordBreak: "break-word" }}
        >
          {msg}
        </div>
      </div>
    </div>
  );
};

export default Message;
