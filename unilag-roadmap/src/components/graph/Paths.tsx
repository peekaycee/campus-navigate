/* eslint-disable @typescript-eslint/no-explicit-any */
import locationCoordinates from './Cordinates';

export const printShortestPaths = (
  distances: { [key: string]: number },
  previous: { [key: string]: string | null },
  start: string,
  end: string
) => {
  const paths: string[] = [];
  if (distances[end] < Infinity) {
    const path: string[] = [];
    let current: string | null = end;
    while (current !== null) {
      path.push(current);
      current = previous[current];
    }
    path.reverse();
    paths.push(`To ${end}: ${distances[end]} (Path: ${path.join(' >>> ')})`);
  } else {
    paths.push(`No path found from ${start} to ${end}.`);
  }
  return paths;
};

export const drawPaths = (previous: { [key: string]: string | null }, end: string) => {
  let current: string | null = end;
  const lines: JSX.Element[] = [];

  while (current !== null) {
    const _prevLocation:any = previous[current];
    if (_prevLocation !== null) {
      const start = locationCoordinates[_prevLocation];
      const finish = locationCoordinates[current];
      if (start && finish) {
        lines.push(
          <line
            x1={start.x}
            y1={start.y}
            x2={finish.x}
            y2={finish.y}
            stroke='blue'
            strokeWidth={2}
            key={current}
          />
        );
      }
    }
    current = _prevLocation;
  }
  return lines;
};