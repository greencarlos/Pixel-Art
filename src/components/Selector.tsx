interface SelectorProps {
  grid: number;
  setGrid: (value: number) => void;
  color: string;
  setColor: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({
  grid,
  setGrid,
  color,
  setColor,
}) => {
  return (
    <div className="selector">
      <select
        name="grid"
        id="grid"
        value={grid}
        onChange={(e: any) => setGrid(Number(e.target.value))}
      >
        {[8, 16, 24, 32].map((size) => (
          <option key={size} value={size}>
            {size} x {size}
          </option>
        ))}
      </select>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default Selector;
