import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { FaFont } from "react-icons/fa";

import { useRefs } from "../../hooks/useRefs";
import ShareModal from "../../modals/ShareModal";
import ColorPicker from "./ColorPicker";
import LineWidthPicker from "./LineWidthPicker";
import ModePicker from "./ModePicker";
import BackgroundPicker from "./BackgoundPicker";
import HistoryBtns from "./HistoryBtns";
import ShapeSelector from "./ShapeSelector";
import ImagePicker from "./ImagePicker";

import { useViewportSize } from "@/common/hooks/useViewportSize";
import { CANVAS_SIZE } from "@/common/constants/canvasSize";
import { DEFAULT_EASE } from "@/common/constants/easings";
import { useModal } from "@/common/recoil/modal";

const ToolBar = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const { width } = useViewportSize();
  const { canvasRef, bgRef } = useRefs();

  const [opened, setOpened] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [textPos, setTextPos] = useState<{ x: number; y: number } | null>(null);
  const [textMode, setTextMode] = useState(false);

  useEffect(() => {
    setOpened(width >= 1024);
  }, [width]);

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_SIZE.width;
    canvas.height = CANVAS_SIZE.height;

    const ctx = canvas.getContext("2d");
    if (ctx && canvasRef.current && bgRef.current) {
      ctx.drawImage(bgRef.current, 0, 0);
      ctx.drawImage(canvasRef.current, 0, 0);
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "canvas.png";
    link.click();
  };

  const handleExit = () => router.push("/");
  const handleShare = () => openModal(<ShareModal />);

  // --- Text Tool handlers ---
  const handleTextToolClick = () => {
    setTextMode((v) => !v);
    setShowTextInput(false);
    setTextPos(null);
  };

  // Listen for canvas clicks when text mode is active
  useEffect(() => {
    if (!textMode || !canvasRef.current) return;

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setTextPos({ x, y });
      setShowTextInput(true);
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, [textMode, canvasRef]);

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canvasRef.current && textPos) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.font = "24px sans-serif";
        ctx.fillStyle = "#000"; // Black by default
        ctx.fillText(textValue, textPos.x, textPos.y);
      }
    }
    setShowTextInput(false);
    setTextValue("");
    setTextPos(null);
    setTextMode(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpened(!opened)}
        className="btn-icon absolute bottom-1/2 -left-2 z-50 h-10 w-10 rounded-full bg-indigo-700 text-white text-2xl lg:hidden"
        animate={{ rotate: opened ? 0 : 180 }}
        transition={{ duration: 0.2, ease: DEFAULT_EASE }}
        title="Toggle Toolbar"
      >
        <FiChevronRight />
      </motion.button>

      <motion.div
        className="absolute left-6 top-1/2 z-50 grid grid-cols-2 gap-6 rounded-2xl bg-gradient-to-br from-indigo-800 to-purple-700 bg-opacity-90 p-6 text-white shadow-2xl backdrop-blur-md 2xl:grid-cols-1"
        animate={{ x: opened ? 0 : -200, y: "-50%" }}
        transition={{ duration: 0.2, ease: DEFAULT_EASE }}
      >
        <GroupLabel label="Tools">
          <Tool title="Drawing Mode"><ModePicker /></Tool>
          <Tool title="Shapes"><ShapeSelector /></Tool>
          {/* --- Text Tool Button --- */}
          <Tool title="Text Tool">
            <button
              className={`btn-icon ${textMode ? "bg-white/20" : ""}`}
              onClick={handleTextToolClick}
              title="Text Tool"
            >
              <FaFont />
            </button>
          </Tool>
        </GroupLabel>

        <GroupLabel label="Styles">
          <Tool title="Colors"><ColorPicker /></Tool>
          <Tool title="Line Width"><LineWidthPicker /></Tool>
          <Tool title="Background"><BackgroundPicker /></Tool>
        </GroupLabel>

        <GroupLabel label="Assets">
          <Tool title="Add Image"><ImagePicker /></Tool>
        </GroupLabel>

        <GroupLabel label="History">
          <Tool title="Undo / Redo"><HistoryBtns /></Tool>
        </GroupLabel>

        <GroupLabel label="Actions">
          <IconButton title="Share Board" onClick={handleShare}>
            <IoIosShareAlt />
          </IconButton>
          <IconButton title="Download Image" onClick={handleDownload}>
            <HiOutlineDownload />
          </IconButton>
          <IconButton title="Exit Room" onClick={handleExit}>
            <ImExit />
          </IconButton>
        </GroupLabel>
      </motion.div>

      {/* --- Text Input Overlay at chosen position --- */}
      {showTextInput && textPos && (
        <form
          onSubmit={handleTextSubmit}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40"
          style={{ pointerEvents: "auto" }}
        >
          <input
            autoFocus
            type="text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Enter text to add to canvas"
            className="rounded-lg border px-4 py-2 text-black"
            style={{
              position: "absolute",
              left: textPos.x + (canvasRef.current?.getBoundingClientRect().left || 0),
              top: textPos.y + (canvasRef.current?.getBoundingClientRect().top || 0),
              transform: "translate(-50%, -50%)",
              zIndex: 200,
            }}
          />
          <button
            type="submit"
            className="ml-2 rounded bg-indigo-600 px-4 py-2 text-white"
            style={{ position: "absolute", left: -9999 }} // Hide button, submit with Enter
          >
            Add
          </button>
        </form>
      )}
    </>
  );
};

export default ToolBar;

/* --- Utility Components --- */

const Tool = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    title={title}
    whileHover={{ scale: 1.1 }}
    className="cursor-pointer transition-transform"
  >
    {children}
  </motion.div>
);

const IconButton = ({
  title,
  onClick,
  children,
}: {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.button
    onClick={onClick}
    title={title}
    whileHover={{ scale: 1.2 }}
    className="btn-icon rounded-xl bg-white/10 p-2 text-xl text-white transition-all hover:bg-white/20"
  >
    {children}
  </motion.button>
);

const GroupLabel = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-3">
    <p className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
      {label}
    </p>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
    );
