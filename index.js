const rowValue = document.getElementById('row');
const rowSlider = document.querySelector(`input[name="row-slider"]`);
const columnValue = document.getElementById('column');
const columnSlider = document.querySelector(`input[name="column-slider"]`);
const addTextbox = document.querySelector(`input[value="Add"]`);
const removeTextbox = document.querySelector(`input[value="Remove"]`);


const body = document.querySelector(".body");

const poster = document.querySelector('div.poster');

// row and column slider and value

rowSlider.addEventListener("input", function () {
    rowValue.innerHTML = this.value;
    poster.style.gridTemplateRows = 'repeat' + '(' + this.value + ', 1fr)'

    // if (this.value > 5) {
    //     for (i = 0; i < 3; i++) {
    //         console.log(i)
    //         poster.appendChild(textarea);
    //     }
    // } else {
    //     for (i = 0; i < 3; i++) {
    //         console.log(i)
    //         poster.removeChild(textarea);
    //     }
    // }
})

columnSlider.addEventListener("input", function () {
    columnValue.innerHTML = this.value;
    poster.style.gridTemplateColumns = 'repeat' + '(' + this.value + ', 1fr)'
})


addTextbox.addEventListener("click", function () {
    console.log("hi")
    poster.innerHTML += `<textarea name="body" class="body">Lorem ipsum I'm a great designer</textarea>`
    poster.firstElementChild.classList.add("header");
    poster.firstElementChild.classList.remove("body")
    poster.firstElementChild.innerHTML = "Generate a good looking poster!"


})

removeTextbox.addEventListener("click", function () {
    poster.removeChild(poster.lastElementChild);
})