import { TickType } from "@/types/tick";
import { formatDate } from "@/lib/utils";

export default function renderTicks(ticks: TickType[]) {
  return `# All ticks

|Date|Tick Message|
|:---|:--|
${ticks.map((tick) => `|${formatDate(tick.date)}|${tick.message}|`).join("\n")}
`;
}
