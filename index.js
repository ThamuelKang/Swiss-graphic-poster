//layout
const rowValue = document.getElementById('row');
const rowSlider = document.querySelector(`input[name="row-slider"]`);
const columnValue = document.getElementById('column');
const columnSlider = document.querySelector(`input[name="column-slider"]`);
const addTextbox = document.querySelector(`input[value="Add"]`);
const removeTextbox = document.querySelector(`input[value="Remove"]`);

//typography

const header = document.querySelector("textarea.header");
const body = document.querySelectorAll("textarea.body");

let bodyArray = Array.prototype.slice.call(body);

const headerSize = document.querySelector(`input[name="header-size"]`);
const bodySize = document.querySelector(`input[name="body-size"]`);

const headerColor = document.querySelector(`input[name="header-color"]`);
const bodyColor = document.querySelector(`input[name="body-color"]`);

const headerTypeface = document.querySelector(`select[name="header-typeface"]`);
const bodyTypeface = document.querySelector(`select[name="body-typeface"]`);

const headerFontWeight = document.querySelector(`select[name="header-font-weight"]`);
const bodyFontWeight = document.querySelector(`select[name="body-font-weight"]`);


const poster = document.querySelector('div.poster');




// row and column slider and value

rowSlider.addEventListener("input", function () {
    rowValue.innerHTML = this.value;
    poster.style.gridTemplateRows = 'repeat' + '(' + this.value + ', 1fr)'
})

columnSlider.addEventListener("input", function () {
    columnValue.innerHTML = this.value;
    poster.style.gridTemplateColumns = 'repeat' + '(' + this.value + ', 1fr)'
})


addTextbox.addEventListener("click", function () {
    let textarea = document.createElement("TEXTAREA");
    poster.appendChild(textarea).classList.add("body");

    bodyArray.push(textarea);
    console.log(bodyArray.length)

    poster.firstElementChild.classList.add("header");
    poster.firstElementChild.classList.remove("body");
})

removeTextbox.addEventListener("click", function () {
    poster.removeChild(poster.lastElementChild);

    bodyArray.pop();
    console.log(bodyArray.length);
})


// typography control

headerSize.addEventListener("input", function () {
    header.style.fontSize = this.value + "px";
})

bodySize.addEventListener("input", function () {
    for (i = 0; i < bodyArray.length; i++) {
        bodyArray[i].style.fontSize = this.value + "px"
        console.log(bodyArray.length)
    }
})

headerColor.addEventListener("input", function () {
    header.style.color = this.value;
})

bodyColor.addEventListener("input", function () {
    for (i = 0; i < bodyArray.length; i++) {
        bodyArray[i].style.color = this.value;
    }
})

// headerFontWeight.addEventListener("change", function () {
//     header.style.fontWeight = this.value;
// })

function headerFontWeightChange() {
    header.style.fontWeight = headerFontWeight.value;
}

function bodyFontWeightChange() {
    for (i = 0; i < body.length; i++) {
        body[i].style.fontWeight = bodyFontWeight.value;
    }

}

function headerTypefaceChange() {
    header.style.fontFamily = headerTypeface.value;
}

function bodyTypefaceChange() {
    for (i = 0; i < body.length; i++) {
        body[i].style.fontFamily = bodyTypeface.value;
    }
}