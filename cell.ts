import Tile from "./tiles";

export default class Cell {
  cellElement: HTMLElement;
  x: number;
  y: number;
  tileobj: Tile | null; //this.tileobj = null;

  constructor(cellElement: HTMLElement, x: number, y: number) {
    this.cellElement = cellElement;
    this.x = x;
    this.y = y;
    this.tileobj;
  }

  set tile(newTile: Tile) {
    // Pass new tile () to this.tile
    this.tileobj = newTile;
    this.tileobj.tile_x = this.x;
    this.tileobj.tile_y = this.y;
  }

  remove() {
    this.tileobj;
  }
  moveTargetTile(lastVaildCell: Cell): void {
    lastVaildCell.tile = this.tileobj as Tile;
    this.tileobj = null;
  }

  mergen(lastVaildCell: Cell): boolean {
    if (lastVaildCell.tileobj) {
      lastVaildCell.tileobj.mergenValue =
        (this.tileobj as Tile).value + lastVaildCell.tileobj.value;
      /*       this.tileobj=null
       */ (this.tileobj as Tile).remove();
      this.tileobj = null;
      lastVaildCell.tileobj.mergenMark = true;

      return true;
    } else return false;
  }
}
