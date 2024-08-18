
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
    this.tileobj.tile_x=this.x
    this.tileobj.tile_y=this.y
  }

  moveTargetTile(lastVaildCell){
  /*  this.tileobj.tile_x=lastVaildCell.x
    this.tileobj.tile_y=lastVaildCell.y 
 */
    lastVaildCell.tile=this.tileobj
    this.tileobj=null
  }

}


