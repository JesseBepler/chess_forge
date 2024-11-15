document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        
        // Alternate color based on row and column
        if ((row + col) % 2 === 0) {
          square.classList.add('light-square'); // Light squares
        } else {
          square.classList.add('dark-square'); // Dark squares
        }
        
        chessboard.appendChild(square);
      }
    }
  });
  