import Grid from "./grid.js";
import Cell from "./cell.js";
import Tile from "./tiles.js";
globalThis.log = console.log;
////You can imagine there are 3 class grids, tile and cell class grids, and you only need to pass in a boardElement parameter to create a real instanse
//Class cell requires the cellelement parameter, as well as the x and y position feature information to create a cell instance.
//The class tile requires tileElement and value to create a tile instance. The x and y position information is not a feature of the cell, but a variable that changes continuously.
const boardEle = document.querySelector(".board");
const board = new Grid(boardEle);
let EmptyCell_1 = board.randomEmptyCell();
EmptyCell_1.tile = new Tile(boardEle);
let EmptyCell_2 = board.randomEmptyCell();

/* const TileElement_1 = creatTileElement()
const TileElement_2 = creatTileElement()
const TileElement = creatTileElement() */

EmptyCell_2.tile = new Tile(boardEle);

//add a one-time eventlistener an keydown, press the up, down, left, and right keys to execute the tileMove() equation, if other keys are pressed, call the listener again
//If you want to move, you must get the 2*2 cell array so that the tile can move around
//tileMove(): press arrowup to move all tiles upwards, if there is a tile above, do not move, if there is a tile above but the tile.value is the same as the tile.value of this verification, merge
//For moving upwards, I need to get the column array, loop through each column and then loop through the cells in each column, cell[1], cell[2], dell[3],
//For cell[3], if cell[2] is empty or has the same value, move, and continue to check cell[1], cell[0], move to the last reachable cell, and remove the original tile position after moving,
addListener();

function addListener() {
  window.addEventListener("keydown", keybord);
}
//{once:true}
////I want to convert the original one-dimensional array into a two-dimensional array, and each coulum is an arr
const columnArr = board.columnArr();
const rowArrArr = board.rowArr();

function keybord(e) {
  switch (e.key) {
    case "ArrowUp":
      {
        tileMove(columnArr);
      }
      break;
    case "ArrowDown":
      {
        tileMove(columnArr.map((el) => [...el].reverse()));
      }
      break;
    case "ArrowLeft":
      {
        tileMove(rowArrArr);
      }
      break;
    case "ArrowRight":
      {
        tileMove(rowArrArr.map((el) => [...el].reverse()));
      }
      break;
    default: {
      addListener();
      return;
    }
  }

  addListener();
}

//loop loops through each column and then loops through each cell and gets the cell inside,
//For each cell, for example, cell[3] if cell[2] is empty or has the same value, then continue to check cell[1], cell[0], and immediately exit the loop if the condition is not met,
//At the same time, remember the last cell that meets the condition and then move to the last reachable cell. After moving, remove the original tile position,

function tileMove(columnArr) {
  let callRandomCellFlag = false;

  columnArr.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      const targetCell = arr[i];
      if (targetCell.tileobj == null) continue;
      let lastVaildCell;
      for (let j = i - 1; j >= 0; j--) {
        const nextCell = arr[j];
        if (
          nextCell.tileobj == null ||
          (nextCell.tileobj.value == targetCell.tileobj.value &&
            !targetCell.tileobj.mergenMark)
        ) {
          lastVaildCell = nextCell;
          callRandomCellFlag = true;
        } else break;
      }

      ////How to move the targetCell's tile to the position of the lastVaildCell
      //soulution, targetCell.tileobj.x=lastVaildCell..tileobj.x
      if (lastVaildCell == null) {
        continue;
      } else if (!targetCell.mergen(lastVaildCell)) {
        targetCell.moveTargetTile(lastVaildCell);
      }
      log(targetCell);
      log(lastVaildCell);
    }
    columnArr.forEach((arr) =>
      arr.forEach((cell) => {
        if (cell.tileobj) cell.tileobj.mergenMark = false;
      })
    );
  });
  if (callRandomCellFlag) {
    let randomCell = board.randomEmptyCell();
    randomCell.tile = new Tile(boardEle);
  } else if (
    !callRandomCellFlag &&
    board.cells.every((cell) => cell.tileobj != null)
  )
    alert("you lose");
}
