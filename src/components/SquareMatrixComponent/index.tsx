import { useState } from "react";
import floodFill from "../../utils/floodFill";
import { colorClasses } from "../../types/colorClasses";
import { motion } from "framer-motion";
import { PaintBucket } from "lucide-react";

interface SquareProps {
  color: string;
}

export default function SquareMatrix({
  squares,
  fillColor,
  setClick,
}: {
  squares: SquareProps[][];
  fillColor: string;
  setClick: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [matrix, setMatrix] = useState(squares);

  function handleClick(row: number, col: number) {
    const updatedMatrix = floodFill(
      [...matrix.map((row) => [...row])],
      row,
      col,
      fillColor
    );
    setMatrix(updatedMatrix);
    setClick((prev) => prev + 1);
  }

  function getRandomDuration() {
    return Math.random() * 0.8 + 0.2; // Entre 0.2s e 1s
  }

  return (
    <div className="grid grid-cols-6 gap-2">
      {matrix.map((row, rowIndex) =>
        row.map((square, colIndex) => (
          <motion.div
            key={`${rowIndex}-${colIndex}`}
            className={`w-32 h-32 rounded-lg cursor-pointer flex justify-center items-center`}
            animate={{ backgroundColor: colorClasses[square.color] }}
            transition={{ duration: getRandomDuration(), ease: "easeInOut" }}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            <motion.div
              className="opacity-0 w-max h-max"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <PaintBucket size={50} className="text-gray-600" />
            </motion.div>
          </motion.div>
        ))
      )}
    </div>
  );
}
