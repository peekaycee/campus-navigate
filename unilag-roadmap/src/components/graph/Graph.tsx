/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Graph.css';

type Graph = {
  [key: string]: { [key: string]: number };
};

const graph: Graph = {
  'First-Gate': {
    Education: 5,
  },
  Education: {
    'First-Gate': 5,
    Elkanrmi: 4,
    'Environmental Science': 3,
  },
  Elkanrmi: {
    Education: 4,
    'Femi Gbajabiamila Hostel': 2,
    'Kofo Hall': 3,
  },
  'Femi Gbajabiamila Hostel': {
    Elkanrmi: 2,
  },
  'Kofo Hall': {
    Elkanrmi: 3,
    'Queen Amina Hall': 2,
  },
  'Queen Amina Hall': {
    'Kofo Hall': 2,
    'Biobaku Hostel': 2,
  },
  'Biobaku Hostel': {
    'Queen Amina Hall': 2,
    Firstbank: 1,
  },
  Firstbank: {
    'Biobaku Hostel': 1,
    'Cross-Junction': 1,
  },
  'Cross-Junction': {
    Firstbank: 1,
    'Second-Gate': 4,
    'Medical Center': 2,
    DLI: 2,
    'Iya Moria': 1,
    'Women Society': 1,
    "Honour's Hall": 2,
    'FSS Complex': 2,
  },
  'Second-Gate': {
    'Cross-Junction': 4,
    'Medical Center': 2,
  },
  'Medical Center': {
    'Cross-Junction': 2,
    'Access Bank': 2,
  },
  DLI: {
    'Cross-Junction': 2,
    'Iya Moria': 1,
  },
  'Iya Moria': {
    DLI: 1,
    'Women Society': 1,
  },
  'Women Society': {
    'Iya Moria': 1,
    "Honour's Hall": 2,
  },
  "Honour's Hall": {
    'Women Society': 2,
  },
  'FSS Complex': {
    'Cross-Junction': 2,
    FSS: 1,
  },
  FSS: {
    'FSS Complex': 1,
    Nithub: 1,
  },
  Nithub: {
    FSS: 1,
    Works: 1,
  },
  Works: {
    Nithub: 1,
    'T-Junction': 2,
  },
  'Environmental Science': {
    Education: 3,
    'Sport Center': 2,
  },
  'Sport Center': {
    'Environmental Science': 2,
    'Church 1': 2,
  },
  'Church 1': {
    'Sport Center': 2,
    'Church 2': 1,
  },
  'Church 2': {
    'Church 1': 1,
    Mosque: 1,
  },
  Mosque: {
    'Church 2': 1,
    'Petro Station': 1,
  },
  'Petro Station': {
    Mosque: 1,
    'T-Junction': 2,
  },
  'T-Junction': {
    Works: 2,
    'Petro Station': 2,
    'Access Bank': 2,
  },
  'Access Bank': {
    'T-Junction': 2,
    'New Hall': 3,
  },
  'New Hall': {
    'Access Bank': 3,
    'Medical Center': 4,
  },
};

// Define coordinates for locations
const locationCoordinates: { [key: string]: { x: number; y: number } } = {
  'First-Gate': { x: 50, y: 50 },
  Education: { x: 150, y: 150 },
  Elkanrmi: { x: 200, y: 200 },
  'Femi Gbajabiamila Hostel': { x: 250, y: 250 },
  'Kofo Hall': { x: 300, y: 300 },
  'Queen Amina Hall': { x: 350, y: 350 },
  'Biobaku Hostel': { x: 400, y: 400 },
  Firstbank: { x: 450, y: 450 },
  'Cross-Junction': { x: 500, y: 500 },
  'Second-Gate': { x: 550, y: 550 },
  'Medical Center': { x: 600, y: 600 },
  DLI: { x: 650, y: 650 },
  'Iya Moria': { x: 700, y: 700 },
  'Women Society': { x: 750, y: 750 },
  "Honour's Hall": { x: 800, y: 800 },
  'FSS Complex': { x: 850, y: 850 },
  FSS: { x: 900, y: 900 },
  Nithub: { x: 950, y: 950 },
  Works: { x: 1000, y: 1000 },
  'Environmental Science': { x: 1050, y: 1050 },
  'Sport Center': { x: 1100, y: 1100 },
  'Church 1': { x: 1150, y: 1150 },
  'Church 2': { x: 1200, y: 1200 },
  Mosque: { x: 1250, y: 1250 },
  'Petro Station': { x: 1300, y: 1300 },
  'T-Junction': { x: 1350, y: 1350 },
  'Access Bank': { x: 1400, y: 1400 },
  'New Hall': { x: 1450, y: 1450 },
};

const locations = Object.keys(graph);

type Result = {
  distances: { [key: string]: number };
  previous: { [key: string]: string | null };
};

const graphModel = (graph: Graph, start: string, _end: string): Result => {
  const queue: [number, string][] = [];
  queue.push([0, start]);

  const distances: { [key: string]: number } = {};
  for (const location in graph) {
    distances[location] = Infinity;
  }
  distances[start] = 0;

  const previous: { [key: string]: string | null } = {};
  for (const location in graph) {
    previous[location] = null;
  }

  while (queue.length > 0) {
    const [currentDistance, currentLocation] = queue.shift()!;

    if (currentDistance > distances[currentLocation]) {
      continue;
    }

    for (const neighbor in graph[currentLocation]) {
      const weight = graph[currentLocation][neighbor];
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentLocation;
        queue.push([distance, neighbor]);
        queue.sort((a, b) => a[0] - b[0]);
      }
    }
  }

  return { distances, previous };
};

const printShortestPaths = (
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
    paths.push(`To ${end}: ${distances[end]} (Path: ${path.join(' -> ')})`);
  } else {
    paths.push(`No path found from ${start} to ${end}.`);
  }
  return paths;
};

// Visualization component for drawing lines
const drawPaths = (previous: { [key: string]: string | null }, end: string) => {
  let current: string | null = end;
  const lines: JSX.Element[] = [];

  while (current !== null) {
    const prevLocation: any = previous[current];
    if (prevLocation !== null) {
      const start = locationCoordinates[prevLocation];
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
    current = prevLocation;
  }
  return lines;
};

const CampusNavigation: React.FC = () => {
  const [start, setStart] = useState<string>('Where you are now');
  const [end, setEnd] = useState<string>('Where are you going to?');
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showStartDropdown, setShowStartDropdown] = useState<boolean>(false);
  const [showEndDropdown, setShowEndDropdown] = useState<boolean>(false);

  // ====Include Path when needed ==========
  const [path, setPath] = useState<string[]>([]);
  const [lines, setLines] = useState<JSX.Element[]>([]);

  // Load locations from localStorage when the component mounts
  useEffect(() => {
    const savedStart = localStorage.getItem('startLocation');
    const savedEnd = localStorage.getItem('endLocation');
    if (savedStart) setStart(savedStart);
    if (savedEnd) setEnd(savedEnd);
  }, []);

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStart(value);
    localStorage.setItem('startLocation', value); // Save to localStorage
    setFilteredLocations(
      locations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowStartDropdown(value.trim() !== ''); // Show dropdown only if input is not empty
    setShowEndDropdown(false); // Hide end dropdown
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEnd(value);
    localStorage.setItem('endLocation', value); // Save to localStorage
    setFilteredLocations(
      locations.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowEndDropdown(value.trim() !== ''); // Show dropdown only if input is not empty
    setShowStartDropdown(false); // Hide start dropdown
  };

  const selectLocation = (location: string, isStart: boolean) => {
    if (isStart) {
      setStart(location);
      localStorage.setItem('startLocation', location); // Save selected location
      setShowStartDropdown(false);
    } else {
      setEnd(location);
      localStorage.setItem('endLocation', location); // Save selected location
      setShowEndDropdown(false);
    }
    setFilteredLocations([]);
  };

  const findShortestPaths = () => {
    setLoading(true);
    const { distances, previous } = graphModel(graph, start, end);
    const paths = printShortestPaths(distances, previous, start, end);
    const drawnPaths = drawPaths(previous, end);
    setLines(drawnPaths);
    setPath(paths);
    setLoading(false);
  };

  return (
    <section className='main-bg'>
      <div className='container'>
        <h1 className='header'>CampusNavigate</h1>

        <div className='label'>
          <label htmlFor='start'>Starting Location:</label>
          <input
            id='start'
            type='text'
            value={start}
            onChange={handleStartChange}
            className='input'
          />
          {showStartDropdown && filteredLocations.length > 0 && (
            <ul className='dropdown'>
              {filteredLocations.map((location, index) => (
                <li
                  key={index}
                  onClick={() => selectLocation(location, true)}
                  className='dropdown-item'>
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='label'>
          <label htmlFor='end'> Destination:</label>
          <input
            id='end'
            type='text'
            value={end}
            onChange={handleEndChange}
            className='input'
          />
          {showEndDropdown && filteredLocations.length > 0 && (
            <ul className='dropdown'>
              {filteredLocations.map((location, index) => (
                <li
                  key={index}
                  onClick={() => selectLocation(location, false)}
                  className='dropdown-item'>
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button onClick={findShortestPaths} className='submit-button'>
          Find Shortest Path
        </button>

        {/* Result List */}
        {loading && <p>Loading...</p>}
        {/* <div className='results'>
        {path.map((path, index) => (
          <p key={index}>{path}</p>
        ))}
      </div> */}
      </div>
      <div className='svg'>
        <svg width='100%' height='600'>
          {Object.keys(locationCoordinates).map((location) => {
            const { x, y } = locationCoordinates[location];
            return (
              <circle
                key={location}
                cx={x}
                cy={y}
                r={5}
                fill='red'
                stroke='dodgerblue'
                strokeWidth={1}
              />
            );
          })}
          {lines}
        </svg>
      </div>
    </section>
  );
};

export default CampusNavigation;
