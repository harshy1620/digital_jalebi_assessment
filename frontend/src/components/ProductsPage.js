import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import initialData from '../data';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // handling the search term 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // handling the status filter
  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  // finding the filtered data as per the search term and status filter
  const filteredData = initialData.filter(item => {
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.jeweller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatusFilter = statusFilter ? item.jeweller === statusFilter : true;

    return matchesSearchTerm && matchesStatusFilter;
  });

  return (
    <>
      <Navbar />
      <div className='product-page-wrapper'>
        <div className='left'>
          <h5>Search with jeweller or jewellery name</h5>
          <div>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm} 
              onChange={handleSearch} 
              style={{ height: "20px", width: "120px", marginBottom: "30px" ,padding:"10px",marginTop:"15px"}}
            />
          </div>
        </div>
        <div className='right'>
          <div className='sorting'>
            <label>Sort by: &nbsp;</label>
            <select value={statusFilter} onChange={handleStatusFilter} style={{ height: "40px", width: "120px", marginBottom: "30px" }}>
              <option value="">Jewellers</option>
              <option value="Omakar Mint Pvt Ltd">Omakar Mint Pvt Ltd</option>
              <option value="NL Jewels">NL Jewels</option>
              <option value="MTS Enterprises">MTS Enterprises</option>
              <option value="Riddhi Siddhi Jewellers">Riddhi Siddhi Jewellers</option>
            </select>
          </div>
          <div className='cards-section'>
            {filteredData.map((item, index) => (
              <div key={index} className='card'>
                <img src={item.Image} alt={item.title} style={{ height: "250px", width: "400px" }} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
