import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosShareAlt } from "react-icons/io";
import { ImExit } from "react-icons/im";

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