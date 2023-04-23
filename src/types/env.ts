import z from "zod";
import { config } from "dotenv";

config();

const Env = z.object({
  MONGODB_URI: z.string(),
  ISLOCALHOST: z.enum(["true", "false"]).optional(),
});

const env = Env.parse(process.env);
export default env;
