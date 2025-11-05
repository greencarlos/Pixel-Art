import { useState } from "react";
import Selector from "./Selector";
import PixelGrid from "./PixelGrid";

const PixelArtContainer: React.FC = () => {
  const [color, setColor] = useState<string>("#ffffff");
  const [grid, setGrid] = useState<number>(0);

  return (
    <div className="mainContainer">
      <Selector
        color={color}
        grid={grid}
        setColor={setColor}
        setGrid={setGrid}
      />
      <PixelGrid selectedColor={color} gridSize={grid} />
    </div>
  );
};

export default PixelArtContainer;
