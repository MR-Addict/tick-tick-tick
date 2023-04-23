import z from "zod";

import { Tick } from "@/types/tick";
import clientPromise from "./clientPromise";

async function query() {
  try {
    const client = await clientPromise;
    const collection = client.db("log").collection("glados");

    const result = await collection.find({}).sort({ date: -1 }).toArray();
    const data = z.array(Tick).parse(result);
    return { status: true, data };
  } catch (error) {
    return { status: false, message: "Error occurred while communicate with mongodb!" };
  }
}

const tick = { query };

export default tick;
