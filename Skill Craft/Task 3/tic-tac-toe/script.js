let cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;
const status = document.getElementById('status');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.dataset.index;

    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
      status.textContent = `🎉 Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (board.every(cell => cell)) {
      status.textContent = `It's a draw!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  });
});

function checkWinner() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];
  return wins.some(comb => {
    return comb.every(i => board[i] === currentPlayer);
  });
}

function resetGame() {
  board.fill(null);
  cells.forEach(c => c.textContent = '');
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = `Player ${currentPlayer}'s turn`;
}
