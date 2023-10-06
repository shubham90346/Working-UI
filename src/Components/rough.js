import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [items, setItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    // Fetch data from JSON Server
    fetch('http://localhost:5000/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleCheckboxChange = (id) => {
    // Toggle the selected ID
    setSelectedIds(prevIds => prevIds.includes(id) ? prevIds.filter(item => item !== id) : [...prevIds, id]);
  };

  const handleDeleteClick = () => {
    // Filter out the selected items
    const updatedItems = items.filter(item => !selectedIds.includes(item.id));
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={selectedIds.includes(item.id)}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label>{item.name}</label>
        </div>
      ))}
      <div>
        <button onClick={handleDeleteClick}>Delete Selected</button>
      </div>
    </div>
  );
}

export default MyComponent;
