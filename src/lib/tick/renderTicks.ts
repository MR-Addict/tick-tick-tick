import { TickType } from "@/types/tick";
import { formatDate } from "@/lib/utils";

export default function renderTicks(ticks: TickType[]) {
  if (ticks.length === 0) return "# All ticks\n\nNo ticks yet\n";

  return `# All ticks

|Date|Tick Message|
|:---|:--|
${ticks.map((tick) => `|${formatDate(tick.date)}|${tick.message}|`).join("\n")}
`;
}
