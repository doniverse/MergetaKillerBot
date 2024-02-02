const {Bot, MemorySessionStorage }= require('grammy');
const {chatMembers} = require('@grammyjs/chat-members');
require('dotenv').config();

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot("6745608618:AAEWljbsw1jdmepScT8HXXP6zKN9OR5xSAo"); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
const adapter = new MemorySessionStorage();
bot.use(chatMembers(adapter));


bot.catch('error', error =>{
    console.log("Error ")
})

// Handle the /start command.
bot.command("start", (ctx) =>{
     ctx.reply("Just add me to your group, I will take care of the rest! \n ⚠️ Make sure to make me an admin, and give ban rights.")
     allowed_updates: ["chat_member", "message"]
    });

// messages
bot.on('message', ctx =>{
    const full_name = `${ctx.message.from.first_name} ${ctx.message.from.last_name}`;
    const user_id = ctx.message.from.id;
    const message = ctx.message.text;
    console.log(full_name,ctx)
    if(full_name.includes("መርጌታ") || full_name.includes("መሪጌታ") || (message.includes("መሪጌታ") && (message.includes("09") || message.includes("+251"))) || (message.includes("መርጌታ") && (message.includes("09") || message.includes("+251")))){
        try {
            ctx.banChatMember(user_id);
            ctx.reply("Another መርጌታ eliminated!");
        } catch (error) {
            console.error(error);
            ctx.reply('Could not perform ban. Make sure to give admin ban rights.');
        }
    }

})


// Start the bot.
bot.start();

