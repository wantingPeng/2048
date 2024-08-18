import Grid from "./grid.js";
import Cell from "./cell.js";
import Tile from "./tiles.js";
globalThis.log=console.log
//可以想象有3个class grid, tile and cell  class grid, 仅需要传入一个boardElement的参数，即可创建实列
//class cell  需要 cellelement 的参数，另外还有 x y 的位置特征信息即可即可创建一个cell实列
// class tile 需要 tileElement , value 就可以创建一个tile 实列，而x ，y 的位置信息不像cell 一样是其身上的一个特征， 而是会不断变化的变量
const boardEle=document.querySelector('.board')
const board=new Grid(boardEle)
let  EmptyCell_1=board.randomEmptyCell()
EmptyCell_1.tile=new Tile(boardEle)
let  EmptyCell_2=board.randomEmptyCell()



/* const TileElement_1 = creatTileElement()
const TileElement_2 = creatTileElement()
const TileElement = creatTileElement() */

 EmptyCell_2.tile=new Tile(boardEle)


//add 一次性eventlistener an keydown, 按下上下左右键则执行tileMove()方程， 如果其他键则再次调用监听  
//想要移动，则必须拿到2*2的cell 的数组，这样tile 才能四周移动
//tileMove()： 按下arrowup 所有tile 向上移动， 如果上面有tile 则不移动 ， 如果上面有tile 但是tile.value 和本次验证的tile.value 相同 则mergen
//按向上移动来说， 我需要拿到column 的数组， loop 循环每个column 再循环每个column 里面的cell, cell[1], cell[2], dell[3]，
//对于cell[3] 如果cell[2]为空或同值 则动，还要继续检查cell[1]， cell[0] ，移动到最后一个可到达的cell  动了之后要remove原本的tile位置， 
 addListener()

function addListener(){
window.addEventListener('keydown', keybord)
}
//{once:true}
//我要将原来的一维数组变成二维数组，并且每个coulum 为一个arr
const columnArr=board.columnArr()
const rowArrArr=board.rowArr()

function keybord(e){



 switch(e.key){
 case 'ArrowUp':{ tileMove(columnArr)} break
 case 'ArrowDown':{ tileMove(columnArr.map(el=>[...el].reverse()))

 } break
 case 'ArrowLeft':{ tileMove(rowArrArr)

 }break
 case 'ArrowRight':{ tileMove(rowArrArr.map(el=>[...el].reverse()))}break
 default:
  {addListener()
  return}
 }
 let  randomCell=board.randomEmptyCell()
  randomCell.tile=new Tile(boardEle)
 addListener()
 }
 //loop 循环每个column 再循环每个cell 并且拿到里面的cell， 
 //对于每个cell, 比如cell[3] 如果cell[2]为空或同值 则还要继续检查cell[1]， cell[0], 遇到不满足条件的就立刻退出loop,
 //同时记下上一个满足条件的cell 然后移动到最后一个可到达的cell  动了之后要remove原本的tile位置，



 function tileMove(columnArr){
  columnArr.forEach(arr => {for(let i=0;i<arr.length ;i++){
  
    const targetCell=arr[i]; 
    if(targetCell.tileobj==null) continue 
    let lastVaildCell
  for (let j=i-1; j>=0; j--){
    const nextCell=arr[j]
    if(nextCell.tileobj!=null&&nextCell.tileobj.value!=targetCell.tileobj.value ) break
   lastVaildCell=nextCell
  }

  //如何将targetCell的tile 移动到lastVaildCell 的位子
  //soulution, targetCell.tileobj.x=lastVaildCell..tileobj.x
  if (lastVaildCell==null){
continue
  }else if(!targetCell.mergen(lastVaildCell)){ 
   

    targetCell.moveTargetTile(lastVaildCell)
  }
  log(targetCell)
  log(lastVaildCell)
  }   
  })
 } 