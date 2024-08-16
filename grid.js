const cellNumer=16;
//每一个grid 都有cells， 所以我需要在new Grid(boardEle)时自动完成new cell 
//所以我需要一个creatCellElements(）放在constructor 中被自动执行
export default class Grid{
  constructor(boardElement){
    this.boardElement=boardElement
creatCellElements().forEach(el=>boardElement.append(el))
}
}

function creatCellElements(){
  let cellELs=[]
  for(let i=0;i<cellNumer;i++){
  const cellEL=document.createElement('div')
  cellEL.classList.add('cell')
  cellELs.push(cellEL)
  }
  log(cellELs)
  return cellELs
}