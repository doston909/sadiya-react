import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

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

  /** 🔹 Shop’ni ID orqali olish — mahsulot egasini ko‘rsatish uchun */
  public async getShopById(memberId: string): Promise<Member> {
    try {
      const url = `${this.path}/member/${memberId}`;
      const result = await axios.get(url);
      console.log("getShopById:", result.data);
      return result.data;
    } catch (err) {
      console.log("Error, getShopById:", err);
      throw err;
    }
  }
}

export default MemberService;
