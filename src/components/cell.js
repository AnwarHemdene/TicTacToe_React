import React from "react";
function Cell(props) {
  return (
    <div
      className="cell"
      onClick={() => {
        if (!props.value) {
          props.onCellClick(props.index);
        }
      }}
    >
      {props.value}
    </div>
  );
}
export default Cell;
