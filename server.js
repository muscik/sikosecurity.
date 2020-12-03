process.on("warning", e => console.warn(e.stack));
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 50;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://numerous-bristle-expansion.glitch.me`);
}, 280000);
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s/";
client.login("NzgzMzYzODc3Njg5MjI5MzEz.X8Zqdg.jyYNByJURi1pu5nxWsBwdwtCOm8");
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("idle");
  client.user.setActivity(`${prefix}help | Security is here`, { type: "PLAYING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});
//////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    let help = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.guild.iconURL())
      .setTitle("" + "__Click Here To Add__" + "")
      .setImage("https://cdn.discordapp.com/attachments/737803741037854750/778534035583664158/image6.gif")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=783363877689229313&permissions=8&scope=bot"
      ).setDescription(`
    
 ⚙️< __security commands__ >
 ${prefix}anti ban [ 1 to 5 ]
 ${prefix}anti kick [ 1 to 5 ]
 ${prefix}anti role [ 1 to 5 ]
 ${prefix}anti channel [ 1 to 5 ] 
 ${prefix}antibot on 
 ${prefix}antibot off 
 
⚙️< __public commands__ >
 ${prefix}help / ${prefix}invite
 ${prefix}support / ${prefix}bot
 ${prefix}server / ${prefix}user
 ${prefix}uinvites / ${prefix}ping
 ${prefix}emoji / ${prefix}roles
 ${prefix}avatar / ${prefix}profile
 ${prefix}nick / ${prefix}Bans
 ${prefix}clear / ${prefix}say
 
⚙️< __admin commands__ > 
 ${prefix}ban / ${prefix}kick
 ${prefix}lock / ${prefix}unlock
 ${prefix}mute / ${prefix}unmute
 ${prefix}unban {userid,all}
`);
    message.channel.send(help);
  }
});
/////////// invite /////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    let invite = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setImage("https://cdn.discordapp.com/emojis/783328530540396604.gif")
      .setTitle("" + "__Click Here To Add__" + "")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot");
    message.channel.send(invite);
  }
});
////////////lock//////////
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "lock")) {
    if (!prof.guild.me.hasPermission("MANAGE_CHANNELS"))
      return prof.reply("You can not do this 🚫");
    if (!prof.member.hasPermission("MANAGE_CHANNELS"))
      return prof.reply("You can not do this 🚫");
    prof.channel
      .overwritePermissions([
        {
          id: prof.guild.id,
          deny: ["SEND_MESSAGES"]
        }
      ])
      .then(p => {
        var professor = new Discord.MessageEmbed()
          .setColor("#RANDOM")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/778790583673552957/783471567728017468/20201202_021612.png")
          .setTitle(`Locked ${prof.channel.name} `)
          .setDescription(`This Channel is <#${prof.channel.id}> Locked `);
        prof.channel.send(professor);
      });
  }
/////////unlock///////
  if (prof.content.startsWith(prefix + "unlock")) {
    if (!prof.guild.me.hasPermission("MANAGE_CHANNELS"))
      return prof.reply("You can not do this 🚫");
    if (!prof.member.hasPermission("MANAGE_CHANNELS"))
      return prof.reply("You can not do this 🚫");
    prof.channel
      .overwritePermissions([
        {
          id: prof.guild.id,
          allow: ["SEND_MESSAGES"]
        }
      ])
      .then(p => {
        var professor = new Discord.MessageEmbed()
          .setColor("#RANDOM")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/778790583673552957/783472194796781618/1606864720919.png")
          .setTitle(`Unlock ${prof.channel.name} `)
          .setDescription(`This Channel is <#${prof.channel.id}> UnLocked `);
        prof.channel.send(professor);
      });
  }
});
///////////
const rast = "";
const rastw = "";
const ghallat = "";
const ghallatw = "";
const logosec = "";
const warn = "⚠";
const color = "#0000";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (!message.member.hasPermission("OWNERSHIP")) return;
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `** __Ok | Changed To__ : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `** __Ok | Changed To__ : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**__Ok | Changed To__ : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send("**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `** __Ok | Changed To__ : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send("**" + ghallat + " | Only Type A `Number` .**");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `** __Ok | Changed To__ : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `** __Ok | Changed To__ : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**✔ | Changed To : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Rolea\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file

/////

client.on("guildCreate", Carol => {
  if (Carol.memberCount < 100) {
    console.log(
      `  name ( ${Carol.name} ) zhmaray memberakan ( ${Carol.memberCount}) created by Carol`
    ); //by Carol
    Carol.leave();
  }
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "security")) {
    var embed = new Discord.MessageEmbed()
      .setTitle("security")
      .setColor("RANDOM")
      .setDescription("by CAROL");
    message.channel.send(embed);
  }
});

///////
client.on("message", message => {
  if (message.content === prefix + "support") {
    const embed = new Discord.MessageEmbed()
      .setTitle("__Support server__")
      .setImage("https://cdn.discordapp.com/emojis/756314423114858597.gif")
      .setColor("RANDOME")
      .setDescription("**[Click here](https://discord.gg/Hj7X4V9)**");
    message.channel.send(embed);
  }
});

///////

client.on("message", message => {
  if (message.content.startsWith(`${prefix}bot`)) {
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/778753144703942657/783504645321523210/image0.gif`
      )
      .setColor("RANDOM")
      .setTitle(`Info about ${client.user.username}.`)
      .addField(
        "**Ping Bot**",
        `${Date.now() - message.createdTimestamp}` + "MS",
        true
      )
      .addField(
        "**Ram Usage**",
        `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
        true
      )
      .addField("**Name Bot**", `[ ${client.user.tag} ]`, true)
      .addField("**ID Bot**", `[ ${client.user.id} ]`, true)
      .addField("**Prefix Bot**", `[ ${prefix} ]`, true)
      .addField("**Owner Bot**", `[ CAROL ]`, true)
      .setFooter("Security");

    message.channel.send(tnx);
  }
});

////

client.on('message', prof=>
{
    if(prof.author.bot)return;
    let args = prof.content.split(" ").slice(1).join(" ")
    if(!prof.member.hasPermission('ADMINISTRATOR')) return;
    if(prof.content.startsWith(prefix + 'say'))
    {
        var professor = new Discord.MessageEmbed()
        .setAuthor(prof.guild.name)
        .setThumbnail(prof.guild.iconURL())
        .setColor('#RANDOM')
        .setDescription(args)////الرد حقك
        .setTimestamp()
        prof.delete(1000);
        prof.channel.send(professor);
    }
});
/////


///////

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == "count")
    message.reply(`**${message.guild.memberCount}**`);
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
client.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

////////

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});

/////

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`❌ You can not do this.`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`❌ You can not do this.`);
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});

////////
client.on("message", msg => {

  if (msg.content === "سلاو") {
    msg.reply(
     ".سلاو سرچاو بخیربیت"
    );
  }

});
//////
client.on("message", msg => {
  if (msg.content === "Slaw") {
    msg.reply(
      "Slaw Sarchaw bxer bet jina."
    );
  }
});
///////

client.on("message", msg => {

  if (msg.content === "slaw") {

    msg.reply("Slaw Sarchaw bxer bet jina.");
  }
});

//////

client.on("message", msg => {
  if (msg.content === "Hi") {
    msg.reply("Hello, welcome to the server.⁩"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Hello") {
    msg.reply(
      "Hi, welcome to the server."
    );
  }
});
//////
client.on("message", message => {
  //
  if (message.content.includes("discord.gg")) {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
      message.delete();
      message.reply("You can not leave a link, please stop");
      message.react("🚫");
    }
  }
});

////////

client.on("message", storm => {
  if (storm.content.startsWith(prefix + "uinvites")) {
    storm.guild.fetchInvites().then(invs => {
      let user = storm.mentions.users.first() || storm.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      storm.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});

/////////
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user")) {
    var professor = new Discord.MessageEmbed()
    .setAuthor(client.user.username)
      .setThumbnail(client.user.avatarURL())
    .setColor("#0c0b0b")
      .setTitle("Your Info User")
      .addField("👤| Your Name", `<@${prof.author.id}>`)
    .addField("🆔| Your ID", `${prof.author.id}`)  
    .setImage("https://cdn.discordapp.com/attachments/764927608013193276/782272576885096468/image0.gif")
    .addField("🌐| Create User", prof.author.createdAt.toLocaleString())
      .setFooter(`${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
   prof.channel.send(professor);
  }
});
/////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "emoji")) {
    if (message.author.bot) return;
    var emojiid = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    console.log(emojiid);
    if (emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid))
      return message.channel.send(`- Usage  
${prefix}emoji <EmojiID>`);
    else
      message.channel.send("This is the emoji that you requested:-", {
        files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
      });
  }
});

//////////////mute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission 🚫**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission 🚫**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted! **`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission 🚫**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission 🚫**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

//////////

///////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "roles") {
    let roles = message.guild.roles.cache
      .map(r => `[ ${r.name}  - Color ${r.color} ]`)
      .join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Roles")
      .setDescription(" ```javascript\n" + roles + "``` ");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let roles = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All Roles For Server");
    message.channel.send(roles);
  }
});

////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});

////////avatar

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "avatar") {
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.member.cache.get(args[1]);
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(user.username, user.avatarURL())
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    );
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send everyone .```");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here .```");
  }
});

//////

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("**Info Server**")
      .addField(" ⚠️| **Server Name:**", `${prof.guild.name}`)
      .addField(" 👑| **Owner Server:**", `${prof.guild.owner}`)
      .addField(" 🔰| **Server ID:**", `${prof.guild.id}`)
      .addField(" ✅| **Created:**", `${prof.guild.createdAt.toLocaleString()}`)
      .addField(" 🚦| **Members:**", `${prof.guild.memberCount}`)
      .addField(" 🔳| **Channels:**", `${prof.guild.channels.cache.size}`)
      .addField(" 🌐| **Region**:", `${prof.guild.region}`)
      .addField(" **Roles:**", ` ${prof.guild.roles.cache.size}`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});

//////

client.on("message", message => {
      if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

////////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)**`
        )
      )
      .catch(console.error);
  }
});

///////

client.on("message", message => {
  if (message.content.startsWith(prefix + "support")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Support](https://discord.gg/ff5s2eBzES)`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLUE");
    message.author.send(embed);
    message.react("✅");
  }
});

////////

client.on("message", professor => {
  if (professor.content.startsWith(prefix + "antibot on")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "On"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setThumbnail(professor.guild.iconURL())
      .setColor("#0000")
      .setTitle("AntiBot On ✅")
      .setDescription(
        `The AntiBots Join Is On ⚒| > By <@${professor.author.id}>`
      )
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("✅");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", professor => {
  if (professor.content.startsWith(prefix + "antibot off")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "Off"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setThumbnail(professor.guild.iconURL())
      .setColor("#0000")
      .setTitle("AntiBot Off | ❎")
      .setDescription(
        `The AntiBots Join Is Off ⚒ | > By <@${professor.author.id}>`
      )
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("❎");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});

///////


client.on('ready',async () => {
    console.log("Starting..");
    let g = client.guilds.cache.get("778740313266847805"); // id server
    let c = g.channels.cache.get("783780326060982334");// id channel
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(g.me.voiceChannel && g.me.voiceChannelID !== c.id || !g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log('Failed To Join: \n The Channel Type isn "Listening."')
    }
});
