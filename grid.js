const cellNumer = 16;
const gridTemplate = 4;
//Each grid has cells, so I need to automatically complete the creat cell when new Grid(boardEle) is created
////So I need a creatCellElements() in the constructor to be automatically executed, and the cell will definitely exist in js as an instance rather than a pure element
import Cell from "./cell.js";

export default class Grid {
  constructor(boardElement) {
    this.boardElement = boardElement;
    this.cells = creatCellElements().map((el, index) => {
      boardElement.append(el);
      return new Cell(
        el,
        index % gridTemplate,
        Math.floor(index / gridTemplate)
      );
    }); //Locate x, y by index
    log(this.cells);
  }
  //Randomly select two cells and create a tile. Set the x and y of the tile to the x and y of the cell.
  //To achieve random selection of cells, it means that the cell is an actual column rather than an element in HTML, where there are parameters such as element tile x, y, etc.
  ////this.cells is a property in grid so this equation must be a method in grid and can be called in script
  randomEmptyCell() {
    log(this.cells);
    const EmptyCells = this.cells.filter((el) => el.tileobj == null); ////Find the cell without tile
    log(EmptyCells);
    //Randomly select a number from all empty cells and return the cell with this number
    let selectedEmpCell =
      EmptyCells[Math.floor(Math.random() * EmptyCells.length)];

    return selectedEmpCell;
    //Add a tile to this cell. this.tile is a property in the cell. Use the set tile() function in the cell to implement it.
  }

  columnArr() {
    const columnArr = this.cells.reduce((arrColu, currentCell) => {
      arrColu[currentCell.x] = arrColu[currentCell.x] || [];
      arrColu[currentCell.x][currentCell.y] = currentCell;
      return arrColu;
    }, []);
    return columnArr;
  }
  rowArr() {
    const rowArrArr = this.cells.reduce((arrColu, currentCell) => {
      arrColu[currentCell.y] = arrColu[currentCell.y] || [];
      arrColu[currentCell.y][currentCell.x] = currentCell;
      return arrColu;
    }, []);
    return rowArrArr;
  }
}

function creatCellElements() {
  let cellELs = [];
  for (let i = 0; i < cellNumer; i++) {
    const cellEL = document.createElement("div");
    cellEL.classList.add("cell");
    cellELs.push(cellEL);
  }
  log(cellELs);
  return cellELs;
}
