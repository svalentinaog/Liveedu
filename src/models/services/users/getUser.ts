import axios from "axios";

export const getUser = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};