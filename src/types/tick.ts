import z from "zod";

const Tick = z.object({
  date: z.string(),
  message: z.string(),
});

type TickType = z.TypeOf<typeof Tick>;

export { Tick };
export type { TickType };
