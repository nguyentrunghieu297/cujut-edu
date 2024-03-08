import { userApi, UserProfile } from "@/api";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type useProfileQueryOptions = Omit<UseQueryOptions<UserProfile>, "queryKey" | "queryFn">;

export const useProfile = (options?: useProfileQueryOptions) => {
    return useQuery<UserProfile>({
        ...options,
        queryKey: ["profile"],
        queryFn: userApi.getProfile,
    });
};
