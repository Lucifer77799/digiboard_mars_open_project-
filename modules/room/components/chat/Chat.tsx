import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsFillChatFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useList } from "react-use";

import { DEFAULT_EASE } from "@/common/constants/easings";
import { socket } from "@/common/lib/socket";
import { useRoom } from "@/common/recoil/room";

import ChatInput from "./ChatInput";
import Message from "./Message";

const Chat = () => {
  const room = useRoom();
  const msgListRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);
  const [newMsg, setNewMsg] = useState(false);
  const [msgs, msgHandler] = useList<Message>([]);

  useEffect(() => {
    const handleNewMsg = (userId: string, msg: string) => {
      const user = room.users.get(userId);

      msgHandler.push({
        userId,
        msg,
        id: Date.now(),
        username: user?.name || "Anonymous",
        color: user?.color || "#333",
      });

      // Auto-scroll to bottom
      setTimeout(() => {
        msgListRef.current?.scrollTo({
          top: msgListRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);

      if (!opened) setNewMsg(true);
    };

    socket.on("new_msg", handleNewMsg);

    return () => {
      socket.off("new_msg", handleNewMsg);
    };
  }, [msgHandler, opened, room.users]);

  return (
    <motion.div
      className="fixed bottom-0 right-6 z-50 flex h-[340px] w-[22rem] flex-col overflow-hidden rounded-t-xl shadow-2xl"

      animate={{ y: opened ? 0 : 280 }}
      transition={{ ease: DEFAULT_EASE, duration: 0.25 }}
    >
      {/* Chat Header */}
      <button
        onClick={() => {
          setOpened(!opened);
          setNewMsg(false);
        }}
        className="flex items-center justify-between bg-blue-700 px-5 py-2 text-white font-semibold"
      >
        <div className="flex items-center gap-2">
          <BsFillChatFill size={18} />
          <span>Live Chat</span>
          {newMsg && (
            <span className="ml-2 rounded bg-green-300 px-2 text-xs font-bold text-green-900 shadow-sm">
              New!
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: opened ? 0 : 180 }}
          transition={{ ease: DEFAULT_EASE, duration: 0.2 }}
        >
          <FaChevronDown size={14} />
        </motion.div>
      </button>

      {/* Chat Body */}
      <div className="flex flex-1 flex-col justify-between bg-white p-3">
        {/* Messages */}
        <div
          ref={msgListRef}
          className="scrollbar-thin h-[220px] overflow-y-auto pr-1"
        >
          {msgs.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </div>

        {/* Chat Input */}
        <ChatInput />
      </div>
    </motion.div>
  );
};

export default Chat;
