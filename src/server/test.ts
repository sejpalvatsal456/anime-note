import { connectDB } from "#/lib/connect";
import { createServerFn } from "@tanstack/react-start";

export const testConnection = createServerFn().handler(async()=> {
    await connectDB();
    console.log("Test Connection");
});
