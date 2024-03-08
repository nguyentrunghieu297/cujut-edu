import axiosClient from "../api/axios-client";

export interface UserProfile {
    createdAt: number;
    avatar: string;
    dob: number;
    address: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: boolean;
    gpa: number;
    id: string;
}

export const userApi = {
    getProfile: (): Promise<UserProfile> => axiosClient.get("/test"),
    deleteProfile: (id: string): Promise<void> => axiosClient.delete(`/test/${id}`),
};
