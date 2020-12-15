const rowValue = document.getElementById('row');
const rowSlider = document.querySelector(`input[name="row-slider"]`);
const columnValue = document.getElementById('column');
const columnSlider = document.querySelector(`input[name="column-slider"]`);

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