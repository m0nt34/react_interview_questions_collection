import React, { useState } from "react";

const ButtonComp = ({ handleClick, index, active }) => {
  return (
    <button
      onClick={() => {
        if (!active) {
          handleClick(index);
        }
      }}
      className={`h-0 pb-[100%] border border-black ${
        active ? "bg-green-500" : null
      }`}
    ></button>
  );
};
const GridLights = () => {
  const [activation, setActivation] = useState([]);
  const grid = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const handleClick = (i) => {
    const arr = [...activation, i];

    setActivation(arr);
    console.log(arr.length);

    if (arr.length === grid.flat(1).filter(Boolean).length) {
      console.log(1);
      const timer = setInterval(() => {
        setActivation((prev) => {
          const newAct = prev.slice();
          console.log(newAct);

          newAct.pop();
          if (newAct.length === 0) {
            clearInterval(timer);
          }
          return newAct;
        });
      }, 300);
    }
  };
  return (
    <div className="flex flex-col select-none gap-5 items-center justify-center w-full min-h-screen">
      <div
        className="grid max-w-[300px] w-full gap-5 border border-black p-5"
        style={{ gridTemplateColumns: `repeat(${grid[0].length}, 1fr)` }}
      >
        {grid.flat(1).map((val, i) => {
          return val ? (
            <ButtonComp
              handleClick={handleClick}
              index={i}
              active={activation.includes(i)}
              key={i}
            />
          ) : (
            <span key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
