import { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username, location, minRepos);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg w-full max-w-xl mx-auto flex flex-col gap-4"
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
  );
};

export default Search;
