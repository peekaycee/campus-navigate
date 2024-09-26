import React, { useState, useEffect } from 'react';
import './Graph.css';
import graph from './GraphNodes';
import graphModel from './GraphModel';
import locationCoordinates from './Cordinates';
import { printShortestPaths, drawPaths } from './Paths';
import Footer from '../Footer/Footer';
import { FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import Header from '../Header/Header';

const locations = Object.keys(graph);

// Function to generate random colors
const getRandomColor = () => {
  const colors = ['red', 'blue', 'green'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const CampusNavigation: React.FC = () => {
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [path, setPath] = useState<string[]>([]);
  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [info, setInfo] = useState('');

  const handleRefresh = () => {
    window.location.reload();
  };

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
    setInfo('hide');
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
    <main>
      <Header onRefresh={handleRefresh} />
      <section className='main-bg'>
        <div className='container'>
          <div className='users-input'>
            <div className='head'>
              <h1 className='map-header'>CampusNavigate</h1>
            </div>
            <div className='label'>
              <label htmlFor='start'>Starting Location:</label>
              <select
                id='start'
                value={start}
                onChange={handleStartChange}
                className='input'>
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
                className='input'>
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
          </div>
        </div>

        {/* SVG map rendering */}
        <div className='svg'>
          <svg width='100%' height='600' viewBox={'0 0 1000 600'}>
            {Object.keys(locationCoordinates).map((location) => {
              const { x, y } = locationCoordinates[location];
              const randomColor = getRandomColor();
              return (
                <React.Fragment key={location}>
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
                  <circle cx={x} cy={y} r={0} />
                  <foreignObject x={x - 7} y={y - 7} width={30} height={30}>
                    <FaHome style={{ fontSize: '8px', color: randomColor }} />
                  </foreignObject>
                  <text x={x - 18} y={y + 18} fontSize='12' fill='black'>
                    {location}
                  </text>
                </React.Fragment>
              );
            })}
            {lines} {/* Paths between locations */}
          </svg>
        </div>
      </section>
      <section className='message'>
        <div className='results'>
          <p className='info' id={info}>
            See path to follow in text format
          </p>
          {loading && <p>Loading...</p>}
          {errorMessage && <p className='error'>{errorMessage}</p>}
          {path.length > 0 && (
            <div className='results'>
              <p>
                <strong>Shortest Path:</strong>
              </p>
              {path.map((pathSegment, index) => (
                <p key={index}>{pathSegment}</p>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CampusNavigation;
