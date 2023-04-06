/*CMD
  command: /logincashwinadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Enter password

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = "Access denied."

if (message == "cashwin@replay$") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "Your now admin. Please wait message from users"
}

Bot.sendMessage(msg)

