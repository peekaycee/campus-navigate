import React, { useState, useEffect } from 'react';
import './Graph.css';
import graph from './GraphNodes';
import graphModel from './GraphModel';
import locationCoordinates from './Cordinates';
import { printShortestPaths, drawPaths } from './Paths';
import { FaMapMarkerAlt } from 'react-icons/fa';

const locations = Object.keys(graph);

const CampusNavigation: React.FC = () => {
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [path, setPath] = useState<string[]>([]);
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedStart = localStorage.getItem('startLocation');
    const savedEnd = localStorage.getItem('endLocation');
    if (savedStart) setStart(savedStart);
    if (savedEnd) setEnd(savedEnd);
  }, []);

  const handleStartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setStart(value);
    localStorage.setItem('startLocation', value);
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setEnd(value);
    localStorage.setItem('endLocation', value);
  };

  const findShortestPaths = () => {
    if (!graph[start] || !graph[end]) {
      setErrorMessage('Invalid start or end location.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const { distances, previous } = graphModel(graph, start, end);
    const paths = printShortestPaths(distances, previous, start, end);

    if (!paths || paths.length === 0) {
      setErrorMessage('No path found between the selected locations.');
      setLoading(false);
      return;
    }

    const drawnPaths = drawPaths(previous, end);
    setLines(drawnPaths);
    setPath(paths);
    setLoading(false);
  };

  return (
    <section className='main-bg'>
      <div className='container'>
        <div className='users-input'>
          <h1 className='header'>CampusNavigate</h1>

          <div className='label'>
            <label htmlFor='start'>Starting Location:</label>
            <select
              id='start'
              value={start}
              onChange={handleStartChange}
              className='input'
            >
              <option value=''>Select your starting location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className='label'>
            <label htmlFor='end'>Destination:</label>
            <select
              id='end'
              value={end}
              onChange={handleEndChange}
              className='input'
            >
              <option value=''>Select your destination</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <button onClick={findShortestPaths} className='submit-button'>
            Find Shortest Path
          </button>

          {loading && <p>Loading...</p>}
          {errorMessage && <p className='error'>{errorMessage}</p>}
          {path.length > 0 && (
            <div className='results'>
              {path.map((pathSegment, index) => (
                <p key={index}>{pathSegment}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SVG map rendering */}
      <div className='svg'>
        <svg width='100%' height='600' viewBox={'0 0 1000 600'}>
          {Object.keys(locationCoordinates).map((location) => {
            const { x, y } = locationCoordinates[location];
            return (
              <React.Fragment key={location}>
                {/* Render dynamic location icons */}
                {(location === start || location === end) && (
                  <foreignObject x={x - 10} y={y - 35} width={30} height={30}>
                    <FaMapMarkerAlt
                      style={{
                        color: location === start ? 'blue' : 'green',
                        fontSize: '1px',
                      }}
                    />
                  </foreignObject>
                )}

                {/* Render circle for location */}
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  fill='red'
                  stroke='dodgerblue'
                  strokeWidth={1}
                />

                {/* Render text beside the circle */}
                <text x={x - 18} y={y + 15} fontSize='12' fill='black'>
                  {location}
                </text>
              </React.Fragment>
            );
          })}
          {lines} {/* Paths between locations */}
        </svg>
      </div>
    </section>
  );
};

export default CampusNavigation;
