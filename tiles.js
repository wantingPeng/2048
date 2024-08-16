export default class Tile{
  constructor(container, value=Math.random()>0.5?2:4)
  { 
    const tileElement=document.createElement('div')
    tileElement.classList.add('tile')
    container.append(tileElement)
    this.tileElement=tileElement
    this.value=value
   
  }

 
}

