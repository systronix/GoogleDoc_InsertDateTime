/**
* Based on code by Thomas Wiersema, at 
* http://webapps.stackexchange.com/questions/58965/insert-today-s-date-into-a-google-document
*
* I have no idea what I am doing, really, but managed to make this work and it serves
* a need for me and maybe will be useful to others.
*
* copy and paste this code into the Google Doc scripts editor
*/

/**
 * The onOpen function runs automatically when the Google Docs document is
 * opened. Use it to add custom menus to Google Docs that allow the user to run
 * custom scripts. For more information, please consult the following two
 * resources.
 *
 * Extending Google Docs developer guide:
 *     https://developers.google.com/apps-script/guides/docs
 *
 * Document service reference documentation:
 *     https://developers.google.com/apps-script/reference/document/
 */
function onOpen() {
  // Add a menu with some items, some separators, and a sub-menu.
  DocumentApp.getUi().createMenu('Utilities')
      .addItem('Insert Date', 'insertDateAtCursor')
      .addItem('Insert Time', 'insertTimeAtCursor')
      .addToUi();
}

/**
 * Inserts the time at the current cursor location in boldface.
 */
function insertDateAtCursor() {
  var cursor = DocumentApp.getActiveDocument().getCursor();

  if (cursor) {
    // Attempt to insert text at the cursor position. If insertion returns null,
    // then the cursor's containing element doesn't allow text insertions.
    // MMM is text month uppercase
    var date = Utilities.formatDate(new Date(), "GMT", "yyy-MMM-dd"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
    var element = cursor.insertText(date);
    if (element) {
      element.setBold(false);
    } else {
      DocumentApp.getUi().alert('Cannot insert date at this cursor location.');
    }
  } else {
    DocumentApp.getUi().alert('Cannot find a cursor in the document.');
  }
}
  
/**
 * Inserts the time at the current cursor location in boldface.
 */
function insertTimeAtCursor() {
  var cursor = DocumentApp.getActiveDocument().getCursor();

  if (cursor) {
    // Attempt to insert text at the cursor position. If insertion returns null,
    // then the cursor's containing element doesn't allow text insertions.
    var time = Utilities.formatDate(new Date(), "GMT", "HH:mm:ss"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
    var element = cursor.insertText(time);
    if (element) {
      element.setBold(false);
    } else {
      DocumentApp.getUi().alert('Cannot insert time at this cursor location.');
    }
  } else {
    DocumentApp.getUi().alert('Cannot find a cursor in the document.');
  }
}