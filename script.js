// document.getElementById("count-el").textContent = 5;
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

countEl.textContent = count;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + ' - ';
    // countStr = countStr.replace(" ", "&nbsp;");
    console.log(countStr);
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}


