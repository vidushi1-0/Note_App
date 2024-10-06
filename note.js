let notes = document.querySelector(".notes");
let all_colors = document.querySelectorAll(".color");
let addBtn = document.querySelector(".add");
let tinput = document.querySelector(".topic");
let newCon = document.querySelector(".new-content");

let selectedColor;

all_colors.forEach((color) => {
    color.addEventListener('click',(e)=> {
        selectedColor = e.target.style.backgroundColor;
        console.log("Selected color : ", selectedColor);
    });
});

addBtn.addEventListener('click', (e) => {
    if(!selectedColor) {
        alert("Please select the background color for your note!");
        return;
    }

    let newnote = document.createElement('div');
    newnote.classList.add('note');

    newnote.style.backgroundColor = selectedColor;

    let newtopic = document.createElement('h3');
    newtopic.innerText = tinput.value;
    newnote.appendChild(newtopic);

    let newcontent = document.createElement('p');
    newcontent.innerText = newCon.value;
    newnote.appendChild(newcontent);

    notes.appendChild(newnote);

    tinput.value = "topic..";
    newCon.value = "type something here....";
});
