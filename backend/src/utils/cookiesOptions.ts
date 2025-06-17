export const options = {
  httpOnly: true,
  sameSite: "strict" as const,
  secure: false,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
};
