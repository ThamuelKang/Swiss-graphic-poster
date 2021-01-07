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


//canvas

const poster = document.querySelector('.poster');

const canvasColor = document.querySelector(`input[name="canvas-color"]`);

const canvasSizeWidth = document.querySelector(`input[name="canvas-size-width"]`);
const canvasSizeHeight = document.querySelector(`input[name="canvas-size-height"]`);

const canvasGapWidth = document.querySelector(`input[name="canvas-gap-width"]`);
const canvasGapHeight = document.querySelector(`input[name="canvas-gap-height"]`);

const canvasPaddingWidth = document.querySelector(`input[name="canvas-padding-width"]`);
const canvasPaddingHeight = document.querySelector(`input[name="canvas-padding-height"]`);


//export

const exportButton = document.querySelector(".export");



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

    poster.firstElementChild.classList.remove("body");
    poster.firstElementChild.classList.add("header");
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

function headerFontWeightChange() {
    header.style.fontWeight = headerFontWeight.value;
}

function bodyFontWeightChange() {
    for (i = 0; i < bodyArray.length; i++) {
        bodyArray[i].style.fontWeight = bodyFontWeight.value;
    }
}

function headerTypefaceChange() {
    header.style.fontFamily = headerTypeface.value;
}

function bodyTypefaceChange() {
    for (i = 0; i < bodyArray.length; i++) {
        bodyArray[i].style.fontFamily = bodyTypeface.value;
    }
}

canvasColor.addEventListener("input", function () {
    poster.style.backgroundColor = this.value;
})

canvasSizeWidth.addEventListener("input", function () {
    poster.style.width = this.value + "px";
})

canvasSizeHeight.addEventListener("input", function () {
    poster.style.height = this.value + "px";
})

canvasGapWidth.addEventListener("input", function () {
    poster.style.columnGap = this.value + "px";
})

canvasGapHeight.addEventListener("input", function () {
    poster.style.rowGap = this.value + "px";
})

canvasPaddingWidth.addEventListener("input", function () {
    poster.style.paddingRight = this.value + "px";
    poster.style.paddingLeft = this.value + "px";
})

canvasPaddingHeight.addEventListener("input", function () {
    poster.style.paddingTop = this.value + "px";
    poster.style.paddingBottom = this.value + "px";
})


//hiding guides 

function sliderChecked() {
    const slider = document.querySelector(`input[name="guide"]`);
    const sliderParagraph = document.querySelector("p.guide");

    const textarea = document.querySelectorAll("textarea");

    if (slider.checked == true) {

        for (i = 0; i < textarea.length; i++) {
            textarea[i].style.outlineWidth = 0 + "px"
        }
        sliderParagraph.innerHTML = "Show guides"

    } else {
        sliderParagraph.innerHTML = "Hide guides"
        for (i = 0; i < textarea.length; i++) {
            textarea[i].style.outlineWidth = 1 + "px"
        }
    }
}


//html2canvas

exportButton.addEventListener("click", function () {

    html2canvas(poster, {
        dpi: 600,
        onrendered: function (canvas) {

            canvas.toBlob(function (blob) {
                saveAs(blob, "poster.png");
            });

        }
    });
})