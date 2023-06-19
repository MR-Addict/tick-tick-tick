import "module-alias/register";

import fs from "fs";
import path from "path";
import { config } from "dotenv";
import { plot } from "asciichart";

import getWeather from "@/lib/getWeather";

config();

async function main() {
  const result = await getWeather();
  if (result.data) {
    const chart = plot(result.data.map((item) => item.temp));
    const markdown = `# Tick Tick Tick\n\nNanjing Today's Weather:\n\n${chart}\n`;
    await fs.promises.writeFile(path.join(process.cwd(), "README.md"), markdown);
  }
}

main();
