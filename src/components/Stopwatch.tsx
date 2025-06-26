import React, { useState, useEffect, useRef } from 'react';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    if (isRunning) {
      setLaps(prevLaps => [...prevLaps, time]);
    }
  };

  const formatTime = (timeInMs: number) => {
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    const milliseconds = Math.floor((timeInMs % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const getLapTime = (lapTime: number, index: number) => {
    if (index === 0) {
      return formatTime(lapTime);
    }
    const previousLap = laps[index - 1];
    return formatTime(lapTime - previousLap);
  };

  return (
    <div className="stopwatch-container">
      <div className="text-center mb-4">
        <div className="display-4 text-white mb-3" style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
          {formatTime(time)}
        </div>
        
        <div className="d-flex justify-content-center gap-2 mb-4">
          {!isRunning ? (
            <button 
              className="btn btn-success btn-lg"
              onClick={startStopwatch}
            >
              <i className="fas fa-play me-2"></i>
              Start
            </button>
          ) : (
            <button 
              className="btn btn-danger btn-lg"
              onClick={stopStopwatch}
            >
              <i className="fas fa-pause me-2"></i>
              Stop
            </button>
          )}
          
          <button 
            className="btn btn-warning btn-lg"
            onClick={addLap}
            disabled={!isRunning}
          >
            <i className="fas fa-flag me-2"></i>
            Lap
          </button>
          
          <button 
            className="btn btn-secondary btn-lg"
            onClick={resetStopwatch}
          >
            <i className="fas fa-redo me-2"></i>
            Reset
          </button>
        </div>
      </div>

      {/* Laps Display */}
      {laps.length > 0 && (
        <div className="laps-container">
          <h6 className="text-white mb-3">
            <i className="fas fa-list-ol me-2" style={{ color: '#aa00ff' }}></i>
            Laps ({laps.length})
          </h6>
          <div className="laps-list" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {laps.map((lap, index) => (
              <div 
                key={index} 
                className="d-flex justify-content-between align-items-center p-2 mb-2"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(170, 0, 255, 0.2)'
                }}
              >
                <span className="text-white-50">Lap {index + 1}</span>
                <div className="text-end">
                  <div className="text-white" style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                    {getLapTime(lap, index)}
                  </div>
                  <small className="text-white-50" style={{ fontFamily: 'monospace' }}>
                    {formatTime(lap)}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-4 text-center">
        <small className="text-white-50">
          <i className="fas fa-info-circle me-1" style={{ color: '#aa00ff' }}></i>
          Use Start/Stop to control the timer, Lap to record split times, and Reset to clear everything.
        </small>
      </div>
    </div>
  );
};

export default Stopwatch; 