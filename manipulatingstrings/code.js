document.addEventListener("DOMContentLoaded", function() {// fixes an issue where the content was being called before it was loaded
  
  //vars below get references to crucial items like the input text and the buttons that control them
  const inputBox = document.getElementById("inputBox");
  const addBtn = document.getElementById("addBtn");
  const clearBtn = document.getElementById("clearBtn");
  const list = document.getElementById("list");
  const items = [];
// adds the txt from the onput box to a list li
  addBtn.addEventListener("click", function() {
    const newItem = inputBox.value;
    if (newItem) {
      items.push(newItem);
      inputBox.value = "";
      list.innerHTML = "";
      for (const item of items) {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      }
    }
  });
//allows you to to clear the list by reseting the var to default
  clearBtn.addEventListener("click", function() {
    items.length = 0;
    list.innerHTML = "";
  });
});