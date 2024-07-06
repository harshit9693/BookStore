// import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import "./RecentlyAdded.css";
// import { StoreContext } from "../../context/storeContext";

// const RecentlyAdded = () => {
//   const { url } = useContext(StoreContext);
//   const [recentBooks, setRecentBooks] = useState([]);

//   useEffect(() => {
//     const fetchRecentBooks = async () => {
//       try {
//         const response = await fetch(`${url}/api/book/recent`);
//         const data = await response.json();

//         // Ensure the data is an array before setting the state
//         if (Array.isArray(data)) {
//           setRecentBooks(data);
//         } else {
//           console.error("Unexpected response format:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching recent books:", error);
//       }
//     };

//     fetchRecentBooks();
//   }, [url]);

//   return (
//     <div className="recently-added">
//       <h2 className="section-title">Recently Added Books</h2>
//       <div className="books-container">
//         {recentBooks.map((book) => (
//           <div className="book-card" key={book._id}>
//             <Link to={`/book/${book._id}`}>
//               <img
//                 src={`${url}/images/${book.image}`}
//                 alt={book.name}
//                 className="book-cover"
//               />
//               <div className="book-info">
//                 <h3 className="book-title">{book.name}</h3>
//                 <p className="book-author">by {book.author}</p>
//                 <p className="book-price">${book.price}</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentlyAdded;

import React from "react";

const RecentlyAdded = () => {
  return <div>RecentlyAdded</div>;
};

export default RecentlyAdded;
