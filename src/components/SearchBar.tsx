"use client";

import axios from "axios";
import { useState } from "react";
import useSWR from "swr";

const SearchBar = () => {
  const { data, isLoading } = useSWR("users", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  });

  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="lg:w-1/2 w-full p-4 h-[50vh]">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="bg-dusty-rose p-4 rounded-2xl placeholder:text-mauve-mist text-shadow-ivory-cream text-shadow-md placeholder:text-shadow-ivory-cream w-full text-2xl text-mauve-mist outline-none border-4 border-mauve-mist shadow-sm shadow-ivory-cream font-storyscript tracking-wider"
        />
        {query && (
          <div className="absolute bg-mauve-mist top-20 left-0 p-4 rounded-2xl max-h-[50vh] overflow-hidden shadow-sm shadow-golden-amber border-4 border-dusty-rose w-full">
            {isLoading ? (
              <p className="text-ivory-cream font-storyscript text-lg mt-4">
                Loading...
              </p>
            ) : (
              <>
                {data.filter((user: { name: string }) =>
                  user.name.toLowerCase().includes(query.toLowerCase())
                ).length === 0 ? (
                  <p className="text-ivory-cream font-storyscript text-lg text-center">
                    No users found
                  </p>
                ) : (
                  <ul className="max-h-[35vh] overflow-y-auto">
                    {data
                      .filter((user: { name: string }) =>
                        user.name.toLowerCase().includes(query.toLowerCase())
                      )
                      .map((user: { id: number; name: string }) => (
                        <li
                          key={user.id}
                          className="text-ivory-cream font-storyscript text-lg p-2 hover:bg-ivory-cream rounded-lg transition-colors tracking-wide cursor-pointer hover:text-golden-amber"
                        >
                          {user.name}
                        </li>
                      ))}
                  </ul>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
