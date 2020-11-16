
console.log("Welcome to Magical Notes!");
shownotepad();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notepad = localStorage.getItem("notepad");
  if (notepad == null) {
    notepadObj = [];
  } else {
    notepadObj = JSON.parse(notepad);
  }
  notepadObj.push(addTxt.value);
  localStorage.setItem("notepad", JSON.stringify(notepadObj));
  addTxt.value = "";
//   console.log(notepadObj);
  shownotepad();
});

// Function to show elements from localStorage
function shownotepad() {
  let notepad = localStorage.getItem("notepad");
  if (notepad == null) {
    notepadObj = [];
  } else {
    notepadObj = JSON.parse(notepad);
  }
  let html = "";
  notepadObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notepadElm = document.getElementById("notepad");
  if (notepadObj.length != 0) {
    notepadElm.innerHTML = html;
  } else {
    notepadElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notepad.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);

  let notepad = localStorage.getItem("notepad");
  if (notepad == null) {
    notepadObj = [];
  } else {
    notepadObj = JSON.parse(notepad);
  }

  notepadObj.splice(index, 1);
  localStorage.setItem("notepad", JSON.stringify(notepadObj));
  shownotepad();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

