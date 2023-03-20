const fs = require("fs");

const filePath = "node_modules/color-name/LICENSE";
let fileContent = fs.readFileSync(filePath, "utf8");

fileContent = fileContent.replace(/\r\n/g, "\n");

fs.writeFileSync(filePath, fileContent);
