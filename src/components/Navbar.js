// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="bg-blue-500 p-4 text-white">
//             <h1 className="text-xl">Tailor Shop</h1>
//         </nav>
//     );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/NavbarFooter.css";

// function Navbar() {
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">TailorEase</h1>
//         <div>
//           <Link to="/" className="px-4">Home</Link>
//           <Link to="/order" className="px-4">Order</Link>
//           <Link to="/booking" className="px-4">Booking</Link>
//           <Link to="/tracking" className="px-4">Tracking</Link>
//           <Link to="/login" className="px-4">Login</Link>
//           <Link to="/signup" className="px-4">Signup</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavbarFooter.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>TailorEase</h1>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/tracking">Tracking</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

