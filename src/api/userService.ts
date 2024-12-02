import axiosInstance from "./axiosInstance";
import { User } from "./types/User";

export const createUser = async (username: string, fullname: string): Promise<String> => {
    let user: User = { username: username, fullname: fullname }

    const response = await axiosInstance.post<String>("/users", user);
    return response.data;
};