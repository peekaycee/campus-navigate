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

const CampusNavigation: React.FC = () => {
  const [start, setStart] = useState<string>('Front Gate');
  const [end, setEnd] = useState<string>('Social Sciences');
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showStartDropdown, setShowStartDropdown] = useState<boolean>(false);
  const [showEndDropdown, setShowEndDropdown] = useState<boolean>(false);

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
    setShowStartDropdown(true);
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
    setShowEndDropdown(true);
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
    setResult(paths);
    setLoading(false);
  };

  return (
    <div className='container'>
      <h1 className='header'>Campus Navigation</h1>

      <div className='label'>
        <label>
          Starting Location:
          <input
            placeholder='Type in where are you now'
            type='text'
            value={start}
            onChange={handleStartChange}
            className='input'
          />
        </label>
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
        <label>
          Destination:
          <input
            placeholder='Where would you like to go?'
            type='text'
            value={end}
            onChange={handleEndChange}
            className='input'
          />
        </label>
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

      <button onClick={findShortestPaths} className='button'>
        Find Shortest Path
      </button>

      {loading && <p>Loading...</p>}
      {result.length > 0 && (
        <div>
          <h2>Results:</h2>
          <ul>
            {result.map((path, index) => (
              <li key={index}>{path}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CampusNavigation;
