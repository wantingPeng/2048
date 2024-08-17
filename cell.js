
export default class Cell{
  constructor(cellElement, x, y){
    this.cellElement=cellElement
    this.x=x;
    this.y=y
    this.tileobj
  }

  set tile(newTile){
    //给this.tile 传递 new tile ()
    this.tileobj=newTile
    log(this.tileobj)
    this.tileobj.x=this.x
    this.tileobj.y=this.y
  }

}

