import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";
import NotFoundModal from "@/modules/home/modals/NotFound";
import { motion } from "framer-motion";

const NameInput = () => {
  const router = useRouter();
  const roomId = (router.query.roomId || "").toString();

  const setRoomIdAtom = useSetRoomId();
  const { openModal } = useModal();

  const [name, setName] = useState("");

useEffect(() => {
  if (!roomId) return;

  socket.emit("check_room", roomId);

  const handleRoomExists = (exists: boolean) => {
    if (!exists) router.push("/");
  };

  socket.on("room_exists", handleRoomExists);

  return () => {
    socket.off("room_exists", handleRoomExists); // ✅ clean up correctly
  };
}, [roomId, router]);

 useEffect(() => {
  const handleJoined = (roomIdFromServer: string, failed?: boolean) => {
    if (failed) {
      router.push("/");
      openModal(<NotFoundModal id={roomIdFromServer} />);
    } else {
      setRoomIdAtom(roomIdFromServer);
    }
  };

  socket.on("joined", handleJoined);

  return () => {
    socket.off("joined", handleJoined); // ✅ cleanup with same reference
  };
}, [openModal, router, setRoomIdAtom]);


  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      socket.emit("join_room", roomId, name);
    }
  };

  return (
    <motion.form
      onSubmit={handleJoinRoom}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto mt-24 flex w-full max-w-md flex-col items-center rounded-xl bg-white/70 p-8 shadow-xl backdrop-blur-md"
    >
      <h1 className="mb-2 text-center text-4xl font-extrabold text-indigo-700 drop-shadow-sm">
        Digiboard
      </h1>
      <p className="mb-8 text-center text-lg text-zinc-700">
        Join your whiteboard room in real-time
      </p>

      <div className="mb-6 w-full">
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-800">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Alex"
          className="w-full rounded-lg border border-zinc-300 px-4 py-2 text-base shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          value={name}
          maxLength={15}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
      >
        Enter Room
      </motion.button>
    </motion.form>
  );
};

export default NameInput;