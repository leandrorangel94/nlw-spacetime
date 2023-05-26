import jwtDecode from "jwt-decode";
import { cookies } from "next/dist/client/components/headers";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

export function getUser(): User {
  const token = cookies().get("token")?.value;

  if (!token) throw new Error("Unauthorized");

  const user: User = jwtDecode(token);

  return user;
}
