import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const list = [
  { id: 1, firstName: 'Amaya', lastName: 'Torphy', jobTitle: 'Legacy Group Facilitator', email: 'Rosie_Mann@gmail.com' },
  { id: 2, firstName: 'Weston', lastName: 'Huel', jobTitle: 'Regional Data Agent', email: 'Tristian_Vandervort68@yahoo.com' },
  { id: 3, firstName: 'Bridgette', lastName: 'Corwin', jobTitle: 'Internal Usability Officer', email: 'Sherman.Purdy@hotmail.com' },
  { id: 4, firstName: 'Gaya', lastName: 'Joy', jobTitle: 'Group Facilitator', email: 'Gaya@gmail.com' },
  { id: 5, firstName: 'Netsy', lastName: 'Vitr', jobTitle: 'Data Agent', email: 'Netsy@yahoo.com' },
  { id: 6, firstName: 'Tom', lastName: 'Moll', jobTitle: 'Usability Officer', email: 'Tom.Purdy@hotmail.com' },
];

function SortableTable({ data }) {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedArray = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mt-4">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} onClick={() => handleSort(key)} style={{ cursor: 'pointer' }}>
                {key} {sortConfig.key === key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SortableTable data={list} />
    </div>
  );
}

export default App;
