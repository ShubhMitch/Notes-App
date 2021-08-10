

function getAndupdate(){
    title = document.getElementById("title").value;
    description = document.getElementById("description").value;
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      itemJsonArray.push([title, description]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([title, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}
function update(){
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }
  
    let notes = document.getElementById('notesjs');
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <div class="notes">
        <div class="number">${index + 1} </div>
          <div class="notes-title" id="n-title">${element[0]}</div>
          <div class="notes-description" id="n-description">
              ${element[1]}
          </div>
          <button class="submit clear" onClick = "deleted(${index})">Delete Note</button>
  
          </div>
        `
    });
    notes.innerHTML = str;
     
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();
function deleted(item){
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.splice(item, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function clearAll(){
    if(confirm('Do you really want to clear?')){
        localStorage.clear();
        update();
    }
  
}
