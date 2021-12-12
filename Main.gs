function doGet() {
  // Menampilkan file index.html
  return HtmlService.createHtmlOutputFromFile('index');
}

function processForm(formObject) {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Case 3');
  sheet.appendRow(formObject);
}
