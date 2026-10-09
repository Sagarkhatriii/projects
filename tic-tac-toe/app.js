'use strict';
const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function outcome(board){for(const line of lines){const [a,b,c]=line;if(board[a]&&board[a]===board[b]&&board[a]===board[c])return {winner:board[a],line};}return board.every(Boolean)?{winner:'draw',line:[]}:null;}
if(typeof module!=='undefined')module.exports={outcome};
if(typeof document!=='undefined'){
let board=Array(9).fill(''),turn='X',ended=false;
const cells=[...document.querySelectorAll('.cell')],status=document.querySelector('#status');
function render(result){cells.forEach((cell,i)=>{cell.textContent=board[i];cell.disabled=ended||Boolean(board[i]);cell.setAttribute('aria-label','Row '+(Math.floor(i/3)+1)+', column '+(i%3+1)+': '+(board[i]||'empty'));cell.classList.toggle('win',Boolean(result?.line.includes(i)));});status.textContent=result?(result.winner==='draw'?'It’s a draw!':result.winner+' wins!'):turn+'’s turn';}
cells.forEach((cell,i)=>cell.addEventListener('click',()=>{if(ended||board[i])return;board[i]=turn;const result=outcome(board);ended=Boolean(result);if(!ended)turn=turn==='X'?'O':'X';render(result);}));
document.querySelector('#restart').addEventListener('click',()=>{board=Array(9).fill('');turn='X';ended=false;render(null);});render(null);
}