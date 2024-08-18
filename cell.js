
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
  this.tileobj.tile_x= this.x
  this.tileobj.tile_y= this.y

  }

  remove(){
    this.tileobj
   
   } 
  moveTargetTile(lastVaildCell){
    lastVaildCell.tile=this.tileobj
    this.tileobj=null 
   
}

  mergen(lastVaildCell){
    if (lastVaildCell.tileobj ){
      lastVaildCell.tileobj.mergenValue=this.tileobj.value+lastVaildCell.tileobj.value;
/*       this.tileobj=null
 */      this.tileobj.remove()
          this.tileobj=null 
          lastVaildCell.tileobj.mergenMark=true

return  true

    }
    else return  false



  }

}


