import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signinSchema } from "@/app/features/auth/schemas";
import { cors } from "hono/cors";
import { initAuthConfig, authHandler, verifyAuth } from "@hono/auth-js";
import { getAuthConfig } from "@/auth.config";
import { handle } from "hono/vercel";

const app = new Hono()
  .use("/*", cors())
  .use("*", initAuthConfig(getAuthConfig))
  .use("/auth/*", authHandler())
  .get("/user", verifyAuth(), (c) => {
    const auth = c.get("authUser");
    return c.json({
      message: "This is a protected route",
      user: auth,
    });
  })
  .get("/hello", (c) => {
    return c.json({ message: "hello there" });
  })
  .post("/signin", zValidator("json", signinSchema), (c) => {
    return c.json(
      {
        success: true,
        message: "Created!",
      },
      201,
    );
  });

export const GET = handle(app);
export const POST = handle(app);

export default app;
