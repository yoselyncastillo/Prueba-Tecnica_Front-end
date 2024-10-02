import {
  SearchResponse,
  UserDetailResponse,
} from "../interfaces/searchResponse";
import { User } from "../interfaces/user";
import { GithubApi } from "./axiosConfig";

export const getUsersByUsername = async (name: string): Promise<User[]> => {
  try {
    const { data } = await GithubApi.get<SearchResponse>(
      `/search/users?q=${name}`
    );
    const users = data.items.slice(0, 10);
    const users_with_followers: User[] = await Promise.all(
      users.map(async (user) => {
        const user_with_followers = await getUserDetailsByUsername(user.login);
        return user_with_followers;
      })
    );
    return users_with_followers;
  } catch (error) {
    throw error;
  }
};

export const getUserDetailsByUsername = async (
  username: string
): Promise<User> => {
  try {
    const { data } = await GithubApi.get<UserDetailResponse>(
      `/users/${username}`
    );
    return {
      name: data.name,
      login: data.login,
      id: data.id,
      avatar_url: data.avatar_url,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      html_url: data.html_url,
    };
  } catch (error) {
    throw error;
  }
};
