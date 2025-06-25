import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RgbaColorPicker } from "react-colorful";
import { BsPaletteFill } from "react-icons/bs";
import { FaFillDrip, FaPaintBrush } from "react-icons/fa";
import { useClickAway } from "react-use";

import { useOptions } from "@/common/recoil/options/options.hooks";
import { EntryAnimation } from "../../animations/Entry.animations";

const ColorPicker = () => {
  const [options, setOptions] = useOptions();
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        className="p-2 rounded-full bg-white hover:bg-blue-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 shadow-md transition-all"
        onClick={() => setOpened(!opened)}
        disabled={options.mode === "select"}
        title="Color Picker"
      >
        <BsPaletteFill className="text-xl text-blue-500 dark:text-white" />
      </button>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute left-12 top-16 z-50 w-64 rounded-xl bg-white dark:bg-zinc-800 shadow-2xl border border-gray-200 dark:border-zinc-600 p-4 space-y-4"
            variants={EntryAnimation}
            initial="from"
            animate="to"
            exit="from"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-100">
              <FaPaintBrush className="text-pink-500" />
              Line Color
            </div>
            <RgbaColorPicker
              color={options.lineColor}
              onChange={(e) => {
                setOptions({ ...options, lineColor: e });
              }}
              className="rounded-md border dark:border-zinc-700"
            />

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-100">
              <FaFillDrip className="text-green-500" />
              Fill Color
            </div>
            <RgbaColorPicker
              color={options.fillColor}
              onChange={(e) => {
                setOptions({ ...options, fillColor: e });
              }}
              className="rounded-md border dark:border-zinc-700"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
