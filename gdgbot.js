require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "Hello, Google Developer Group is group where students who want to learn about Google's technology can get together. Any student can join. In This clubs, students help each other learn and work on projects for local businesses and their community.",
    Markup.keyboard([["more on GDG"], ["upcoming Events", "Follow Us On"]])
      .resize()
      
  );
  
});

bot.help((ctx) => {
  ctx.reply("How can I assist you, I am happy to help you!");
});

bot.hears("upcoming Events", (ctx) => {
    ctx.reply("We announce that on our Social media. Stay updated, please.")
});

bot.hears("more on GDG", (ctx)=>{
    ctx.reply(
        "please click your choice",
        Markup.keyboard([["Leaders", "Join GDG Team"], ["Back"]] ).resize()
      );
      
});

bot.hears("Join GDG Team", (ctx) =>{
    ctx.reply("In what field you are intrested", Markup.keyboard([ ["Events Team", "Educational Team"], ["Technical Team", "Marketing Team"], ["Social Media Team", "Back"] ]). resize()
);
});


bot.hears("Educational Team", (ctx) => {
    ctx.reply(
      "Learn to code and build real-world applications! This semester, we\’re focusing on the MERN stack (MongoDB, Express, React, and Node.js) through regular meetups and mentoring. We\’re also recruiting tech mentors and organizers passionate about supporting others on their coding journeys.       Apply now: https://forms.gle/BT7UD9pYziqP9Urg9"
    );
})

bot.hears("Events Team", (ctx) => {
  ctx.reply(
    "Our Events Team plans engaging workshops, hackathons, and more. This year, we\’re adding monthly workshops, live speaker sessions, and a major hackathon to our schedule. If you love organizing, this is your chance to create memorable learning experiences for everyone! 🎉                  Apply now: https://forms.gle/SWq3GwJThkKkgkRE9"
  );
});

bot.hears("Technical Team", (ctx) => {
  ctx.reply(
    "Turn ideas into reality! Our developers, designers, and data experts work together on projects, mentor bootcamp students, and contribute to open-source. This year, we\’ll be building an MVP for our main project and hosting an internal hackathon—perfect for students ready to build and collaborate.💡 Apply now: https://forms.gle/gzg5XGUMsnGQU7tWA"
  );
});

bot.hears("Marketing Team", (ctx) => {
  ctx.reply(
   
        "Help boost GDG AAU\’s visibility and connect with AAU and tech industry partners. This semester, we\’re focusing on securing sponsorships, strengthening partnerships, and creating internship opportunities. Marketing-minded students, join us to grow our network and promote our community! Apply now: https://forms.gle/3fyEfP4tmGXqqALcA"
  );
});

bot.hears("Social Media Team", (ctx) => {
  ctx.reply(
        "Keep the community connected! The Social Media Team shares updates, events, and achievements online. This semester, we\’re building a stronger online presence through interactive campaigns, ensuring everyone stays in the loop. 📱 Apply now: https://forms.gle/9BJnaEzwyeFRQEEg7"
    
    
  );
});



bot.hears("Leaders", (ctx)=>{
    ctx.reply("Select your choice", Markup.keyboard([["Former Lead", "Current Lead"], ["Back"] ]). resize()
);
})

bot.hears("Former Lead", (ctx) => {
    ctx.reply("Yeabsira Niguse")
})

bot.hears("Current Lead", (ctx) => {
  ctx.reply("Kalkidan Semere");
});


  


// our contacts

bot.hears("Follow Us On", (ctx) => {
    ctx.reply("In different social medias", Markup.keyboard([ ["Telegram", "LinkdIn"], ["Facebook", "Instagram"], ["TikTok", "Back"] ]).resize()
    
      
    );
})

bot.hears("Telegram", (ctx) => {
    ctx.reply("Telegram: https://t.me/GDSCAAU")
})

bot.hears("Facebook", (ctx) => {
    ctx.reply("Facebook: https://www.facebook.com/share/98dW8ynXNnngZ8s1/ ")
})

bot.hears("LinkdIn", (ctx) => {
    ctx.reply("LinkdIn: https://www.linkedin.com/groups/13031196")
})

bot.hears("Instagram", (ctx) => {
    ctx.reply("Instagram: https://www.instagram.com/gdgaau")
})

bot.hears("TikTok", (ctx) => {
    ctx.reply("TikTok: https://tiktok.com/@gdg.aau");
})


bot.hears("Back", (ctx) => {
  ctx.reply(
    "Hello, Google Developer Group is a group where students who want to learn about Google's technology can get together. Any student can join. In this club, students help each other learn and work on projects for local businesses and their community.",
    Markup.keyboard([
      ["more on GDG"],
      ["upcoming Events", "Follow Us On"],
    ]).resize()
  );
});

bot.launch();
