
// this function tool way to long to get working
function generaterandomL(){
    //letters in the alphabet
letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// gets a reference to the table in index.html
table = document.getElementById("crossword");
// lets me know the function is being triggered for debugging purposes
console.log("i was pressed");
//for(var i = 0, cell; cell = table.cells[i]; i++){
// loops through the tables rows
for (let row of table.rows) 
{
    //loop throug the individual cells in every row
    for(let cell of row.cells) 
    {
        
        console.log(cell);
        // checks if the cell is empty or in this case = [ ]
        if (cell.innerText === "[ ]"){

            // gets a random integer within the maximum size of the list
            randomnum = Math.floor(Math.random() * 26);
            // tells me the number generator is an integer not a float...debugging purposes
            console.log(randomnum);
            // sets the empty cell to the index value of the list above
            cell.innerText = "[" + letters[randomnum] + "]";
            // lets me know what the letter should be for debugging purposes
            console.log(cell);
            
            // if the cell is not empty tell me something was there
        } else{

            console.log("occupied");

        }
        
       
    }
}


}