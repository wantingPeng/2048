export default class Tile{
  constructor(container, value=Math.random()>0.5?2:4)
  { 
   this.tileElement=document.createElement('div')
   this.tileElement.classList.add('tile')
    container.append(this.tileElement)
    this.value=value
    this.x
    this.y
  }
set x(xvalue){
  this.tileElement.style.setProperty('--tileIndex-x', xvalue)
}
set y(yvalue){
  this.tileElement.style.setProperty('--tileIndex-y', yvalue)

}
 
}

