import "module-alias/register";

import fs from "fs";
import path from "path";

import { tick } from "@/lib/mongodb";
import { renderTicks } from "@/lib/tick";

async function main() {
  const result = await tick.query();
  if (!result.data) throw new Error(result.message);

  const markdown = renderTicks(result.data);
  await fs.promises.writeFile(path.join(process.cwd(), "README.md"), markdown);

  process.exit();
}

main();
