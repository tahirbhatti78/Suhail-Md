const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_32_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRjdUZjNYdGd4TE5VekQ1L0xHalhzeDJDaDlGT3owNE4ycHFVaTlCTDVFYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNjczNDc0MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCOEZDODIzM0JGMzc1RTc4MUUxQTcwRUUxOUVFMERFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDIyNTk2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2NzM0NzQyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUU0QjU4NkVDOTVBMzdCNzQ3Q0NGMzkyMzBEOUFGQ0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjI1OTYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImg4QXUwb1NiUU9xTFVvdG1OSHRTSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDgzMzMxZDItOTkwYS00MWYzLTlmZDMtYmRlZjI1YmVlOGE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDcsXG4gICAgICAxOTcsXG4gICAgICAyMDQsXG4gICAgICAxOTYsXG4gICAgICAxMTgsXG4gICAgICAxNzAsXG4gICAgICAxMDQsXG4gICAgICAxNSxcbiAgICAgIDQ1LFxuICAgICAgMTEwLFxuICAgICAgMTE2LFxuICAgICAgMjM5LFxuICAgICAgMzIsXG4gICAgICAyMTEsXG4gICAgICAyNDYsXG4gICAgICA2MixcbiAgICAgIDE3LFxuICAgICAgMTIzLFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg3LFxuICAgICAgMTU3LFxuICAgICAgMTcsXG4gICAgICAyMDYsXG4gICAgICAyNDQsXG4gICAgICA1NixcbiAgICAgIDIzMSxcbiAgICAgIDI0MixcbiAgICAgIDE5MSxcbiAgICAgIDI1MSxcbiAgICAgIDIxNixcbiAgICAgIDI0NyxcbiAgICAgIDIxMSxcbiAgICAgIDM0LFxuICAgICAgMTk3LFxuICAgICAgMjEsXG4gICAgICAzMSxcbiAgICAgIDI1MCxcbiAgICAgIDI1MSxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUk0xVlQ5TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTY3MzQ3NDI0OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTU2NDYxNzkxNjUwMDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xPRW5Sc1FvS0dpdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnU1T3ZBR0lUSkhPMExJVGxPaEE1OVhmSHpXa3BqcEYvem1YR1BoSFhUWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXTGlRMkE4VHAxNnhZeHArYTA1YTBJK2VNNGNvblRTNUhWLytIbldIU1E2U2ZNQ1kxQXFsSWNjVHJYaVhwalZtdUR2UnZoN2dUVHM3MkpiTDRqcnhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrOWFOUjMrelBSbGhKQVRmU3FuVkg5Q0hmcnVGMy9mRmI1ODFGZFVWV3VuMWpFS0RLLzFlN1pSZE43ZFpuQTBBbjhZT1pOTTYxb1d3aHhiaVpNdGJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjczNDc0MjQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIyNTk1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlBeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUF5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiaTlrQXdTQm1COWswSDFhcXA5ZWRURnNIRmF5YlhJUUx4UG1pTUkyOFh3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzA5ODgwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjI1OTYzNTc2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
