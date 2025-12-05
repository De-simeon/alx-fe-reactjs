import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos, 1);
      setUsers(data.items);
      setPage(1);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...data.items]);
    } catch (err) {
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-lg flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Filter by location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow p-4 rounded-lg">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-center font-semibold mt-3">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 text-center block mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
