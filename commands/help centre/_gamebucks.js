/*CMD
  command: /gamebucks
  help: 
  need_reply: false
  auto_retry_time: 
  folder: help centre

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({
      text: "Game bugs helper",
    reply_markup: {
      inline_keyboard: [
      [{ text: "fast-parity cash not added", callback_data: "/cashnotrecognizedfirstparity" }], [{ text: "MineSweeper", callback_data: "/minesweeper" }], [{ text: "LUDO", callback_data: "/LUDO" }], [{ text: "JETX", callback_data: "/JETX" }]
      
      ]
    }
});
