#!/usr/bin/env node
import { Worker, isMainThread, workerData, parentPort } from "worker_threads";
import nodemailer from "nodemailer";
import qrcode from "qrcode";
import nhti from "node-html-to-image";
import { SocksProxyAgent } from "socks-proxy-agent";
import npib from "nodemailer-plugin-inline-base64";
import emlformat from "eml-format";
import { fileURLToPath } from "url";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const path = require("path");
const random = require("random-name");
import inquirer from "inquirer";
import axios from "axios";
import "loading-cli";
import cfonts from "cfonts";
const {
  setup,
  smtp,
  generate_random_number,
  generate_QRCODE,
  generate_random_string,
  setup_time_date,
  attachment,
  myLOGO,
  attachment_EML,
  others,
  redirect_link,
  calendar_invite
} = require("./settings");
import fs from "fs";
import "colors";
var array = fs.readFileSync(__dirname + "/" + setup.mailist).toString().split("\n");
if (array.length == 1 && array[0] == "") {
  console.error("please input your mailist into file mailist.txt".red);
  process.exit(0);
}
import "random-places";
const {
  name: city,
  country
} = getRandomPlace();
import randomipv4 from "random-ipv4";
import ejs from "ejs";
const ejs_random = {
  RANDNUM: () => Math.floor(Math.random() * 900000) + 100000,
  RANDPATH: () => Math.random().toString(36).substring(2, 15),
  RANDCHAR: () => Math.random().toString(36).substring(2, 20),
  RANDHEX: () => Math.floor(Math.random() * 16777215).toString(16),
  RANDTIME: () => Date.now() + Math.floor(Math.random() * 86400000),
  RANDID: () => Math.random().toString(36).substring(2, 10) + Date.now().toString(36).substring(2, 5),
  RAND8: () => Math.random().toString(36).substring(2, 10),
  RAND12: () => Math.random().toString(36).substring(2, 14),
  RAND16: () => Math.random().toString(36).substring(2, 18)
};
global.puppeteerFix = {
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage",
    "--disable-accelerated-2d-canvas",
    "--no-first-run",
    "--no-zygote",
    "--disable-gpu",
    "--disable-background-timer-throttling",
    "--disable-renderer-backgrounding",
    "--disable-features=TranslateUI",
    "--disable-ipc-flooding-protection",
    "--disable-hang-monitor",
    "--disable-prompt-on-repost",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-component-extensions-with-background-pages",
    "--disable-features=ImprovedCookieControls,LazyFrameLoading,GlobalMediaControls,DestroyProfileOnBrowserClose,DeviceDiscoveryNotifications"
  ],
  headless: true,
  ignoreHTTPSErrors: true
};
import "html-pdf";
import email2name from "email-to-name";
const timer = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let indexSmtp = 0;
let transporter;
let useSmtp = 0;
let transposterArray = [];
let agent = "";
if (setup.proxy != "") {
  const proxyUrl = setup.proxy;
  agent = new SocksProxyAgent(proxyUrl);
}
try {
  for (let index = 0; index < smtp.length; index++) {
    transposterArray[index] = nodemailer.createTransport({
      service: others.service,
      name: smtp[indexSmtp].username.split("@")[1],
      host: smtp[index].host,
      pool: true,
      maxConnections: 20,
      ignoreTLS: others.ignoreTLS,
      maxMessages: 19,
      requireTLS: others.requireTLS,
      proxy: setup.proxy,
      agent: agent,
      port: smtp[index].port,
      secure: smtp[index].secure,
      auth: {
        user: smtp[index].username,
        pass: smtp[index].password
      },
      tls: {
        rejectUnauthorized: others.rejectUnauthorized
      }
    });
  }
} catch (err) {}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function generateRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += "abcdefghijklmnopqrstuvwxyz".charAt(
      Math.floor(Math.random() * "abcdefghijklmnopqrstuvwxyz".length)
    );
  }
  return result;
}
function generateRandomPath() {
  const depth = Math.floor(Math.random() * 5) + 1;
  let path = "/";
  for (let i = 0; i < depth; i++) {
    const segmentLength = Math.floor(Math.random() * 10) + 1;
    const segment = generateRandomString(segmentLength);
    path += segment + "/";
  }
  return path;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomDivideAndFormatRoute2(input) {
  let replaced = input.replace(/\./g, "-");
  let segments = [];
  let index = 0;
  let counter = 1;

  while (index < replaced.length) {
    let chunkSize = Math.floor(Math.random() * 5) + 1;
    let chunk = replaced.substring(index, index + chunkSize);
    let prefix = /^[0-9]/.test(chunk) ? counter + "-" : "" + counter;
    segments.push(prefix + chunk);
    index += chunkSize;
    counter++;
  }
  let extras = [];
  let extrasCount = Math.floor(Math.random() * (segments.length - 1 + 1)) + 1;

  for (let i = 0; i < extrasCount; i++) {
    let randomLength = Math.floor(Math.random() * 5) + 1;
    let randomStr = generateRandomString(randomLength);
    let leading = randomLength % 2 === 1 ? "0" : "";
    extras.push((leading ? "" + leading : "") + randomStr);
  }
  let allParts = segments.concat(extras);
  shuffleArray(allParts);
  let route = allParts.join("/") + "/";
  return route;
}
function getRandomValue(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
function randomDivideAndFormatRoute(input) {
  let replaced = input.replace(/\./g, "-");
  let segments = [];
  let index = 0;
  while (index < replaced.length) {
    let chunkSize = Math.floor(Math.random() * 5) + 1;
    let chunk = replaced.substring(index, index + chunkSize);
    segments.push(chunk);
    index += chunkSize;
  }
  let route = segments.join("/") + "/";
  return route;
}
async function sendEmail(transporter, recipientEmail, fromEmail, outputPath) {
  if (!recipientEmail) {
    process.exit(1);
  }
  try {
    let companyName = recipientEmail.split("@")[1].split(".")[0][0].toUpperCase() + recipientEmail.split("@")[1].split(".")[0].slice(1);
    let recipientName = email2name.process(recipientEmail);
    recipientEmail = recipientEmail.replace(/(\r\n|\n|\r)/gm, "");
    let emailDomain = recipientEmail.split("@")[1];
    // let logoUrl = "https://logos-api.apistemic.com/domain" + ":" + emailDomain;
	let logoUrl = `https://img.logo.dev/${emailDomain}?token=pk_Zvd_Nr-OTMCWRm7Z5ILALw&size=128`;
    let renderedHtml;
    let myLogoImg = "<img src=\"cid:mylogo\" width=" + setup.widthImage_for_myLogo_letter + " height=\"" + setup.heightImage_for_myLogo_letter + " alt=\"logos.png\">";
    let letterToImageHtml = "";
    const {
      name: randomCity,
      country: randomCountry
    } = getRandomPlace();
    let logoReplacements = {};
    if (setup.useMylogo === true) {
      for (let i = 0; i < myLOGO.length; i++) {
        logoReplacements[myLOGO[i].function_name] = "<img src=\"cid:melog" + i + "\" alt=\"Inline Image\">";
      }
    }
    const qrCodeColors = {
      dark: "" + generate_QRCODE.foreground_color,
      light: "" + generate_QRCODE.background_color
    };
    const qrCodeOptions = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 100,
      margin: 1,
      color: qrCodeColors
    };
    let templateRegex = /\<(.*?)\>/g;
    let match;
    let qrCodeLink = generate_QRCODE.link;
    while ((match = templateRegex.exec(generate_QRCODE.link)) !== null) {
      if (match.index === templateRegex.lastIndex) {
        templateRegex.lastIndex++;
      }
      qrCodeLink = qrCodeLink.replace(match[0], replaceIt(match[1], recipientEmail));
    }
    let qrCodeDataUrl = "";
    let qrCodeHtml = "";
    if (generate_QRCODE.activate) {
      try {
        qrCodeDataUrl = await qrcode.toDataURL(qrCodeLink, qrCodeOptions);
        qrCodeHtml = "<img height=\"200\" width=\"200\" src=\"" + qrCodeDataUrl + "\">";
      } catch (error) {
        console.error(error);
      }
    }
    let logoHtml = "";
	if (setup.useGrabLogo) {
		const logoWidth = setup.widthImage_for_grabLogo_letter || 80;
		const logoHeight = setup.heightImage_for_grabLogo_letter || 80;
		
      if (emailDomain == "outlook.com" || emailDomain == "hotmail.com" || emailDomain == "office365.com") {
        const outlookLogo = await fetchImageAsBase64("https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31");
        //logoHtml = "<img  src=\"" + outlookLogo + "\">";
		logoHtml = `<img src="${outlookLogo}" width="${logoWidth}" height="${logoHeight}" alt="Microsoft Logo" style="max-width:100%; height:auto;">`;
      } else {
        const domainLogo = await fetchImageAsBase64(logoUrl);
        // logoHtml = "<img  src=\"" + domainLogo + "\">";
		logoHtml = `<img src="${domainLogo}" width="${logoWidth}" height="${logoHeight}" alt="${companyName} Logo" style="max-width:100%; height:auto;">`;
      }
    }
    let letterImageBase64 = "";
    if (setup.LetterToImage) {
      renderedHtml = await ejs.renderFile(__dirname + "/" + setup.fileName_LetterToImage, {
        NAME: recipientName,
        COMPANYNAME: companyName,
        EMAIL: recipientEmail,
        RANDOMNAME: random(),
        FIRSTRANDOMNAME: random.first(),
        MIDDLERANDOMNAME: random.middle(),
        LASTRANDOMNAME: random.last(),
        EMAIL64: Buffer.from(recipientEmail).toString("base64"),
        DOMAIN: emailDomain,
        RANDOMIP: randomipv4,
        TOBASE64: function (content) {
          return Buffer.from(content).toString("base64");
        },
        QRCODE: "<img id=\"zeroimage\" width=\"" + generate_QRCODE.width + "\" height=\"" + generate_QRCODE.height + "\" src=\"" + qrCodeDataUrl + "\">",
        RANDOMCITY: randomCity,
        RANDOMCOUNTRY: randomCountry,
        DATE: dateToday,
        HIDEEMAIL: hideEmail(recipientEmail),
        TIME: time,
        LOGO: logoHtml,
		// LOGO: "<img src=\"" + logoUrl + "\" width=" + setup.widthImage_for_grabLogo_letter + " height=\"" + setup.heightImage_for_grabLogo_letter + "   alt=\"logo2.png\">",
        ...logoReplacements,
        DATETOMORROW: dateTomorrow,
        ...array_random_number,
        ...array_random_string,
        ...logoReplacements,
		...ejs_random
		}, { async: true }); 
      const screenshotOptions = {
        width: setup.width_imageLetter,
        height: setup.height_imageLetter,
        deviceScaleFactor: 3
      };
      await nhti({
  output: outputPath,
  html: renderedHtml,
  type: "jpeg",
  quality: 100,
  puppeteerArgs: {
    args: global.puppeteerFix.args.concat([
      "--window-size=" + setup.width_imageLetter + "," + setup.height_imageLetter
    ]),
    defaultViewport: screenshotOptions,   // ← YOU KEEP FULL CONTROL HERE
    ...global.puppeteerFix                  // ← all the magic flags
  }
});
      let imageBuffer = fs.readFileSync(outputPath);
      const base64Image = Buffer.from(imageBuffer).toString("base64");
      letterImageBase64 = base64Image;
      letterToImageHtml = "<img  src=\"data:image/png;base64," + letterImageBase64 + "\" width=\"" + setup.width_imageLetter_2 + "\" height=\"" + setup.height_imageLetter_2 + "\">";
    }
    let encodedUrl = encodeURIComponent(recipientEmail + "/" + redirect_link.key + "/" + redirect_link.enc_email);
    async function fetchImageAsBase64(imageUrl) {
      try {
        const response = await axios.get(imageUrl, {
          responseType: "arraybuffer"
        });
        const base64 = Buffer.from(response.data, "binary").toString("base64");
        const contentType = response.headers["content-type"];
        return "data:" + contentType + ";base64," + base64;
      } catch (error) {
        console.error("Error converting image to base64:", error.message);
        return null;
      }
    }
    let emailContent = await ejs.renderFile(__dirname + "/" + setup.letter, {
      NAME: recipientName,
      COMPANYNAME: companyName,
      EMAIL: recipientEmail,
      EMAIL64: Buffer.from(recipientEmail).toString("base64"),
      DOMAIN: emailDomain,
      RANDOMIP: randomipv4,
      BASE64IMAGE: letterImageBase64,
      AUTOGRAB: encodedUrl,
      ENCODEURL: function (url) {
        return encodeURIComponent(url);
      },
      TOBASE64: function (content) {
        return Buffer.from(content).toString("base64");
      },
      LETTERTOIMAGE: letterToImageHtml,
      RANDOMNAME: random(),
      FIRSTRANDOMNAME: random.first(),
      MIDDLERANDOMNAME: random.middle(),
      LASTRANDOMNAME: random.last(),
      RANDOMCITY: randomCity,
      QRCODE: qrCodeHtml,
      RANDOMCOUNTRY: randomCountry,
      DATE: dateToday,
      HIDEEMAIL: hideEmail(recipientEmail),
      TIME: time,
      LOGO: logoHtml,
      MYLOGO: myLogoImg,
      DATETOMORROW: dateTomorrow,
      ...array_random_number,
      ...array_random_string,
      ...logoReplacements,
	  ...ejs_random
	  }, { async: true });
    let fromName = setup.from_name;
    let subject = setup.mail_subject;
    // let fromMail = fromEmail;
	// let fromMail = setup.from_email; // || fromEmail;
	let fromMail = fromEmail
		.replace(/<EMAIL>/g, recipientEmail)
		.replace(/<DOMAIN>/g, recipientEmail.split("@")[1]);
    let replyTo = setup.replyTo;
    let attachmentName = setup.attachmentName;
    let calendarSummary = calendar_invite.SUMMARY;
    let calendarDescription = calendar_invite.DESCRIPTION;
    let calendarLocation = calendar_invite.LOCATION;
    let calendarOrganizerName = calendar_invite.ORGANIZER_CN;
    let calendarOrganizerEmail = calendar_invite.ORGANIZER_EMAIL;
    let calendarAttendeeName = calendar_invite.ATTENDEE_CN;
    let calendarAttendeeEmail = calendar_invite.ATTENDEE_EMAIL;
    let calendarReminderText = calendar_invite.REMINDER_TEXT;
    let summaryMatch;
    let locationMatch;
    let descriptionMatch;
    let organizerNameMatch;
    let organizerEmailMatch;
    let attendeeNameMatch;
    let attendeeEmailMatch;
    let reminderTextMatch;
    let fromNameMatch;
    let subjectMatch;
    let fromMailMatch;
    let replyToMatch;
    let attachmentNameMatch;
    let emlSubjectMatch;
    let emlFromMatch;
    let emlAttachmentNameMatch;
    const placeholderRegex = /\<(.*?)\>/g;
    const attachmentFilenames = [];
    const multiSubjects = [];
    const multiFromNames = [];
    const emlAttachmentNames = [];
    let emlAttachmentName = attachment_EML.attachment_name_EML;
    let emlSubject = attachment_EML.subject_eml;
    let emlFromEmail = attachment_EML.from_email_eml;
    if (calendar_invite.active) {
      while ((summaryMatch = placeholderRegex.exec(calendar_invite.SUMMARY)) !== null) {
        if (summaryMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarSummary = calendarSummary.replace(summaryMatch[0], replaceIt(summaryMatch[1], recipientEmail));
      }
      while ((descriptionMatch = placeholderRegex.exec(calendar_invite.DESCRIPTION)) !== null) {
        if (descriptionMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarDescription = calendarDescription.replace(descriptionMatch[0], replaceIt(descriptionMatch[1], recipientEmail));
      }
      while ((locationMatch = placeholderRegex.exec(calendar_invite.LOCATION)) !== null) {
        if (locationMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarLocation = calendarLocation.replace(locationMatch[0], replaceIt(locationMatch[1], recipientEmail));
      }
      while ((organizerNameMatch = placeholderRegex.exec(calendar_invite.ORGANIZER_CN)) !== null) {
        if (organizerNameMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarOrganizerName = calendarOrganizerName.replace(organizerNameMatch[0], replaceIt(organizerNameMatch[1], recipientEmail));
      }
      while ((organizerEmailMatch = placeholderRegex.exec(calendar_invite.ORGANIZER_EMAIL)) !== null) {
        if (organizerEmailMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarOrganizerEmail = calendarOrganizerEmail.replace(organizerEmailMatch[0], replaceIt(organizerEmailMatch[1], recipientEmail));
      }
      while ((attendeeNameMatch = placeholderRegex.exec(calendar_invite.ATTENDEE_CN)) !== null) {
        if (attendeeNameMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarAttendeeName = calendarAttendeeName.replace(attendeeNameMatch[0], replaceIt(attendeeNameMatch[1], recipientEmail));
      }
      while ((attendeeEmailMatch = placeholderRegex.exec(calendar_invite.ATTENDEE_EMAIL)) !== null) {
        if (attendeeEmailMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarAttendeeEmail = calendarAttendeeEmail.replace(attendeeEmailMatch[0], replaceIt(attendeeEmailMatch[1], recipientEmail));
      }
      while ((reminderTextMatch = placeholderRegex.exec(calendar_invite.REMINDER_TEXT)) !== null) {
        if (reminderTextMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        calendarReminderText = calendarReminderText.replace(reminderTextMatch[0], replaceIt(reminderTextMatch[1], recipientEmail));
      }
    }
    if (attachment_EML.use_EML) {
      let hasEmlAttachments = false;
      for (let i = 0; i < attachment_EML.attachment.length; i++) {
        hasEmlAttachments = true;
        emlAttachmentNames[i] = attachment_EML.attachment[i].attachmentName;
        while ((attachmentNameMatch = placeholderRegex.exec(attachment_EML.attachment[i].attachmentName)) !== null) {
          if (attachmentNameMatch.index === placeholderRegex.lastIndex) {
            placeholderRegex.lastIndex++;
          }
          emlAttachmentNames[i] = emlAttachmentNames[i].replace(attachmentNameMatch[0], replaceIt(attachmentNameMatch[1], recipientEmail));
        }
      }
    }
    if (setup.multiple_subject) {
      let hasMultiSubject = false;
      for (let i = 0; i < setup.multi_subject.length; i++) {
        hasMultiSubject = true;
        multiSubjects[i] = setup.multi_subject[i];
        while ((attachmentNameMatch = placeholderRegex.exec(setup.multi_subject[i])) !== null) {
          if (attachmentNameMatch.index === placeholderRegex.lastIndex) {
            placeholderRegex.lastIndex++;
          }
          multiSubjects[i] = multiSubjects[i].replace(attachmentNameMatch[0], replaceIt(attachmentNameMatch[1], recipientEmail));
        }
        if (!hasMultiSubject) {
          multiSubjects[i] = setup.multi_subject[i];
          hasMultiSubject = false;
        }
      }
    }
    if (setup.multiple_fromName) {
      let hasMultiFromName = false;
      for (let i = 0; i < setup.multi_FromName.length; i++) {
        hasMultiFromName = true;
        multiFromNames[i] = setup.multi_FromName[i];
        while ((attachmentNameMatch = placeholderRegex.exec(setup.multi_FromName[i])) !== null) {
          if (attachmentNameMatch.index === placeholderRegex.lastIndex) {
            placeholderRegex.lastIndex++;
          }
          multiFromNames[i] = multiFromNames[i].replace(attachmentNameMatch[0], replaceIt(attachmentNameMatch[1], recipientEmail));
        }
        if (!hasMultiFromName) {
          multiFromNames[i] = setup.multi_FromName[i];
          hasMultiFromName = false;
        }
      }
    }
    if (attachment_EML.use_EML) {
      while ((emlFromMatch = placeholderRegex.exec(attachment_EML.from_email_eml)) !== null) {
        if (emlFromMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        emlFromEmail = emlFromEmail.replace(emlFromMatch[0], replaceIt(emlFromMatch[1], recipientEmail));
      }
    }
    if (attachment_EML.use_EML) {
      while ((emlSubjectMatch = placeholderRegex.exec(attachment_EML.subject_eml)) !== null) {
        if (emlSubjectMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        emlSubject = emlSubject.replace(emlSubjectMatch[0], replaceIt(emlSubjectMatch[1], recipientEmail));
      }
    }
    if (attachment_EML.use_EML) {
      while ((emlAttachmentNameMatch = placeholderRegex.exec(attachment_EML.attachment_name_EML)) !== null) {
        if (emlAttachmentNameMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        emlAttachmentName = emlAttachmentName.replace(emlAttachmentNameMatch[0], replaceIt(emlAttachmentNameMatch[1], recipientEmail));
      }
    }
    if (!setup.multiple_fromName) {
      while ((fromNameMatch = placeholderRegex.exec(setup.from_name)) !== null) {
        if (fromNameMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        fromName = fromName.replace(fromNameMatch[0], replaceIt(fromNameMatch[1], recipientEmail));
      }
    }
    if (!setup.multiple_subject) {
      while ((subjectMatch = placeholderRegex.exec(setup.mail_subject)) !== null) {
        if (subjectMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        subject = subject.replace(subjectMatch[0], replaceIt(subjectMatch[1], recipientEmail));
      }
    }
    while ((fromMailMatch = placeholderRegex.exec(setup.from_email)) !== null) {
      if (fromMailMatch.index === placeholderRegex.lastIndex) {
        placeholderRegex.lastIndex++;
      }
      fromMail = fromMail.replace(fromMailMatch[0], replaceIt(fromMailMatch[1], recipientEmail));
    }
    while ((replyToMatch = placeholderRegex.exec(setup.replyTo)) !== null) {
      if (replyToMatch.index === placeholderRegex.lastIndex) {
        placeholderRegex.lastIndex++;
      }
      replyTo = attachmentName.replace(replyToMatch[0], replaceIt(replyToMatch[1], recipientEmail));
    }
    let hasAttachments = false;
    for (let i = 0; i < attachment.length; i++) {
      hasAttachments = true;
      attachmentFilenames[i] = attachment[i].filename;
      while ((attachmentNameMatch = placeholderRegex.exec(attachment[i].filename)) !== null) {
        if (attachmentNameMatch.index === placeholderRegex.lastIndex) {
          placeholderRegex.lastIndex++;
        }
        attachmentFilenames[i] = attachmentFilenames[i].replace(attachmentNameMatch[0], replaceIt(attachmentNameMatch[1], recipientEmail));
      }
      if (!hasAttachments) {
        attachmentFilenames[i] = attachment[i].filename;
        hasAttachments = false;
      }
    }
    async function prepareAttachments(logoUrl) {
      const attachments = [];
      if (setup.useMylogo) {
        for (let i = 0; i < myLOGO.length; i++) {
          const logoAttachment = {
            filename: "sabarbossqqq.jpeg",
            path: myLOGO[i].nameFile,
            contentDisposition: "inline",
            cid: "melog" + i
          };
          attachments.push(logoAttachment);
        }
      }
      if (generate_QRCODE.activate) {}
      if (setup.useAttachment == true) {
        let renderedAttachment;
        for (let i = 0; i < attachment.length; i++) {
          if (path.extname(attachment[i].path) == ".html") {
            renderedAttachment = await ejs.renderFile(__dirname + "/" + attachment[i].path, {
              NAME: recipientName,
              COMPANYNAME: companyName,
              EMAIL: recipientEmail,
              EMAIL64: Buffer.from(recipientEmail).toString("base64"),
              DOMAIN: emailDomain,
              RANDOMNAME: random(),
              FIRSTRANDOMNAME: random.first(),
              MIDDLERANDOMNAME: random.middle(),
              LASTRANDOMNAME: random.last(),
              ENCODEURL: function (url) {
                return encodeURIComponent(url);
              },
              LETTERTOIMAGE: letterToImageHtml,
              QRCODE: qrCodeHtml,
              RANDOMIP: randomipv4,
              RANDOMCITY: randomCity,
              TOBASE64: function (content) {
                return Buffer.from(content).toString("base64");
              },
              HIDEEMAIL: hideEmail(recipientEmail),
              RANDOMCOUNTRY: randomCountry,
              DATE: dateToday,
              TIME: time,
              LOGO: "<img src=\"" + logoUrl + "\" width=" + setup.widthImage_for_grabLogo_attachment + " height=\"" + setup.heighttImage_for_grabLogo_attachment + "   alt=\"logo2.png\">",
              ...logoReplacements,
              DATETOMORROW: dateTomorrow,
              ...array_random_number,
              ...array_random_string,
			  ...ejs_random
			  }, { async: true });
            if (attachment[i].attachmentToPdf == true) {
  const puppeteer = require('puppeteer'); // Already used by node-html-to-image

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();

    // THIS LINE IS THE ONLY THING WE ADDED FOR SCALING (you love this look)
    await page.addStyleTag({ content: "body { zoom: 0.70; -moz-transform: scale(0.70); transform: scale(0.70); transform-origin: 0 0; width: 142%; margin:0; }" });

    await page.setContent(renderedAttachment, { waitUntil: 'networkidle0' });

    // THIS IS THE ONLY LINE WE ADDED FOR LANDSCAPE/PORTRAIT
    const landscapeMode = setup.pdfOrientation && setup.pdfOrientation.toLowerCase().includes('land');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      landscape: landscapeMode,           // ← this is the magic
      printBackground: true,
      margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
    });

    await browser.close();

    const finalName = attachmentFilenames[i].endsWith('.pdf') 
      ? attachmentFilenames[i] 
      : attachmentFilenames[i] + '.pdf';

    attachments.push({
      filename: finalName,
      content: pdfBuffer.toString('base64'),
      encoding: 'base64',
      contentType: 'application/pdf'
    });

    console.log(`PDF attached → ${finalName} (${landscapeMode ? 'LANDSCAPE' : 'PORTRAIT'})`.green);

  } catch (err) {
    console.error("Puppeteer PDF failed:".red, err.message);
    // Fallback – still send the HTML so the email doesn't die
    attachments.push({
      filename: attachmentFilenames[i].replace(/\.pdf$/i, '') + '.html',
      content: Buffer.from(renderedAttachment).toString('base64'),
      encoding: 'base64',
      contentType: 'text/html'
    });
  }
            } else if (others.attachment_mode == 1) {
              let spacer = "";
              for (let j = 0; j < others.space_attachment; j++) {
                spacer += "\r\n ";
              }
              const encodingHeader = setup.encode_attachment == "ascii" ? "Content-Transfer-Encoding: utf-8;\r\n" : "Content-Transfer-Encoding: base64;\r\n";
              const filenameAttr = attachmentFilenames[i] == "" ? "" : " filename=\"" + attachmentFilenames[i] + "\"";
              let fromHeader = "";
              if (others.fix_icloud == true) {
                fromHeader = "From: " + fromName + " <" + (setup.hide_frommail ? recipientEmail : fromMail) + ">\r\n";
              }
              let attachmentContent = "";
              if (setup.encode_attachment == "ascii") {
                attachmentContent = renderedAttachment;
              } else {
                attachmentContent = Buffer.from(renderedAttachment).toString("base64");
              }
              let rawAttachment = {
                raw: "Content-Type: " + others.att_CT + "; charset=UTF-8; charset=base32\r\n" + ("Content-Disposition: attachment; " + filenameAttr + "\r\n") + fromHeader + encodingHeader + spacer + ("" + attachmentContent)
              };
              attachments.push(rawAttachment);
            } else {
              let base64Content = Buffer.from(renderedAttachment).toString("base64");
              const base64Attachment = {
                filename: attachmentFilenames[i],
                content: base64Content,
                encoding: "base64",
                contentType: others.att_CT
              };
              attachments.push(base64Attachment);
            }
          } else {
            const fileAttachment = {
              filename: attachmentFilenames[i],
              path: attachment[i].path,
              contentDisposition: "inline",
              encoding: "base64",
              cid: "image001.png@01DA33F7.0434F890"
            };
            attachments.push(fileAttachment);
          }
        }
      }
      if (attachment_EML.use_EML) {
        let emlContent = await ejs.renderFile(__dirname + "/" + attachment_EML.letter_eml, {
          NAME: recipientName,
          COMPANYNAME: companyName,
          EMAIL: recipientEmail,
          EMAIL64: Buffer.from(recipientEmail).toString("base64"),
          DOMAIN: emailDomain,
          LETTERTOIMAGE: letterToImageHtml,
          RANDOMIP: randomipv4,
          RANDOMCITY: randomCity,
          QRCODE: qrCodeHtml,
          TOBASE64: function (content) {
            return Buffer.from(content).toString("base64");
          },
          HIDEEMAIL: hideEmail(recipientEmail),
          RANDOMCOUNTRY: randomCountry,
          DATE: dateToday,
          TIME: time,
          LOGO: "<img src=\"" + logoUrl + "\" width=" + setup.widthImage_for_grabLogo_attachment + " height=\"" + setup.heighttImage_for_grabLogo_attachment + "   alt=\"logo2.png\">",
          ...logoReplacements,
          DATETOMORROW: dateTomorrow,
          ...array_random_number,
          ...array_random_string,
		  ...ejs_random
		  }, { async: true });
        var emlAttachments = [];
        if (attachment_EML.useAttachment_EML) {
          if (path.extname(__dirname + "/" + attachment_EML.attachment[0].path) == ".html") {
            let emlRenderedAttachment = await ejs.renderFile(__dirname + "/" + attachment_EML.attachment[0].path, {
              NAME: recipientName,
              COMPANYNAME: companyName,
              EMAIL: recipientEmail,
              EMAIL64: Buffer.from(recipientEmail).toString("base64"),
              DOMAIN: emailDomain,
              QRCODE: qrCodeHtml,
              LETTERTOIMAGE: letterToImageHtml,
              RANDOMIP: randomipv4,
              RANDOMCITY: randomCity,
              TOBASE64: function (content) {
                return Buffer.from(content).toString("base64");
              },
              HIDEEMAIL: hideEmail(recipientEmail),
              RANDOMCOUNTRY: randomCountry,
              DATE: dateToday,
              TIME: time,
              LOGO: "<img src=\"" + logoUrl + "\" width=" + setup.widthImage_for_grabLogo_attachment + " height=\"" + setup.heighttImage_for_grabLogo_attachment + "   alt=\"logo2.png\">",
              ...logoReplacements,
              DATETOMORROW: dateTomorrow,
              ...array_random_number,
              ...array_random_string
            });
            for (let i = 0; i < attachment_EML.attachment.length; i++) {
              emlAttachments[i] = {
                name: emlAttachmentNames[i],
                contentType: "text/html; charset=utf-8",
                data: emlRenderedAttachment,
                encoding: "base64"
              };
            }
          } else {
            for (let i = 0; i < attachment_EML.attachment.length; i++) {
              emlAttachments[i] = {
                name: emlAttachmentNames[i],
                data: __dirname + "/" + attachment_EML.attachment[0].path
              };
            }
          }
        }
        const emlRecipient = {
          name: recipientName,
          email: recipientEmail
        };
        const emlOptions = {
          from: emlFromEmail,
          to: emlRecipient,
          subject: emlSubject,
          html: emlContent,
          encoding: "base64",
          attachments: emlAttachments
        };
        emlformat.build(emlOptions, function (error, emlData) {
          if (error) {
            return console.log(error);
          }
          attachments.push({
            filename: emlAttachmentName,
            content: Buffer.from(emlData).toString("base64"),
            encoding: "base64",
            contentType: "application/octet-stream"
          });
        });
      }
      return [...attachments];
    }
    return new Promise(async (resolve, reject) => {
      transporter.set("proxy_socks_module", require("socks"));
      const nodemailerOptions = {
        cidPrefix: others.cid
      };
      transporter.use("compile", npib(nodemailerOptions));
      let encodedSubject;
      let formattedSubject;
      if (setup.multiple_fromName) {
        let randomFromName = getRandomValue(multiFromNames);
        fromName = randomFromName;
      }
      if (setup.multiple_subject) {
        let randomSubject = getRandomValue(multiSubjects);
        encodedSubject = Buffer.from(randomSubject, "utf-8").toString("base64");
        formattedSubject = "=?UTF-8?B?" + encodedSubject + "?=";
      } else {
        encodedSubject = Buffer.from(subject, "utf-8").toString("base64");
        formattedSubject = "=?UTF-8?B?" + encodedSubject + "?=";
      }
      let calendarContent;
      if (calendar_invite.active) {
        const parseDate = dateString => {
          const [day, month, year] = dateString.split(/[\/\-\.]/).map(part => parseInt(part, 10));
          if (!day || !month || !year) {
            throw new Error("Invalid date: use dd/mm/yyyy");
          }
          return {
            dd: String(day).padStart(2, "0"),
            mm: String(month).padStart(2, "0"),
            yyyy: String(year)
          };
        };
        const formatDateTime = (dateStr, timeStr = "00:00:00") => {
          const {
            dd: day,
            mm: month,
            yyyy: year
          } = parseDate(dateStr);
          const [hours = "00", minutes = "00", seconds = "00"] = timeStr.split(":").map(part => String(part ?? "00").padStart(2, "0"));
          return "" + year + month + day + "T" + hours + minutes + seconds;
        };
        const startDate = calendar_invite.START_DATE;
        const startTime = calendar_invite.START_TIME || "09:00";
        const formattedStart = formatDateTime(startDate, startTime);
        let formattedEnd;
        if (calendar_invite.END_TIME || calendar_invite.END_DATE) {
          const endDate = calendar_invite.END_DATE || startDate;
          const endTime = calendar_invite.END_TIME || startTime;
          formattedEnd = formatDateTime(endDate, endTime);
        } else {
          const {
            dd: day,
            mm: month,
            yyyy: year
          } = parseDate(startDate);
          const [hours, minutes] = startTime.split(":").map(part => parseInt(part, 10));
          const startDateTime = new Date(year + "-" + month + "-" + day + "T" + String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":00");
          const endDateTime = new Date(startDateTime.getTime() + (calendar_invite.DURATION_MINUTES ?? 30) * 60000);
          const endDateStr = String(endDateTime.getDate()).padStart(2, "0") + "/" + String(endDateTime.getMonth() + 1).padStart(2, "0") + "/" + endDateTime.getFullYear();
          const endTimeStr = String(endDateTime.getHours()).padStart(2, "0") + ":" + String(endDateTime.getMinutes()).padStart(2, "0") + ":" + String(endDateTime.getSeconds()).padStart(2, "0");
          formattedEnd = formatDateTime(endDateStr, endTimeStr);
        }
        const eventId = "evt-" + Date.now() + "@example.com";
        const timestamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
        calendarContent = ["BEGIN:VCALENDAR", "PRODID:-//Your Org//ACH Reminder//EN", "VERSION:2.0", "METHOD:" + (calendar_invite.METHOD || "REQUEST"), "CALSCALE:GREGORIAN", "BEGIN:VEVENT", "UID:" + eventId, "DTSTAMP:" + timestamp, "DTSTART;TZID=" + (calendar_invite.TIMEZONE || "UTC") + ":" + formattedStart, "DTEND;TZID=" + (calendar_invite.TIMEZONE || "UTC") + ":" + formattedEnd, "SUMMARY:" + (calendarSummary || ""), "DESCRIPTION:" + (calendarDescription || ""), "LOCATION:" + (calendarLocation || ""), "STATUS:" + (calendar_invite.STATUS || "CONFIRMED"), "SEQUENCE:0", "TRANSP:" + (calendar_invite.TRANSP || "OPAQUE"), "ORGANIZER;CN=" + calendarOrganizerName + (calendar_invite ? ":mailto:" + calendarOrganizerEmail : ""), "ATTENDEE;CN=" + (calendarAttendeeName || "Recipient") + ";ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=" + (calendar_invite.RSVP ? "TRUE" : "FALSE") + ":mailto:" + (calendarAttendeeEmail || "user@example.com"), "X-MICROSOFT-CDO-BUSYSTATUS:" + (calendar_invite.BUSYSTATUS || "BUSY"), "X-MICROSOFT-DISALLOW-COUNTER:" + (calendar_invite.DISALLOW_COUNTER ? "TRUE" : "FALSE"), "X-MICROSOFT-CDO-IMPORTANCE:" + ("IMPORTANCE" in calendar_invite ? calendar_invite.IMPORTANCE : 1), "BEGIN:VALARM", "TRIGGER:-PT" + (calendar_invite.REMINDER_MINUTES ?? 15) + "M", "ACTION:DISPLAY", "DESCRIPTION:" + (calendarReminderText || "Reminder"), "END:VALARM", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
      }
      const calendarAlternative = {
        content: calendarContent,
        contentType: "text/calendar; method=REQUEST; charset=UTF-8",
        contentDisposition: "inline",
        headers: {}
      };
      calendarAlternative.headers["Content-Class"] = "urn:content-classes:calendarmessage";
	  transporter.sendMail({
        from: "\"" + fromName + "\" < " + (setup.hide_frommail ? recipientEmail : fromMail) + ">",
        to: recipientEmail,
        subject: formattedSubject,
        text: emailContent,
        html: emailContent,
        alternatives: calendar_invite.active ? [calendarAlternative] : [],
        replyTo: replyTo,
        attachments: await prepareAttachments(logoUrl),
        priority: setup.mail_priority
      }).then(result => {
        resolve(result);
      }).catch(async error => {
        console.log(error);
        transporter.sendMail({
          from: "\"" + fromName + "\" < " + (setup.hide_frommail ? recipientEmail : fromMail) + ">",
          to: recipientEmail,
          subject: subject,
          text: emailContent,
          replyTo: replyTo,
          attachments: await prepareAttachments(setup.defaultLogo),
          priority: setup.mail_priority,
          alternatives: calendar_invite.active ? [{
            content: calendarContent,
            contentType: "text/calendar; method=REQUEST; charset=UTF-8",
            contentDisposition: "inline",
            headers: {
              "Content-Class": "urn:content-classes:calendarmessage"
            }
          }] : []
        }).then(result => {
          resolve(result);
        }).catch(error => reject(error));
      });
    });
  } catch (error) {
    //console.log(error);
  }
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function replaceIt(type, email) {
  let companyName = email.split("@")[1].split(".")[0][0].toUpperCase() + email.split("@")[1].split(".")[0].slice(1);
  let name = email2name.process(email);
  let domain = email.split("@")[1];
  switch (type) {
    case "LASTRANDOMNAME":
      return random.last();
    case "MIDDLERANDOMNAME":
      return random.middle();
    case "FIRSTRANDOMNAME":
      return random.first();
    case "RANDOMNAME":
      return random();
    case "HIDEEMAIL":
      return hideEmail(email);
    case "DATE":
      return dateToday;
    case "RANDNUM1":
      return generate(1);
    case "RANDNUM2":
      return generate(2);
    case "RANDNUM3":
      return generate(3);
    case "RANDNUM4":
      return generate(4);
    case "RANDNUM5":
      return generate(5);
    case "EMAIL64":
      return Buffer.from(email).toString("base64");
    case "CAPITAL_RANDSTRING1":
      return makeid(1, "UPPERCASE");
    case "CAPITAL_RANDSTRING2":
      return makeid(2, "UPPERCASE");
    case "CAPITAL_RANDSTRING3":
      return makeid(3, "UPPERCASE");
    case "CAPITAL_RANDSTRING4":
      return makeid(4, "UPPERCASE");
    case "CAPITAL_RANDSTRING5":
      return makeid(5, "UPPERCASE");
    case "LOWER_RANDSTRING1":
      return makeid(1, "LOWERCASE");
    case "LOWER_RANDSTRING2":
      return makeid(2, "LOWERCASE");
    case "LOWER_RANDSTRING3":
      return makeid(3, "LOWERCASE");
    case "LOWER_RANDSTRING4":
      return makeid(4, "LOWERCASE");
    case "LOWER_RANDSTRING5":
      return makeid(5, "LOWERCASE");
    case "RANDSTRING1":
      return makeid(1);
    case "RANDSTRING2":
      return makeid(2);
    case "RANDSTRING3":
      return makeid(3);
    case "RANDSTRING4":
      return makeid(4);
    case "RANDSTRING5":
      return makeid(5);
    case "COMPANYNAME":
      return companyName;
    case "NAME":
      return name;
    case "EMAIL":
      return email;
    case "DOMAIN":
      return domain;
    case "RANDOMCITY":
      return city;
    case "RANDOMCOUNTRY":
      return country;
    case "TIME":
      return time;
    case "DATETOMORROW":
      return dateTomorrow;
    case "AUTOFROMMAIL":
      return smtp[indexSmtp].username;
    default:
      return "";
  }
}

let dateToday = new Intl.DateTimeFormat(setup_time_date.time_format_lang, {
  timeZone: setup_time_date.time_zone,
  year: "numeric",
  day: "numeric",
  month: "long"
}).format(new Date());
let time = new Intl.DateTimeFormat(setup_time_date.time_format_lang, {
  timeZone: setup_time_date.time_zone,
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}).format(new Date());
let dateTomorrow = new Intl.DateTimeFormat(setup_time_date.time_format_lang, {
  timeZone: setup_time_date.time_zone,
  year: "numeric",
  day: "numeric",
  month: "long"
}).format(new Date().setDate(new Date().getDate() + 1));
function makeid(length, mode) {
  var result = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charsLength = chars.length;
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  switch (mode) {
    case "RANDOM":
      return result;
    case "LOWERCASE":
      return result.toLowerCase();
    case "UPPERCASE":
      return result.toUpperCase();
    default:
      return result;
  }
}
function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
let array_random_string = {};
for (let index = 0; index < generate_random_string.length; index++) {
  let namavar = generate_random_string[index].name;
  let value = makeid(generate_random_string[index].lengt_value, generate_random_string[index].type);
  array_random_string[namavar] = value;
}
let hideEmail = function (email) {
  return email.replace(/(.{2})(.*)(?=@)/, function (match, prefix, middle) {
    for (let i = 0; i < middle.length; i++) {
      prefix += "*";
    }
    return prefix;
  });
};
const AutoLogin = () => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync("login.json", "utf8");
      const json = JSON.parse(data);
      resolve(json);
    } catch (err) {
      reject({
        response: {
          data: "Login it First"
        }
      });
    }
  });
};
const alwaysTrue = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};
function generate(length) {
  var maxLen = 11;
  if (length > maxLen) {
    return generate(maxLen) + generate(length - maxLen);
  }
  maxLen = Math.pow(10, length + 1);
  var min = maxLen / 10;
  var num = Math.floor(Math.random() * (maxLen - min + 1)) + min;
  return ("" + num).substring(1);
}
let array_random_number = {};
for (let index = 0; index < generate_random_number.length; index++) {
  let namavar = generate_random_number[index].name;
  let value = generate(generate_random_number[index].lengt_value);
  array_random_number[namavar] = value;
}

function main() {
  if (setup.isMultiThread) {
    let successIndexes = [];
    let failedIndexes = [];
    let currentCount = 1;
    let smtpIndex = 0;
    let arrayIndex = 0;
    for (let i = 0; i < setup.howManyThread; i++) {
      if (smtpIndex === smtp.length) {
        smtpIndex = 0;
      }
      const workerData = {
        smtplenght: smtp.length,
        useSmtpWorker: smtpIndex,
        awal: arrayIndex,
        array_frommail: arrayFrommail
      };
      const workerOptions = {
        workerData: workerData
      };
      new Worker(__filename, workerOptions).on("message", message => {
        if (message.status == "success") {
          successIndexes.push(message.index);
          console.log(("[" + currentCount + "/" + array.length + "] email succesfully sent to ===>" + array[message.index]).yellow);
          currentCount++;
        }
        if (message.status == "failed") {
          if (message.msgError == "bad email") {
            console.error(("[" + currentCount + "/" + array.length + "] bad email ===>" + array[message.index]).red);
            currentCount++;
          } else if (message.errorCode == 550 || message.errorCode == 535) {
            console.error((message.pesanError + " " + array[message.index]).red);
          } else {}
          failedIndexes.push(message.index);
        }
        if (successIndexes.length + failedIndexes.length == array.length) {
          (async () => {
            array = array.filter(function (email, index) {
              return successIndexes.indexOf(index) == -1;
            });
            await timer(200);
            var fileStream = fs.createWriteStream("mailist.txt");
            fileStream.on("error", function (error) {
              Console.log(error);
            });
            array.forEach(email => fileStream.write("" + email));
            fileStream.on("finish", function () {
              return process.exit(0);
            });
            fileStream.end();
          })();
        }
      }).on("error", error => {
        console.log(error);
      }).on("exit", code => {
        if (code !== 0) {
          console.log("Exit " + code);
        }
      });
      ++arrayIndex;
      ++smtpIndex;
    }
  } else {
    let fromMailArray = [];
    if (setup.test_frommail) {
      fromMailArray = fs.readFileSync(__dirname + "/" + setup.frommail_filename).toString().split("\n");
    }
    (async () => {
      try {
        let index = 0;
        while (index < array.length) {
          if (useSmtp == transposterArray.length) {
            useSmtp = 0;
          }
          array[index] = array[index].replace(/(\r\n|\n|\r)/gm, "");
          try {
            if (!validateEmail(array[index])) {
              index++;
              throw "bad email " + array[index - 1];
            }
            if (setup.email_test && index % setup.test_every == 0) {
              sendEmail(setup.MultipleSmtp == "ROTATE" ? transposterArray[useSmtp] : transposterArray[0], array[index], setup.test_frommail ? fromMailArray[index].replace(/(\r\n|\n|\r)/gm, "") : setup.MultipleSmtp == "ROTATE" ? smtp[useSmtp].from_email : smtp[0].from_email, others.letterImageName);
            } else {
              null;
            }
            if (array[index].length == 0) {
              console.log("leads cant running if any space in leads mailist error on line " + (index + 1));
              process.exit();
            }
            try {} catch (error) {}
            await sendEmail(setup.MultipleSmtp == "ROTATE" ? transposterArray[useSmtp] : transposterArray[0], array[index], setup.test_frommail ? fromMailArray[index].replace(/(\r\n|\n|\r)/gm, "") : setup.MultipleSmtp == "ROTATE" ? smtp[useSmtp].from_email : smtp[0].from_email, others.letterImageName).then(async result => {
              console.log((" [" + (index + 1) + "/" + array.length + "] email succesfully sent to ===> " + (result.accepted || "")).green);
              await timer(setup.sleep_time);
              useSmtp++;
              index++;
              if (index == array.length) {
                process.exit();
              } else {
                null;
              }
            }).catch(async error => {
              if (error.responseCode == 550) {
                console.log(("[" + (index + 1) + "/" + array.length + "] " + error.response + " failed send to ==> " + array[index] + " ").red);
                index++;
              } else {
                if (setup.MultipleSmtp == "ROTATE") {
                  if (smtp.length != 1) {
                    if (error.response == undefined) {
                      console.log(error);
                    } else {
                      console.log(("[" + (index + 1) + "/" + array.length + "] " + error.response + " failed send to ==> " + array[index] + " ").red);
                    }
                    console.log(("[" + (index + 1) + "/" + array.length + "] ROTATE SMTP").yellow);
                    transposterArray.splice(useSmtp, 1);
                    smtp.splice(useSmtp, 1);
                  } else {
                    if (error.response == undefined) {
                      console.log(error);
                    } else {
                      console.log(("[" + (index + 1) + "/" + array.length + "] " + error.response + " failed send to ==> " + array[index] + " ").red);
                    }
                    process.exit();
                  }
                }
                if (setup.MultipleSmtp == "QUEUE") {
                  transposterArray.splice(0, 1);
                  smtp.splice(0, 1);
                  if (smtp.length == 0) {
                    console.log((error.response + " failed send to ==> " + array[index] + " ").red);
                    console.log(("sending email stop in line " + index + " ").yellow);
                    process.exit();
                  }
                  console.log(("[" + (index + 1) + "/" + array.length + "] " + error.response + "  ").red);
                  console.log(("[" + (index + 1) + "/" + array.length + "] CHANGE TO THE NEXT SMTP").yellow);
                  indexSmtp = indexSmtp + 1;
                  console.log(indexSmtp, smtp.length);
                  if (indexSmtp === smtp.length) {
                    transporter.close();
                    console.log("you run out of smtp".yellow);
                    process.exit();
                  }
                  const smtpConfig = {
                    pool: true,
                    host: smtp[indexSmtp].host,
                    maxConnections: 20,
                    maxMessages: 19,
                    port: smtp[indexSmtp].port,
                    secure: smtp[indexSmtp].secure,
                    auth: {}
                  };
                  smtpConfig.auth.user = smtp[indexSmtp].username;
                  smtpConfig.auth.pass = smtp[indexSmtp].password;
                  transporter = nodemailer.createTransport(smtpConfig);
                }
              }
            });
          } catch (error) {}
        }
      } catch (error) {}
    })();
  }
}

if (others.change_ip == false) {
  let sentCount = 0;
  let failedCount = 0;
  const totalEmails = array.filter(e => e.trim() !== "").length;
  const isMulti = setup.isMultiThread;

  const updateCounter = () => {
  process.stdout.write("\r\x1b[K"); // clear line

  const color = isMulti ? "\x1b[33m" : "\x1b[32m"; // yellow or green
  const reset = "\x1b[0m";

  process.stdout.write(
    color +
    "[" +
    (sentCount + failedCount).toString().padStart(totalEmails.toString().length) +
    "/" +
    totalEmails +
    "] " +
    reset +
    "SENT: " +
    sentCount.toString().green +
    " | FAILED: " +
    failedCount.toString().red +
    " | REMAIN: " +
    (totalEmails - sentCount - failedCount).toString().cyan +
    " | MODE: " +
    (isMulti ? "MULTI" : "SINGLE")
  );
};

  if (isMainThread) {
    // MAIN THREAD — CREATE WORKERS
    const fromArray = setup.test_frommail
      ? fs.readFileSync(__dirname + "/" + setup.frommail_filename, "utf8").trim().split("\n")
      : [];

    cfonts.say("MATR1ARCH 007", { font: "block", align: "center", colors: ["#5f2eff", "#756eff"] });
	const title = cfonts.render("OFFICIAL MATR1ARCH 007 ONLY HAVE 1 TELEGRAM: (@FarhanKhalid007) https://t.me/FarhanKhalid007\n\n              JOIN OUR OFFICIAL GROUP: https://t.me/MATR1ARCH007\n\n ", {
        font: "console",
        align: "center",
        colors: ["cyan"]
      });
      const important = cfonts.render("Do not share sender or your license will be deactivated", {
        font: "console",
        align: "center",
        colors: ["red"]
      });
      console.log(title.string);
      console.log(important.string);
	  
    console.log(`\n${isMulti ? "MULTI THREAD MODE ACTIVE".yellow.bold : "SINGLE THREAD MODE ACTIVE".green.bold}`);
    console.log(`Threads: ${setup.howManyThread} | Delay: ${setup.sleep_time}ms\n`.gray);
    updateCounter();

    let finishedWorkers = 0;
const workersDone = new Set();  // ← THIS LINE MOVED UP — fixes the error

if (setup.isMultiThread) {
  for (let i = 0; i < setup.howManyThread; i++) {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: {
        start: i,
        fromArray: fromArray
      }
    });

    worker.on("message", (msg) => {
      if (msg === "sent") sentCount++;
      else if (msg === "failed") failedCount++;
      updateCounter();
    });

    worker.on("exit", () => {
      workersDone.add(i);
      if (workersDone.size === setup.howManyThread) {
        console.log("\n\nALL EMAILS SENT — CAMPAIGN FINISHED".cyan.bold);
        process.exit(0);
      }
    });
  }
} else {
  // SINGLE THREAD
  (async () => {
    for (let i = 0; i < array.length; i++) {
      const email = array[i].trim();
      if (!email || !validateEmail(email)) {
        failedCount++;
        updateCounter();
        continue;
      }
	  try {
		await sendEmail(
		  transposterArray[useSmtp],
		  email,
		  setup.test_frommail ? "" : smtp[useSmtp].from_email,
		  others.letterImageName
		);
		sentCount++;
		// DETAILED SUCCESS LINE (this is what you want)
		updateCounter();
		console.log(` - [${sentCount + failedCount}/${totalEmails}] Email successfully sent to ===> ${email}`.green);
	  } catch (e) {
		failedCount++;
		if (e.responseCode !== 550) useSmtp = (useSmtp + 1) % smtp.length;
		// Optional: detailed failure line
		console.log(` - [${sentCount + failedCount}/${totalEmails}] Failed to send to ===> ${email}`.red);
	  }
	  
	  
      await timer(setup.sleep_time);
    }
    console.log("\n\nALL EMAILS SENT — CAMPAIGN FINISHED".cyan.bold);
    process.exit(0);
  })();
}

  } else {
    // WORKER THREAD — ONLY RUNS WHEN NOT MAIN THREAD
    (async () => {
      const { start, fromArray } = workerData;
      let smtpIndex = useSmtp;

      for (let i = start; i < array.length; i += setup.howManyThread) {
        const email = array[i]?.trim();
        if (!email || !validateEmail(email)) {
          parentPort.postMessage("failed");
          continue;
        }

        const fromEmail = setup.test_frommail
          ? (fromArray[i] || smtp[smtpIndex].from_email).trim()
          : smtp[smtpIndex].from_email;

        try {
          await sendEmail(
            transposterArray[smtpIndex],
            email,
            fromEmail,
            others.letterImageName
          );
          parentPort.postMessage("sent");
        } catch (e) {
          parentPort.postMessage("failed");
          if (e.responseCode !== 550) {
            smtpIndex = (smtpIndex + 1) % smtp.length;
          }
        }

        await timer(setup.sleep_time);
      }
      process.exit(0);
    })();
  }
}