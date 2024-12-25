import { useState, useMemo } from "react";
import { random } from "lodash";
import GridCell from "./GridCell";
import ToggleButton from "./ToggleButton";

const GameBoard = () => {
  const [isRangeMode, setIsRangeMode] = useState(false);
  const [isFreeSpace, setIsFreeSpace] = useState(false);

  // Generate a random number by given range
  const generateRandomNumber = (min: number, max: number): number =>
    random(min, max);

  const initialGrid = useMemo(() => {
    const grid: (number | string)[] = Array(9).fill(0);

    for (let i = 0; i < 9; i++) {
      if (isRangeMode) {
        if (i % 3 === 0) {
          grid[i] = generateRandomNumber(1, 25); // First column
        } else if (i % 3 === 1) {
          grid[i] = generateRandomNumber(26, 50); // Second column
        } else {
          grid[i] = generateRandomNumber(51, 75); // Third column
        }
      } else {
        grid[i] = generateRandomNumber(1, 75);
      }
    }

    return grid;
  }, [isRangeMode]);

  // Show free-space text in center cell
  const adjustedGrid = useMemo(() => {
    const grid = [...initialGrid];
    if (isFreeSpace) {
      grid[4] = "Free Space";
    }
    return grid;
  }, [initialGrid, isFreeSpace]);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex space-x-4">
        <h2 className="text-2xl font-medium">Game Board</h2>
      </div>

      <div className="grid grid-cols-3">
        {adjustedGrid.map((value, index) => {
          const getBorderRadiusClass = (index: number): string => {
            switch (index) {
              case 0:
                return "rounded-tl-2xl"; // for top-left
              case 2:
                return "rounded-tr-2xl"; // for top-right
              case 6:
                return "rounded-bl-2xl"; // for bottom-left
              case 8:
                return "rounded-br-2xl"; // for bottom-right
              default:
                return "";
            }
          };

          return (
            <GridCell
              key={`cell-${index + 1}`}
              numValue={value}
              gridClass={getBorderRadiusClass(index)}
            />
          );
        })}
      </div>

      <div className="flex space-x-4">
        <ToggleButton
          label="Range Mode"
          toggle={isRangeMode}
          handleClick={setIsRangeMode}
        />
        <ToggleButton
          label="Free Space"
          toggle={isFreeSpace}
          handleClick={setIsFreeSpace}
        />
      </div>
    </div>
  );
};

export default GameBoard;
