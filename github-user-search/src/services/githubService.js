import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>=${minRepos}+`;

    const response = await axios.get(
      `${BASE_URL}${query}&page=${page}&per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
