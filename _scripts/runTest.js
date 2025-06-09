const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");

const path = process.argv[2];
if (!path || !path.endsWith(".ts")) {
  console.error("Usage: yarn test <file.ts>");
  process.exit(1);
}

execSync(`npx tsc ${path}`, { stdio: "inherit" });

const jsFile = path.replace(/\.ts$/, ".js");
const jsContent = readFileSync(jsFile, "utf-8").replace("/dev/stdin", "./dev/stdin");
writeFileSync(jsFile, jsContent, "utf-8");

execSync(`node --stack-size=65536 ${jsFile}`, { stdio: "inherit" });
