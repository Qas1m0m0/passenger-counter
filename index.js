// .innerText = 5

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0

function increment() {
    count = count + 1;
    countEl.textContent = count;
    console.log(countEl.innerText)
}

function save() {
     let entryCount = count + ' - ';
     saveEl.textContent += entryCount;
     countEl.textContent = 0;
     count = 0;
     console.log(count)
}