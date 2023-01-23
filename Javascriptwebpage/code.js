async function changeText() { // this function allow me to use await

    colors = ['blue', 'red', 'purple', 'green', 'yellow', 'pink']; // list of different colors

    for (x in colors) {// iterates through


        await new Promise(resolve => setTimeout(resolve, 1000));// waits 1 seconds before changing color
        cText = document.getElementById("changeme").style.color = colors[x];// gets the text i want to change and sets the color to the position in the list   
        console.log(cText);// prints the current color to console
    }


}