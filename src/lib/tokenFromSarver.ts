import { headers } from "next/headers";
import { auth } from "./auth";

export const getTokenFromServer = async (): Promise<string> => {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });

  if (!jwtToken?.token) {
    throw new Error("Authentication token not found");
  }

  return jwtToken.token;
};