const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// If Logs directory exists, delete all files and then remove the folder
if (fs.existsSync(logsDir)) {
  fs.readdirSync(logsDir).forEach((file) => {
    console.log(`delete files...${file}`);
    fs.unlinkSync(path.join(logsDir, file));
  });

  fs.rmdirSync(logsDir);
} else {
  console.log("Logs directory does not exist.");
}
