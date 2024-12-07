import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/", auth);

const handler = handle(app);
export const GET = handler;
export const POST = handler;

export type AppType = typeof app;


