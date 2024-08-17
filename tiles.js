export default class Tile{
  constructor(container, value=Math.random()>0.5?2:4)
  { 
   this.tileElement=document.createElement('div')
   this.tileElement.classList.add('tile')
   this.tileElement.textContent=value
    container.append(this.tileElement)
    this.value=value
    this.x
    this.y
    this.lightness=value//call set lightness(value)
  }
set x(xvalue){
  this.tileElement.style.setProperty('--tileIndex-x', xvalue)
}
set y(yvalue){
  this.tileElement.style.setProperty('--tileIndex-y', yvalue)

}
set lightness(value){
//Math.log2(2048) returns 11. 所以按100% 来分 11个挡位变化， 每次lightness 变9
const lightness=100-Math.log2(this.value) * 9//越小越亮
this.tileElement.style.setProperty('--lightness', `${lightness}%`)
}
}


