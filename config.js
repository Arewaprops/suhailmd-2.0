const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348099711133";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_07_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhWWU3bCs2T0dkWlJ1REpBNlljamVBME5mbUxyYzVBMnByam5hZ2M1K1ZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0OW1ZSDBCZVFGR1NyTGxoVDlCZWhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5ZTc2ZTBiLTFiYjMtNDYyMy1iOWE4LTJjNjZkYjhkYmI0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxMDcsXG4gICAgICAxNSxcbiAgICAgIDIzLFxuICAgICAgMTc4LFxuICAgICAgMTU3LFxuICAgICAgMTI1LFxuICAgICAgOTcsXG4gICAgICAxNDQsXG4gICAgICAyMDUsXG4gICAgICAxMjMsXG4gICAgICA1NSxcbiAgICAgIDgzLFxuICAgICAgMTgzLFxuICAgICAgMjAxLFxuICAgICAgNTQsXG4gICAgICAxODYsXG4gICAgICAxNDYsXG4gICAgICA2OSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA3OCxcbiAgICAgIDExNixcbiAgICAgIDE3MyxcbiAgICAgIDE0NSxcbiAgICAgIDEyOCxcbiAgICAgIDE5MixcbiAgICAgIDEwNCxcbiAgICAgIDE4NixcbiAgICAgIDE4NixcbiAgICAgIDksXG4gICAgICAxOTgsXG4gICAgICAxNDgsXG4gICAgICAxMSxcbiAgICAgIDkzLFxuICAgICAgMTM3LFxuICAgICAgNDYsXG4gICAgICAyMzMsXG4gICAgICAxMjAsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMkJ4WTRHRVBtMnBMa0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJtVHhXZjFRZWt4dnZmWmpMc2JUc3UrT3lEY3QxY1VTb0VjT3pwTitIVFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ3Z1VXpLV3kybTB6bC96Y0ZsNGNjVFVWSHB5bVV4R05zYkhNSTMvNndLZlNTWmpzQmdHU2MwMHhZTk9XMUo2R2lPSmlCbVFtdXF3Uy9mc3NuYXllZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMGtwZUF6NE50NGZZdFpyOGNXOGFRUkZYa3ZtNjRwNTZkL3VQZWt5VGZGVHcvejlJeHovM1hWZ3g1eGFMRFkwb28xSWM3SGc4bDRtcEdvKzk0ZTNZQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDk5NzExMTMzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOYXppcmEgQWJkdWxrYXJpbSBFc3FcIixcbiAgICBcImxpZFwiOiBcIjU3MDI0NDgyMTc3MjUxOjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDk5NzExMTMzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3NDcyNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFK0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUrSC5qc29uIjogIntcImtleURhdGFcIjpcIlJRMFkrWjNKMGtpRVpsOFFNclFQbGtReWpiUDlTTnpxL1BMYlE5WXR5NXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0MTEwMzU2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNTI3MjQzNjkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
