import React, { useState } from "react";
import { matrix } from "./utils/createMatrix";
const SelectableGrid = () => {
  const [matrixDisplay, setMatrixDisplay] = useState(matrix(15, 15));
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [startSel, setStartSel] = useState(null);
  const handleMouseDown = (num) => {
    setIsMouseDown(true);
    setStartSel(num);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseEnter = (num) => {
    if (isMouseDown) {
      const startBox = startSel;
      const endBox = num;
    

      const startRow = Math.floor((startBox - 1) / 15);
      const startCol = (startBox - 1) % 15;
      const endRow = Math.floor((endBox - 1) / 15);
      const endCol = (endBox - 1) % 15;
      //console.log(startRow, startCol);

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);
      const selected = [];
      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          selected.push(i * 15 + j + 1);
        }
      }

      setSelectedBoxes(selected);
    }
  };
  return (
    <div className="flex flex-col select-none gap-5 items-center justify-center w-full min-h-screen">
      <h1 className="text-3xl">Selectable Grid</h1>
      <table onMouseUp={handleMouseUp}>
        <tbody>
          {matrixDisplay.map((col, i) => {
            return (
              <tr key={i}>
                {col.map((row, j) => {
                  return (
                    <td
                      onMouseDown={() => {
                        handleMouseDown(i * 15 + j + 1);
                      }}
                      onMouseEnter={() => {
                        handleMouseEnter(i * 15 + j + 1);
                      }}
                      key={`${i}-${j}`}
                      className={`border  border-black aspect-square h-[50px] w-[50px] ${
                        selectedBoxes.includes(i * 15 + j + 1)
                          ? "bg-blue-300"
                          : ""
                      }`}
                    >
                      {i * 15 + j + 1}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SelectableGrid;
