import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";
import NotFoundModal from "../modals/NotFound";

const Home = () => {
  const { openModal } = useModal();
  const setAtomRoomId = useSetRoomId();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.body.style.background = "linear-gradient(to right, #e0eafc, #cfdef3)";
  }, []);

  useEffect(() => {
    socket.on("created", (roomIdFromServer) => {
      setAtomRoomId(roomIdFromServer);
      router.push(roomIdFromServer);
    });

    const handleJoinedRoom = (roomIdFromServer: string, failed?: boolean) => {
      if (!failed) {
        setAtomRoomId(roomIdFromServer);
        router.push(roomIdFromServer);
      } else {
        openModal(<NotFoundModal id={roomId} />);
      }
    };

    socket.on("joined", handleJoinedRoom);

    return () => {
      socket.off("created");
      socket.off("joined", handleJoinedRoom);
    };
  }, [openModal, roomId, router, setAtomRoomId]);

  useEffect(() => {
    socket.emit("leave_room");
    setAtomRoomId("");
  }, [setAtomRoomId]);

  const handleCreateRoom = () => {
    socket.emit("create_room", username);
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (roomId) socket.emit("join_room", roomId, username);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-xl w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600">🎨 Digiboard</h1>
          <p className="mt-2 text-gray-600 text-lg">Collaborate in real-time on a digital canvas</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value.slice(0, 15))}
            />
          </div>

          <form onSubmit={handleJoinRoom} className="space-y-4">
            <label className="block text-gray-700 font-semibold">Room ID</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
            >
              Join Room
            </button>
          </form>

          <div className="flex items-center gap-4 text-gray-400 my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span>OR</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="text-center">
            <h3 className="text-gray-700 font-semibold mb-2">Create a New Room</h3>
            <button
              onClick={handleCreateRoom}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
            >
              Create Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;