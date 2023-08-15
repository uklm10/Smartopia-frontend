import React, { useState, useEffect } from 'react'
import './searchBar.css';

function searchBar({ setSearch, search }) {
    return (
        <div className='searchBar'>
            <input type="text" name="searchTearm" placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default searchBar

// function Learn() {
//   const [item, setItem] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//       axios.get("https://ttool-test.onrender.com/api/")
//           .then((response) => {
//               setItem(response.?);
//           });
//   }, []);

//   const handleSearch = (e) => {
//       setSearchTerm(e.target.value);
//   };

//   const filteritem = item.filter((item) => {
//       if (searchTerm == "") {
//           return item;
//       } else if (item.?.toLowerCase().includes(searchTerm.toLowerCase())) {
//           return item;
//       }
//   }
//   )
// return (
//   <div className='searchBar'>
//                       <input
//                           type='text'
//                           placeholder='Search...'
//                           value={searchTerm}
//                           onChange={handleSearch}
//                       />
//               <div >
//                   {filteritem.map((item, index) => (
//                       <LearnCard key={item._id} item={item} />
//                   ))}
//               </div>
// );
//                   }
