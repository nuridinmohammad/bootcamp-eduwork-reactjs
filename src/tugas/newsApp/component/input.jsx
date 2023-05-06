import React, { useState } from "react";
import { searchNews } from "../utils/api";
import List from "./list";

const input = () => {
  const [data, setData] = useState(null);

  const search = async (q) => {
    const query =  await searchNews(q)
    setData(query)
  };

  return (
    <main>
      <div className="search">
        <form>
          <input
            type="text"
            id="input-search"
            placeholder="Search here.."
            title="Type in a name"
            onChange={(e) => search(e.target.value.trim(""))}
            autoFocus
          />
        </form>
      </div>
      <div id="news">
        <List data={data}/>
      </div>
    </main>
  );
};

export default input;
