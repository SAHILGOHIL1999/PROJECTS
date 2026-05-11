import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import Filter from './components/Filter';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [cityFilter, setCityFilter] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5; // 5 rows per page requirement

  // Fetch Data from JSONPlaceholder [cite: 63, 64, 65]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  // Search Logic [cite: 68, 69]
  let filteredData = data.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Filter Logic 
  if (cityFilter) {
    filteredData = filteredData.filter(user => user.address.city === cityFilter);
  }

  // Sorting Logic [cite: 71, 73, 74]
  const sortedData = [...filteredData].sort((a, b) =>
    sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  // Pagination Logic [cite: 76]
  const start = (page - 1) * limit;
  const paginatedData = sortedData.slice(start, start + limit);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{/*  */} Student Data Table Management</h2>
      
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <Search setSearch={setSearch} />
        <Filter setCityFilter={setCityFilter} />
        <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
          Sort: {sort === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>

      <Table data={paginatedData} />

      <Pagination 
        page={page} 
        setPage={setPage} 
        total={sortedData.length} 
        limit={limit} 
      />
    </div>
  );
}

export default App;