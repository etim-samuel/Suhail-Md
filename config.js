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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349098281393

";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_59_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMSxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImswalJOQTRJT2VPNkVtTUJRWlRFQ3p5SFdVSndOdkthcis0enJTUkFyVkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5LNUs1c1ZZUVotMVRkR1pSTUlINWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGNmOWQ0ZWUtNDYzMC00NWExLWExYmYtNjU0MTRlNjRjY2E2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDIzNSxcbiAgICAgIDI1MixcbiAgICAgIDIyMyxcbiAgICAgIDE3MCxcbiAgICAgIDUwLFxuICAgICAgNjEsXG4gICAgICAzNSxcbiAgICAgIDExMixcbiAgICAgIDI1MSxcbiAgICAgIDcwLFxuICAgICAgMjEyLFxuICAgICAgODgsXG4gICAgICA4MyxcbiAgICAgIDcwLFxuICAgICAgMjI1LFxuICAgICAgMzcsXG4gICAgICAxMjQsXG4gICAgICAyMDMsXG4gICAgICAyNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgNTUsXG4gICAgICAzMyxcbiAgICAgIDk2LFxuICAgICAgMjM5LFxuICAgICAgMTk2LFxuICAgICAgMTU1LFxuICAgICAgMjgsXG4gICAgICAyMDUsXG4gICAgICA5MSxcbiAgICAgIDE2OSxcbiAgICAgIDQ0LFxuICAgICAgOSxcbiAgICAgIDEyMCxcbiAgICAgIDY0LFxuICAgICAgMTk3LFxuICAgICAgMTA3LFxuICAgICAgMjUxLFxuICAgICAgMTk4LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJEQVdHSE1MXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDk4MjgxMzkzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzE1ODY1MjA1MTU2MTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xSmdkc0JFS0hpbXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOThDcmUxZzE5c1cxR1pSc2tBdkV0REVrYnZoNHBTczNOQW5ibUd1SXJFUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwRjYzVDBYKzJuc0NpQ0xqZWxCZjlvSmVJSUZKUzZEb1dQRHROZFpMcjNSWjhBSU00VUhYTGl2R3NNVE1lTmVld0Z4SkRSOE9oVTNDcDdESTNMdXpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1NmhNK0t6MUhPcEZZMSsrdGRKL1h4WVlES3VBc2JBTTB2Vm5zaERoL0VHd002RVpxUmRUT05lUzM0K2NOWTBwME1ySDhFTmROYVVMMDVUYlQvbmZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDk4MjgxMzkzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMDAzNjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
