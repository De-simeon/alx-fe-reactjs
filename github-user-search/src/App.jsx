import { useState } from "react";
import Search from "./components/Search";
import { fetchAdvancedUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [lastSearch, setLastSearch] = useState(null);

  const handleSearch = async (username, location, minRepos) => {
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    const searchParams = { username, location, minRepos };
    setLastSearch(searchParams);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos, 1);
      setUsers(data.items);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const newPage = page + 1;
    setPage(newPage);

    try {
      const data = await fetchAdvancedUsers(
        lastSearch.username,
        lastSearch.location,
        lastSearch.minRepos,
        newPage
      );

      setUsers((prev) => [...prev, ...data.items]);
    } catch (err) {
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="p-6">
      <Search onSearch={handleSearch} />

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
}

export default App;
