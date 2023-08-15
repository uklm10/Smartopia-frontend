import React, { useEffect, useState } from 'react'
import './banner.css';
import SearchBar from '../SearchBar/searchBar';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';

function Banner({ setSearch, search }) {

  const [currentBannerText, set_currentBannerText] = useState("");

  const getCurrentBannerText = async () => {
    await axios.get("http://localhost:8800/api/banner/get")
      .then((res) => { set_currentBannerText(res.data.text); })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getCurrentBannerText()
  }, [])

  return (
    <div className='banner'>
      <div className='container'>
        <div className='headline_div'>
          {currentBannerText && <TypeAnimation
            sequence={[
              currentBannerText,
              1000
            ]}
            speed={50}
            style={{ fontSize: '3.8em' }}
            repeat={0}
          />}
        </div>
        <br />
        <div className='searchBar_div'>
          <SearchBar setSearch={setSearch} search={search} />
        </div>
      </div>
    </div>
  )
}

export default Banner
// import React, { useEffect, useState } from 'react';
// import './banner.css';
// import SearchBar from '../SearchBar/searchBar';
// import { TypeAnimation } from 'react-type-animation';
// import axios from 'axios';

// function Banner({ setSearch, search }) {
//   const [currentBannerText, set_currentBannerText] = useState("");
//   const [itemCount, setItemCount] = useState(0); // State to track the number of items

//   const getCurrentBannerText = async () => {
//     await axios.get("http://localhost:8800/api/banner/get")
//       .then((res) => {
//         set_currentBannerText(res.data.text);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getCurrentBannerText();
//   }, []);

//   const addItem = () => {
//     setItemCount((prevCount) => prevCount + 1); // Increment item count by 1
//   };

//   return (
//     <div className='banner'>
//       <div className='container'>
//         <div className='headline_div'>
//           {currentBannerText && (
//             <TypeAnimation
//               sequence={[currentBannerText, 1000]}
//               speed={50}
//               style={{ fontSize: '3.8em' }}
//               repeat={0}
//             />
//           )}
//         </div>
//         <br />
//         <div className='searchBar_div'>
//           <SearchBar setSearch={setSearch} search={search} />
//         </div>
//         <br />
//         <div>
//           <h2>Item Count: {itemCount}</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Item</th>
//               </tr>
//             </thead>
//             <tbody>

//               {currentBannerText.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <br />
//         <button onClick={addItem}>Add Item</button> {/* Button to add an item */}
//       </div>
//     </div>
//   );
// }

// export default Banner;
