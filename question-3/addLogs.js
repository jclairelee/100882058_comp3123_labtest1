const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// Create Logs directory if not exists
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Change working directory to Logs
process.chdir(logsDir);

// Create 10 log files
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(fileName);
}
