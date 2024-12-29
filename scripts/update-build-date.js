import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const filePath = join(process.cwd(), "src/app/api/last-updated/route.ts");
const buildDate = new Date().toISOString();

// Read the current file content
let content = readFileSync(filePath, "utf8");

// Update the BUILD_DATE constant
content = content.replace(
  /const BUILD_DATE = .*$/m,
  `const BUILD_DATE = '${buildDate}';`,
);

// Write the updated content back to the file
writeFileSync(filePath, content, "utf8");

console.log("Build date updated:", buildDate);
