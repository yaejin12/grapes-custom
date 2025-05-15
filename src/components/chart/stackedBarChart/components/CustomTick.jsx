import React from "react";

function CustomTick(props) {
  const { x, y, payload } = props;
  const value = payload.value;
  const maxLineLength = 7;

  let firstLine = value;
  let secondLine = "";

  // 띄어쓰기 기준으로 줄바꿈
  if (value.includes(" ")) {
    const [first, ...rest] = value.split(" ");
    firstLine = first;
    secondLine = rest.join(" ");
  }
  // 띄어쓰기 없고 길이가 길면 반 나누기
  else if (value.length > maxLineLength) {
    const mid = Math.floor(value.length / 2);
    firstLine = value?.slice(0, mid);
    secondLine = value?.slice(mid);
  }
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text textAnchor="middle" fill="#555555" fontSize="13">
        {value.length > maxLineLength ? (
          <>
            <tspan x={0} dy="0">
              {firstLine}
            </tspan>
            <tspan x={0} dy="1.2em">
              {secondLine}
            </tspan>
          </>
        ) : (
          <tspan x={0} dy="0">
            {value}
          </tspan>
        )}
      </text>
    </g>
  );
}

export default CustomTick;
