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
let  EmptyCell_2=board.randomEmptyCell()

/* const TileElement_1 = creatTileElement()
const TileElement_2 = creatTileElement()
const TileElement = creatTileElement() */
 EmptyCell_1.tile=new Tile(boardEle)
 EmptyCell_2.tile=new Tile(boardEle)
log(EmptyCell_1)
log(EmptyCell_2)

