// Tabla formulario
function exportTableToExcel(tableID, filename = '') {
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
  // Specify file name
  filename = filename ? filename + '.xls' : 'excel_data.xls';

  // Create download link element
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(['ufeff', tableHTML], {
      type: dataType
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {

    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

    // Setting the file name
    downloadLink.download = filename;


    //triggering the function
    downloadLink.click();
  }
}

const form = document.querySelector('form');
const table = document.querySelector('table tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = form.nombre.value;
  const email = form.email.value;
  const country = form.country.value;
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${nombre}</td>
      <td>${email}</td>
      <td>${country}</td>
    `;

  table.appendChild(row);

  form.reset();
});

// Fade in/out / toggle
$("button")
  .first()
  .click(function () {
    $("p").first().fadeToggle("slow", "linear");
  });
$("button")
  .last()
  .click(function () {
    $("p")
      .last()
      .fadeToggle("fast", function () {
        $("#log").append("<div>finished</div>");
      });
  });





