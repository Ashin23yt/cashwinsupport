/*CMD
  command: /Helpcentre
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
      text: "Help centre is maded for customer doubts",
    reply_markup: {
      inline_keyboard: [
      [{ text: "withdrawal", callback_data: "/withdrawalsystem" }], [{ text: "Recharge", callback_data: "/rechargecash" }], [{ text: "minimum withdrawal help", callback_data: "/minimium" }][{ text: "Withdrawal Notes & Limits.", callback_data: "/withdrawalnoteslimit" }], [{ text: "Game bugs helper.", callback_data: "/gamebucks" }]
      
      ]
    }
});
