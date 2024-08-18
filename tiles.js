export default class Tile{
  constructor(container, value=Math.random()>0.5?2:4)
  { 
   this.tileElement=document.createElement('div')
   this.tileElement.classList.add('tile')
   this.tileElement.textContent=value
    container.append(this.tileElement)
    this.value=value
    this.x=null
    this.y=null
    this.lightness=value//call set lightness(value)
  }
set mergenValue(value){
  this.tileElement.textContent=value
  this.value=value 
 this.lightness=value 
}
remove(){
  this.tileElement.remove()
 
 } 
set content(value){
  this.tileElement.textContent=value
}
set tile_x(xvalue){
  this.tileElement.style.setProperty('--tileIndex-x', xvalue)
  this.x=xvalue
}
set tile_y(yvalue){
  this.tileElement.style.setProperty('--tileIndex-y', yvalue)
  this.y=yvalue
}
set lightness(value){
//Math.log2(2048) returns 11. 所以按100% 来分 11个挡位变化， 每次lightness 变9
const lightness=100-Math.log2(this.value) * 9//越小越亮
this.tileElement.style.setProperty('--lightness', `${lightness}%`)
}
}


