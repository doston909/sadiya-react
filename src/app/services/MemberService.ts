import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member, MemberInput} from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  /** 🔹 Top foydalanuvchilar */
  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = `${this.path}/member/top-users`;
      const result = await axios.get(url);
      console.log("getTopUsers:", result.data);
      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers:", err);
      throw err;
    }
  }

  /** 🔹 Bitta do‘kon (shop) — auth user uchun */
  public async getShop(): Promise<Member> {
    try {
      const url = `${this.path}/member/shop`;
      const result = await axios.get(url, { withCredentials: true });
      console.log("getShop:", result.data);
      return result.data;
    } catch (err) {
      console.log("Error, getShop:", err);
      throw err;
    }
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup:", result);

      const member: Member = result.data.member;
      console.log("member:", member);
      localStorage.setItem("memberData", JSON.stringify(member));

      return member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }
}

export default MemberService;
