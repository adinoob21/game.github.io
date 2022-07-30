//restart game button
let Restart=document.querySelector("#b");

//grab all the squares
let squares=document.querySelectorAll("td");
//check all the squares

function clearBoard(){
    for(let i=0;i<squares.length;i++){
        squares[i].textContent="";
    }

}
Restart.addEventListener('click', clearBoard);
//check the square marker
function changeMarker(){
    if(this.textContent ===''){
        this.textContent ='X';
    }
    else if(this.textContent=== 'X' )
{
    this.textContent='O';
}
else{
    this.textContent='';
}}



// for loop to add all the event listeners to all the squares

for(let i=0;i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker)
}

