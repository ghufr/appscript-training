function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('Custom Menu')
    .addItem('Defuse Bomb!', 'defuseBombMenu')
    .addItem('Send Email', 'sendEmail')
    .addToUi();
}

function defuseBombMenu() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Enter Password: ');

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getRange('C21');

  if (response.getSelectedButton() == ui.Button.OK) {
    if (response.getResponseText() == '3000') {
      cell.setValue('Bomb Defused...');
      return;
    }
  }

  cell.setValue('💥');
}

function RESET_BOMB() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getRange('C21');
  cell.setValue('💣');
}

function HELLO_WORLD() {
  return 'Hello World';
}

function SHOW_ME() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getRange('C13');
  cell.setBackground('papayawhip');
  cell.setValue('Now you see');
}

function HIDE_ME() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const cell = sheet.getRange('C13');
  cell.setBackground('white');
  cell.clearContent();
}
