const cellNumer=16;
const gridTemplate=4
//每一个grid 都有cells， 所以我需要在new Grid(boardEle)时自动完成 creat cell 
//所以我需要一个creatCellElements(）放在constructor 中被自动执行, 且cell 肯定会以实例的形式在js 中存在而不是纯粹的element
import Cell from "./cell.js";

export default class Grid{
  constructor(boardElement){
    this.boardElement=boardElement
    this.cells=creatCellElements().map( (el,index)=>{boardElement.append(el) ;
      return new Cell(el,index%gridTemplate, Math.floor(index/gridTemplate) )})//通过index 定位x, y
log(this.cells)
    
}
//随机选取两个cell 并且创建tile 将tile 的x,y 设为cell 的x y
//想要实现随机选取cell ，就意味着cell是个实列 而不是html 中的element,实例里面才有ele tile x, y 等参数
 //this.cells 是grid 里面的property 所以这个方程一定是method in grid , 可以在script 中通过script 调取
randomEmptyCell(){
  const EmptyCells=this.cells.filter(el=>el.tile==null)//找到没有tile 的cell
  log(EmptyCells)
  //从所有的empty cells 中随机选取一个数， 返回这个数的cell
  let selectedEmpCell=EmptyCells[Math.floor(Math.random() * EmptyCells.length)]
return selectedEmpCell
//给这个cell 添加tile , this.tile 是cell 里面的 property 使用cell 里面的set tile() 函数来实现
} 

columnArr(){
 const  columnArr=this.cells.reduce((arrColu,currentCell)=>{
arrColu[currentCell.x]=arrColu[currentCell.x]||[];
arrColu[currentCell.x][currentCell.y]=currentCell
return arrColu
  },[])
  return columnArr
}
rowArr(){
  const  rowArrArr=this.cells.reduce((arrColu,currentCell)=>{
 arrColu[currentCell.y]=arrColu[currentCell.y]||[];
 arrColu[currentCell.y][currentCell.x]=currentCell
 return arrColu
   },[])
   return rowArrArr
 }

}
//el=>{

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

