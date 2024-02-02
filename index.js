const {Bot, MemorySessionStorage }= require('grammy');
const {chatMembers} = require('@grammyjs/chat-members');
require('dotenv').config();

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.BOT_TOKEN); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
const adapter = new MemorySessionStorage();
bot.use(chatMembers(adapter));


bot.catch('error', ctx =>{
    console.log("Error ")
})

// Handle the /start command.
bot.command("start", (ctx) =>{
     ctx.reply("Just add me to your group, I will take care of the rest!")
     allowed_updates: ["chat_member", "message"]
    });

// messages
bot.on('message', ctx =>{
    const full_name = `${ctx.message.from.first_name} ${ctx.message.from.last_name}`;
    const user_id = ctx.message.from.id;
    if(full_name.startsWith("መርጌታ") || full_name.endsWith("መርጌታ") || full_name.includes("መርጌታ")){
        ctx.banChatMember(user_id);
        ctx.reply("Another መርጌታ eliminated!");
    }

})


// Start the bot.
bot.start();

