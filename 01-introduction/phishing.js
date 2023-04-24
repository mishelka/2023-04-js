"use strict";

function getMessage() {
    const amount = Math.round(Math.random() * 100000);
    const message =
        "You won " + amount + "\u20AC! \n" +
        "To collect you winnings, send your credit card\n" +
        "and bank details to michaela.bacikova@tuke.sk";
    return message;
}
function showWinningsAlert() {
    let msg = getMessage();
    showWinningsInDocument(msg);
    alert(msg);
}
function showWinningsInDocument(msg) {
    document.write("<h1>" + msg + "</h1>");
}