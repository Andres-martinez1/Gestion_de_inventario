import axios from "axios";

export interface AuthLogin {
  email: string;
  password: string;
}

export const loginApi = async (data: AuthLogin) => {
  const response = await axios.post("http://localhost:3000/auth/login", data, {
    withCredentials: true, 
  });
  return response.data;
};
