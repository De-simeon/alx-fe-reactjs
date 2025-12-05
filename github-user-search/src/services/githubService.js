import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  try {
    const parts = [];

    if (username) parts.push(username);
    if (location) parts.push(`location:${location}`);
    if (minRepos) parts.push(`repos:>=${minRepos}`);

    const query = encodeURIComponent(parts.join(" "));

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
