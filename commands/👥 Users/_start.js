/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 👥 Users

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage("Hi "+user.first_name+"🥰❤️")
Api.sendMessage({
      text: "you want to talk with our admins the type /message to chat with admin. or you get a simple questions answers continue",
    reply_markup: {
      inline_keyboard: [
      [{ text: "Message to admin", callback_data: "/message" }], [{ text: "Active✅️", callback_data: "/Active" }], [{ text: "Register🔗", callback_data: "/Registeroncashwin" }], [{ text: "Help centre🔹", callback_data: "/Helpcentre" }]
      
      ]
    }
});
