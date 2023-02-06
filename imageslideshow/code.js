// instead of starting at index 0 I start at 1 because the index 0 image is displayed by default
let slideIndex = 1;
// this function changes the image and increments every time it is called until it is at the end of the array.
function updateSlide() {
    //array of images
  let images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
  //gets the image element from index.html
  let displayedImage = document.getElementById("imageD");
 //sets the image to the value of its current index
  displayedImage.src = images[slideIndex];
  // sets the index value to 0 when reaching the end of the list
  slideIndex = (slideIndex + 1) % images.length;
}


