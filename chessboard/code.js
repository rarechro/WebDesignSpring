










function tableBuilder(){
    table = document.getElementById("chessboard");
    let i = 1;






    for (let row of table.rows) 
{
    i++
    //loop throug the individual cells in every row
    for(let cell of row.cells) 
    {
        i++;
        console.log(cell);
       // checks if square is even or odd and changes square color accordingly
        if (i % 2 == 0){
            cell.style.backgroundColor = "#6b460f";
            cell.innerText = "";   
            cell.style.fontsize = "100px";







            // sets the color of the odd squares
        } else{

            cell.style.backgroundColor = "#f5d6a9";
            cell.innerText = "";
        }
        
       
    }
}


}