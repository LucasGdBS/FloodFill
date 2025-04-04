import { useState } from "react";
import SquareMatrix from "./components/SquareMatrixComponent";
import { colorClasses } from "./types/colorClasses";
import { Shuffle } from "lucide-react";
import { motion } from "framer-motion";
import { PaintBucket } from "lucide-react";
import allSameColor from "./utils/allSameColor";

interface SquareProps {
  color: string;
}

const colors = Object.keys(colorClasses);

function shuffleMatrix(): SquareProps[][] {
  return Array.from({ length: 6 }, () =>
    Array.from({ length: 6 }, () => ({
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  );
}

function App() {
  const [matrix, setMatrix] = useState(() => shuffleMatrix());
  const [version, setVersion] = useState(0);
  const [fillColor, setFillColor] = useState<string>(colors[0]);
  const [countClick, setCountClick] = useState(0);

  console.log("Matrix:", matrix);

  return (
    <div className="flex flex-row-reverse justify-center">
      <div className="flex flex-col h-screen">
        <div className="h-screen flex items-center justify-center">
          <SquareMatrix
            squares={matrix}
            key={version}
            fillColor={fillColor}
            setClick={setCountClick}
            win={allSameColor(matrix)}
          />
        </div>

        <div className="flex justify-center items-center gap-4 mb-4">
          <motion.button
            onClick={() => {
              setMatrix(shuffleMatrix());
              setVersion((v) => v + 1);
              setCountClick(0);
            }}
            type="button"
            className="p-2 bg-blue-500 text-white rounded-full shadow-md cursor-pointer hover:bg-blue-600 active:bg-blue-700 transition-all flex items-center justify-center z-50"
          >
            <Shuffle size={24} />
          </motion.button>

          {colors.map((color, index) => (
            <div
              key={index + color}
              className={`w-8 h-8 rounded-full cursor-pointer flex justify-center items-center z-50 ${
                fillColor === color ? "border-2 border-black" : ""
              }`}
              style={{ backgroundColor: colorClasses[color] }}
              onClick={() => setFillColor(color)}
            >
              {color === fillColor && (
                <PaintBucket
                  size={18}
                  className={`${
                    fillColor === color ? "text-white" : "text-black"
                  } transition-all`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen absolute left-20">
        <p className="text-2xl">Quantidade de clicks para resolver:</p>
        <motion.pre style={text}>{countClick}</motion.pre>
      </div>
    </div>
  );
}

const text = {
  fontSize: 30,
  fontWeight: "bold",
};

export default App;
