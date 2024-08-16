export default class Tile{
  constructor(tileElement, value=Math.random()>0.5?2:4)
  {
    this.tileElement=tileElement
    this.value=value
  }

 
}

