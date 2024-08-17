const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened=arrays.reduce((accumulator,currentArray)=>{
  return accumulator.concat(currentArray)
},[])
console.log(flattened); // Outputs: [1, 2, 3, 4, 5, 6]

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

fruits.reduce((accumulator,currentArray)=>{
  accumulator[currentArray]= (accumulator[currentArray]||0)+1
},{})
// Outputs: { apple: 3, banana: 2, orange: 1 }

const salaries = {
  Alice: 50000,
  Bob: 60000,
  Charlie: 70000
};

Object.values(salaries).reduce((accumulator,currentArray)=>{
  return accumulator+currentArray
},0)

console.log(totalSalary); // Outputs: 180000


const people=[
{name:'cici',age:12},
{name:'cici',age:13},
{name:'cici',age:12},
{name:'cici',age:9},
]
people.reduce((accumulator,currentArray)=>{
  if(accumulator[age]==null) accumulator[age]=[]
  accumulator[age].push(currentArray)
  return accumulator[age]
},{})

arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
arr.reduce((accumulator,currentArray,index)=>{
if (!accumulator[Math.floor(index/4)])
accumulator[Math.floor(index/4)]=[]
accumulator[Math.floor(index/4)],push(currentArray)
return accumulator
},[])