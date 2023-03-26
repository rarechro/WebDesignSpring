function tableBuilder(){
    const table = document.getElementById("chessboard");
    let i = 1;
  
    // loop through the rows of the table
    for (let row of table.rows) {
      i++;
  
      // loop through the cells of each row
      for (let cell of row.cells) {
        i++;
  
        // check if the cell is an even square
        if (i % 2 == 0) {
          // add a CSS class to the cell to differentiate it from the odd squares
          cell.classList.add("even-square");
          cell.style.backgroundColor = "#9e6223";
          // add a data attribute to the cell that indicates its position on the board
          cell.dataset.position = `${row.rowIndex}-${cell.cellIndex}`;
  
          // create a checker piece and add it to the cell
          if (row.rowIndex < 3) {
            const piece = document.createElement("div");
            piece.classList.add("checker-piece", "red");
            cell.appendChild(piece);
          } else if (row.rowIndex > 4) {
            const piece = document.createElement("div");
            piece.classList.add("checker-piece", "black");
            cell.appendChild(piece);
          }
        } else {
          // set the background color of the odd squares
          cell.style.backgroundColor = "#f5d6a9";
        }
      }
    }
  
















    
  // add click event listeners to the even squares that contain checkers pieces
const evenSquares = document.querySelectorAll(".even-square");
evenSquares.forEach(square => {
  const piece = square.querySelector(".checker-piece");
  if (piece) {
    square.addEventListener("click", () => {
      // get the position of the selected piece
      const currentPosition = square.dataset.position;

      // get the available moves for the selected piece
      const availableMoves = getAvailableMoves(currentPosition);

      // add a class to the available move cells
      availableMoves.forEach(move => {
        const [row, cell] = move.split("-");
        table.rows[row].cells[cell].classList.add("available-move");
      });

      // add a click event listener to the available move cells
      const availableMoveCells = document.querySelectorAll(".available-move");
      availableMoveCells.forEach(moveCell => {
        moveCell.addEventListener("click", () => {
          // get the position of the clicked cell
          const clickedPosition = moveCell.dataset.position;
          function tableBuilder(){
            const table = document.getElementById("chessboard");
            let i = 1;
          
            // loop through the rows of the table
            for (let row of table.rows) {
              i++;
          
              // loop through the cells of each row
              for (let cell of row.cells) {
                i++;
          
                // check if the cell is an even square
                if (i % 2 == 0) {
                  // add a CSS class to the cell to differentiate it from the odd squares
                  cell.classList.add("even-square");
          
                  // add a data attribute to the cell that indicates its position on the board
                  cell.dataset.position = `${row.rowIndex}-${cell.cellIndex}`;
          
                  // create a checker piece and add it to the cell
                  if (row.rowIndex < 3) {
                    const piece = document.createElement("div");
                    piece.classList.add("checker-piece", "red");
                    cell.appendChild(piece);
                  } else if (row.rowIndex > 4) {
                    const piece = document.createElement("div");
                    piece.classList.add("checker-piece", "black");
                    cell.appendChild(piece);
                  }
                } else {
                  // set the background color of the odd squares
                  cell.style.backgroundColor = "#f5d6a9";
                }
              }
            }
        
        
        
        
        
        
        
        
        
        
        
          // add click event listeners to the even squares that contain checkers pieces
        const evenSquares = document.querySelectorAll(".even-square");
        evenSquares.forEach(square => {
          const piece = square.querySelector(".checker-piece");
          if (piece) {
            square.addEventListener("click", () => {
              // get the position of the selected piece
              const currentPosition = square.dataset.position;
        
              // get the available moves for the selected piece
              const availableMoves = getAvailableMoves(currentPosition);
        
              // add a class to the available move cells
              availableMoves.forEach(move => {
                const [row, cell] = move.split("-");
                table.rows[row].cells[cell].classList.add("available-move");
              });
        
              // add a click event listener to the available move cells
              const availableMoveCells = document.querySelectorAll(".available-move");
              availableMoveCells.forEach(moveCell => {
                moveCell.addEventListener("click", () => {
                  // get the position of the clicked cell
                  const clickedPosition = moveCell.dataset.position;
        
                  // move the selected piece to the clicked cell
                  movePiece(currentPosition, clickedPosition);
        
                  // remove the available move indicators
                  availableMoveCells.forEach(moveCell => {
                    moveCell.classList.remove("available-move");
                  });
                });
              });
            });
          }
        })};
        

          // move the selected piece to the clicked cell
          movePiece(currentPosition, clickedPosition);

          // remove the available move indicators
          availableMoveCells.forEach(moveCell => {
            moveCell.classList.remove("available-move");
          });
        });
      });
    });
  }
})};

function getAvailableMoves(currentPosition) {
    // convert the current position to row and cell indices
    const [currentRow, currentCell] = currentPosition.split("-").map(num => parseInt(num));
  
    // get the cell element for the current position
    const currentCellElem = document.querySelector(`[data-position="${currentPosition}"]`);
  
    // determine the color of the selected piece
    const currentPiece = currentCellElem.querySelector(".checker-piece");
    if (!currentPiece) {
      // return an empty array if there is no checker piece in the current cell
      return [];
    }
    const pieceColor = currentPiece.classList.contains("red") ? "red" : "black";
  
    // determine the direction of movement for the selected piece
    const direction = pieceColor === "red" ? 1 : -1;
  
    // check the cells diagonally adjacent to the current position for possible moves
    const availableMoves = [];
  
    // check top left
    if (currentRow + direction >= 0 && currentCell - 1 >= 0) {
      const adjacentCell = document.querySelector(`[data-position="${currentRow + direction}-${currentCell - 1}"]`);
      if (!adjacentCell.dataset.piece) {
        availableMoves.push(`${currentRow + direction}-${currentCell - 1}`);
      }
    }
  
    // check top right
    if (currentRow + direction >= 0 && currentCell + 1 <= 7) {
      const adjacentCell = document.querySelector(`[data-position="${currentRow + direction}-${currentCell + 1}"]`);
      if (!adjacentCell.dataset.piece) {
        availableMoves.push(`${currentRow + direction}-${currentCell + 1}`);
      }
    }
  
    // check if the selected piece is a king and can move backwards
    if (currentPiece.classList.contains("king")) {
      // check bottom left
      if (currentRow - direction <= 7 && currentCell - 1 >= 0) {
        const adjacentCell = document.querySelector(`[data-position="${currentRow - direction}-${currentCell - 1}"]`);
        if (!adjacentCell.dataset.piece) {
          availableMoves.push(`${currentRow - direction}-${currentCell - 1}`);
        }
      }
  
      // check bottom right
      if (currentRow - direction <= 7 && currentCell + 1 <= 7) {
        const adjacentCell = document.querySelector(`[data-position="${currentRow - direction}-${currentCell + 1}"]`);
        if (!adjacentCell.dataset.piece) {
          availableMoves.push(`${currentRow - direction}-${currentCell + 1}`);
        }
      }
    }
  
    return availableMoves;
  }
  
  function movePiece(currentPosition, clickedPosition) {
    // get the cell elements for the current position and clicked position
    const currentCell = document.querySelector(`[data-position="${currentPosition}"]`);
    const clickedCell = document.querySelector(`[data-position="${clickedPosition}"]`);
  
    // get the checker piece element inside the current cell
    const piece = currentCell.querySelector(".checker-piece");
  
    // if the current cell does not contain a checker piece, return early
    if (!piece) {
      return;
    }
  
    // remove the piece from the current cell and add it to the clicked cell
    clickedCell.appendChild(piece);
  
    // remove the data-piece attribute from the current cell and add it to the clicked cell
    const pieceColor = piece.classList.contains("red") ? "red" : "black";
    currentCell.removeAttribute("data-piece");
    clickedCell.setAttribute("data-piece", pieceColor);
  }
  
