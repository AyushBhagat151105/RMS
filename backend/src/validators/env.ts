import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  BASEURL: z.string().min(1, { message: "Base is required" }),
  NODE_ENV: z.string().min(1, { message: "NODE_ENV is required" }).optional(),
  FRONTEND_URL: z.string().min(1, { message: "FRONTEND_URL is required" }),
  RESEND_API_KEY: z.string().min(1, { message: "RESEND_API_KEY is required" }),
  ACCESSTOKEN: z.string().min(1, { message: "ACCESSTOKEN is required" }),
  REFRESHTOKEN: z.string().min(1, { message: "REFRESHTOKEN is required" }),
  ACCESSTOKEN_EXPIRE: z
    .string()
    .min(1, { message: "ACCESSTOKEN_EXPIRE is required" }),
  REFRESHTOKEN_EXPIRE: z
    .string()
    .min(1, { message: "REFRESHTOKEN_EXPIRE is required" }),
});
function createENV(env: NodeJS.ProcessEnv) {
  const validationResult = envSchema.safeParse(env);

  if (!validationResult.success) {
    throw new Error(validationResult.error.message);
  }

  return validationResult.data;
}

export const env = createENV(process.env);
