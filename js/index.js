// Declare const for form
const formInput = document.getElementById("sizePicker");
// Add addEventListener for formInput and call makeGrid
formInput.addEventListener("submit", makeGrid);
// Declare const for color input
const colorInput = $("#colorPicker");
// const for table
const grid = $("#pixelCanvas");
//add tooltip for instructions
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
// makeGrid() on submition
function makeGrid(event) {
  // clean grid on submit
  grid.children().remove();
  // set grid size with var
  let row = formInput.height.value;
  let col = formInput.width.value;
  // build table
  for (var x = 0; x < row; x++) {
    grid.append("<tr></tr>"); //add row to last element on ##pixelCanvas table
    for (var y = 0; y < col; y++) {
      $("tr").last().append('<td class="pixel"></td>'); //add column to last row on grid
    }
  }
  // prevent form submit
  event.preventDefault();
  //call paint function
  colorPixel();
}

// Color cell function
function colorPixel(event) {
    let cell = $("#pixelCanvas td"); // single cell selector for painting
    cell.click(colorCell); // color on single click
    //drag to color
    colorOnDrag()
    //add clear button
    addClearButton()
}


function colorCell() {
  // if !painted - then paint and add class painted
  if ($(this).attr("class") != "painted") {
      $(this).css("background-color", colorInput.val());
      $(this).attr("class", "painted");
  }
  // else - remove paint and change class
  else {
      $(this).css("background-color", "transparent");
      $(this).attr("class", "transparent");

  }
}

function colorOnDrag(){
  let cell = $("#pixelCanvas td");
  let painting = false; //track drag painting
  cell.on("mousedown", function () {
    painting = true;
  });
  cell.on("mousemove", function () {
    if (painting) {
      $(this).css("background-color", colorInput.val());
      $(this).attr("class", "painted");
    }
  });
  $(document).on("mouseup", function () {
    painting = false;
  });
}

function addClearButton() {
    $("#clearButton").removeClass("isHidden").addClass("isDisplayed");
    $("#clearButton").on("click", clearCanvas);
}

function clearCanvas() {
  $("#pixelCanvas td").css("background-color", "transparent");
  $("#pixelCanvas td").attr("class", "transparent");
}

// pseudo code at bottom

// Declare variables
// Add event listner for submit
// Add event listner for color and color changeColor
// MakeGrid()
  // Find col and row
  // loop throw tableRow based on id="inputHeight"
  // loop throw tableData based on id="inputWeight"
  // create element td
  //call colorPixel
//Add color on click (Allow to remove color on click)
////// Add event listener for color change
// Cells are added after page load - Use Event delegation
// Set initial value for color after load
// add color on drag