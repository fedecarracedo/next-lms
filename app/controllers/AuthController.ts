const bcrypt = require("bcryptjs");

export async function encryptPassword(password: string): Promise<string> {
  let hashedPassword: string = await bcrypt
    .hash(password, 10)
    .then((hash: string) => hash);
  return hashedPassword;
}
