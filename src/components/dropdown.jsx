import React, { useState, useEffect } from 'react';

const MainComponent = () => {
  // Step 1: Define state variables for SearchBar and DropdownFilters.
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  // Step 2: Define options for DropdownFilters.
  const options1 = ['Option A', 'Option B', 'Option C'];
  const options2 = ['Option X', 'Option Y', 'Option Z'];
  const options3 = ['Choice 1', 'Choice 2', 'Choice 3'];
  const options4 = ['Category 1', 'Category 2', 'Category 3'];

  // Step 3: Fetch data from an API using useEffect.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint.
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Step 4: Implement the filter function for the SearchBar.
  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div className="main-container">
      <div className="welcome-container">
        <img src="avatar.png" alt="User Avatar" className="avatar" />
        <h3 className="welcome-text">Welcome to our website!</h3>
        <br />
        <p className="small-text">This is a short description.</p>
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleFilter}
          className="search-input"
        />
        <ul className="search-results">
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      <div className="dropdown-filters-container">
        {/* Filter 1 */}
        <div className="filter">
          <p className="filter-hint">Filter 1:</p>
          <select
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
          >
            <option value="">Select an option</option>
            {options1.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 2 */}
        <div className="filter">
          <p className="filter-hint">Filter 2:</p>
          <select
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
          >
            <option value="">Select an option</option>
            {options2.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 3 */}
        <div className="filter">
          <p className="filter-hint">Filter 3:</p>
          <select
            value={selectedOption3}
            onChange={(e) => setSelectedOption3(e.target.value)}
          >
            <option value="">Select an option</option>
            {options3.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Filter 4 */}
        <div className="filter">
          <p className="filter-hint">Filter 4:</p>
          <select
            value={selectedOption4}
            onChange={(e) => setSelectedOption4(e.target.value)}
          >
            <option value="">Select an option</option>
            {options4.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
