import React, { useState, useEffect, useCallback } from 'react';

const MiniGames: React.FC = () => {
  const [activeGame, setActiveGame] = useState<'typing' | 'memory' | 'tictactoe' | null>(null);

  return (
    <section id="games" className="py-5">
      <div className="container">
        <h2 className="section-title">Mini Games</h2>
        <p className="text-center text-white-50 mb-5">
          Take a break and have some fun! Try these interactive games I built with React.
        </p>
        
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card-custom h-100">
              <div className="text-center mb-4">
                <div style={{ fontSize: '3rem', color: '#aa00ff' }}>
                  <i className="fas fa-keyboard"></i>
                </div>
                <h3 className="h4 text-white mt-3">Typing Speed Game</h3>
                <p className="text-white-50">Test your typing speed with random words!</p>
              </div>
              <button 
                className="btn btn-custom w-100"
                onClick={() => setActiveGame(activeGame === 'typing' ? null : 'typing')}
              >
                {activeGame === 'typing' ? 'Close Game' : 'Play Game'}
              </button>
              
              {activeGame === 'typing' && <TypingGame />}
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card-custom h-100">
              <div className="text-center mb-4">
                <div style={{ fontSize: '3rem', color: '#aa00ff' }}>
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="h4 text-white mt-3">Memory Color Game</h3>
                <p className="text-white-50">Memorize the pattern and repeat it!</p>
              </div>
              <button 
                className="btn btn-custom w-100"
                onClick={() => setActiveGame(activeGame === 'memory' ? null : 'memory')}
              >
                {activeGame === 'memory' ? 'Close Game' : 'Play Game'}
              </button>
              
              {activeGame === 'memory' && <MemoryGame />}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card-custom h-100">
              <div className="text-center mb-4">
                <div style={{ fontSize: '3rem', color: '#aa00ff' }}>
                  <i className="fas fa-times"></i>
                </div>
                <h3 className="h4 text-white mt-3">Tic Tac Toe</h3>
                <p className="text-white-50">Classic X's and O's game for two players!</p>
              </div>
              <button 
                className="btn btn-custom w-100"
                onClick={() => setActiveGame(activeGame === 'tictactoe' ? null : 'tictactoe')}
              >
                {activeGame === 'tictactoe' ? 'Close Game' : 'Play Game'}
              </button>
              
              {activeGame === 'tictactoe' && <TicTacToe />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Typing Speed Game Component
const TypingGame: React.FC = () => {
  const [words] = useState([
    'react', 'javascript', 'typescript', 'bootstrap', 'developer', 'portfolio',
    'creative', 'innovation', 'technology', 'programming', 'frontend', 'backend',
    'database', 'api', 'responsive', 'animation', 'interactive', 'modern'
  ]);
  const [currentWord, setCurrentWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wpm, setWpm] = useState(0);

  const getRandomWord = useCallback(() => {
    return words[Math.floor(Math.random() * words.length)];
  }, [words]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(60);
    setCurrentWord(getRandomWord());
    setUserInput('');
  };

  const endGame = () => {
    setIsPlaying(false);
    setWpm(Math.round((score / 60) * 60));
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [isPlaying, timeLeft]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    
    if (value === currentWord) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
      setUserInput('');
    }
  };

  return (
    <div className="mt-4">
      {!isPlaying ? (
        <div className="text-center">
          <button className="btn btn-custom" onClick={startGame}>
            Start Game
          </button>
          {wpm > 0 && (
            <div className="mt-3">
              <h5 className="text-white">Final Score: {wpm} WPM</h5>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-white">Time: {timeLeft}s</span>
            <span className="text-white">Score: {score}</span>
          </div>
          <div className="mb-3">
            <h4 className="text-center text-white mb-3">{currentWord}</h4>
            <input
              type="text"
              className="form-control"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type the word..."
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Memory Color Game Component
const MemoryGame: React.FC = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [level, setLevel] = useState(1);
  const [isShowing, setIsShowing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const generateSequence = () => {
    const newSequence = [];
    for (let i = 0; i < level; i++) {
      newSequence.push(Math.floor(Math.random() * colors.length));
    }
    return newSequence;
  };

  const startGame = () => {
    setIsPlaying(true);
    setLevel(1);
    setScore(0);
    const newSequence = generateSequence();
    setSequence(newSequence);
    setUserSequence([]);
    showSequence(newSequence);
  };

  const showSequence = (seq: number[]) => {
    setIsShowing(true);
    seq.forEach((colorIndex, index) => {
      setTimeout(() => {
        // Highlight the color
        const colorElement = document.getElementById(`color-${colorIndex}`);
        if (colorElement) {
          colorElement.style.transform = 'scale(1.2)';
          colorElement.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
        }
      }, index * 800);
      
      setTimeout(() => {
        // Reset the color
        const colorElement = document.getElementById(`color-${colorIndex}`);
        if (colorElement) {
          colorElement.style.transform = 'scale(1)';
          colorElement.style.boxShadow = 'none';
        }
      }, index * 800 + 400);
    });
    
    setTimeout(() => {
      setIsShowing(false);
    }, seq.length * 800);
  };

  const handleColorClick = (colorIndex: number) => {
    if (isShowing || !isPlaying) return;
    
    const newUserSequence = [...userSequence, colorIndex];
    setUserSequence(newUserSequence);
    
    if (newUserSequence[newUserSequence.length - 1] !== sequence[newUserSequence.length - 1]) {
      // Game over
      setIsPlaying(false);
      alert(`Game Over! Your score: ${score}`);
    } else if (newUserSequence.length === sequence.length) {
      // Level completed
      setScore(score + level);
      setLevel(level + 1);
      const newSequence = generateSequence();
      setSequence(newSequence);
      setUserSequence([]);
      setTimeout(() => showSequence(newSequence), 1000);
    }
  };

  return (
    <div className="mt-4">
      {!isPlaying ? (
        <div className="text-center">
          <button className="btn btn-custom" onClick={startGame}>
            Start Game
          </button>
          {score > 0 && (
            <div className="mt-3">
              <h5 className="text-white">Final Score: {score}</h5>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-white">Level: {level}</span>
            <span className="text-white">Score: {score}</span>
          </div>
          <div className="row g-2">
            {colors.map((color, index) => (
              <div key={index} className="col-4">
                <div
                  id={`color-${index}`}
                  className="color-button"
                  style={{
                    backgroundColor: color,
                    width: '100%',
                    height: '60px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={() => handleColorClick(index)}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <small className="text-white-50">
              {isShowing ? 'Watch the pattern...' : 'Repeat the pattern!'}
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

// Tic Tac Toe Game Component
const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ xWins: 0, oWins: 0, draws: 0 });

  const calculateWinner = (squares: string[]): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setGameOver(true);
      // Update scores
      setScores(prev => ({
        ...prev,
        xWins: prev.xWins + (newWinner === 'X' ? 1 : 0),
        oWins: prev.oWins + (newWinner === 'O' ? 1 : 0)
      }));
    } else if (newBoard.every(square => square !== '')) {
      setGameOver(true);
      // Update draws
      setScores(prev => ({
        ...prev,
        draws: prev.draws + 1
      }));
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setXIsNext(true);
    setWinner(null);
    setGameOver(false);
  };

  const resetScores = () => {
    setScores({ xWins: 0, oWins: 0, draws: 0 });
  };

  const renderSquare = (index: number) => (
    <button
      className="btn btn-outline-light btn-lg"
      style={{
        width: '80px',
        height: '80px',
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        color: board[index] === 'X' ? '#ff6b6b' : '#4ecdc4'
      }}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (gameOver) {
      return 'Game is a draw!';
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="mt-4">
      <div className="text-center mb-3">
        <h5 className="text-white mb-3">{getStatus()}</h5>
        
        {/* Score Table */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card-custom p-3">
              <h6 className="text-white mb-3">Score Board</h6>
              <div className="row text-center" style={{ minHeight: '80px' }}>
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                  <div className="text-white">
                    <div style={{ fontSize: '1.5rem', color: '#ff6b6b' }}>X</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{scores.xWins}</div>
                    <small className="text-white-50">Wins</small>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                  <div className="text-white">
                    <div style={{ fontSize: '1.5rem', color: '#4ecdc4' }}>O</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{scores.oWins}</div>
                    <small className="text-white-50">Wins</small>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                  <div className="text-white">
                    <div style={{ fontSize: '1.5rem', color: '#feca57' }}>Draws</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{scores.draws}</div>
                    <small className="text-white-50">Ties</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="grid-container">
            <div className="row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <button className="btn btn-custom me-2" onClick={resetGame}>
            New Game
          </button>
          <button className="btn btn-outline-light" onClick={resetScores}>
            Reset Scores
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniGames; 