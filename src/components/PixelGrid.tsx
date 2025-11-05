import { useState, useEffect } from "react";

interface PixelGridProps {
  selectedColor: string;
  gridSize: number;
}

const PixelGrid: React.FC<PixelGridProps> = ({ selectedColor, gridSize }) => {
  const [pixels, setPixels] = useState<string[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  console.log('selected color', selectedColor)
  console.log('grid size', gridSize)

  useEffect(() => {
    setPixels(Array(gridSize * gridSize).fill("#ffffff"));
  }, [gridSize]);

  const paintPixel = (index: number) => {
    setPixels((pixel: any) =>
      pixel.map((color: string, i: number) =>
        i === index ? selectedColor : color
      )
    );
  };

  const handleMouseDown = (index: number) => {
    paintPixel(index);
    setIsDrawing(true);
  };

  const handleMouseEnter = (index: number) => {
    if (isDrawing) paintPixel(index);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="pixelGrid"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      }}
    >
      {pixels.map((color: any, index: number) => (
        <div
          className="pixel"
          style={{ backgroundColor: color }}
          key={index}
          onMouseDown={() => handleMouseDown(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseUp={() => handleMouseUp()}
        ></div>
      ))}
    </div>
  );
};

export default PixelGrid;
