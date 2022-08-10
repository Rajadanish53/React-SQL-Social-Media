import { sign } from "jsonwebtoken";

class Token {
  generateToken = (data) => {
    const { id } = data;
    const token = sign({ id }, process.env.JWT_SECRET);
    return token;
  };
}
export default new Token();
