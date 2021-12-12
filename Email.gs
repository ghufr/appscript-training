function randomId() {
  return Math.floor(Math.random() * Date.now()).toString();
}

function sendEmail() {
  const sheet = SpreadsheetApp.getActive().getSheetByName('Case 3');

  const listRange = sheet.getRange('A2:D');
  const list = listRange.getValues();

  const subject = sheet.getRange('F2').getValue();

  const templateBody = HtmlService.createTemplateFromFile('email-template');

  const nList = list.map((item) => {
    const [timestamp, name, email] = item;
    if (!name) return [];

    const code = randomId();
    const qr = `https://api.qrserver.com/v1/create-qr-code/?data=${code}&size=220x220`;

    templateBody.name = name;
    templateBody.code = code;
    templateBody.qr = qr;

    const htmlBody = templateBody.evaluate().getContent();

    MailApp.sendEmail({
      to: email,
      subject,
      htmlBody,
    });

    return [timestamp, name, email, code];
  });

  listRange.setValues(nList);
}
