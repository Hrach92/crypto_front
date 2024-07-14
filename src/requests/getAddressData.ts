import { addressInstance } from "../utils/axios.ts";
const getAddressData = async (address: string) => {
  try {
    const { data } = await addressInstance.get(`token/options/${address}`);
    return data;
  } catch (err) {
    return { name: "", symbol: "", serializedTotalSupply: "" };
  }
};
export default getAddressData;
