const { Telegraf } = require('telegraf')

const bot = new Telegraf("7364815940:AAF-wOxMzu4ioxsHNXbb4Roxoh4MGXeiUn8")

const newbrandname = ["Apple" , "Microsoft" , "HP" , "DELL" , "Lenovo" , "Acer" , "ASUS"];

bot.start((ctx) => ctx.reply('Welcome to bot'));

bot.command('newbrandname', (ctx) => {
    const result =[];
    for (let i=0; i<newbrandname.length ; i++){
        result.push(ctx.reply(newbrandname[i])) ;
    }

    return Promise.all(result);
});

bot.launch()