import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarFooter.css';


const Navbar = () => {
    return (
        <nav className="navbar bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">TailorEase</h1>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/order" className="mr-4">Order</Link>
                    <Link to="/booking" className="mr-4">Booking</Link>
                    <Link to="/tracking" className="mr-4">Tracking</Link>
                    <Link to="/login" className="mr-4">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/NavbarFooter.css';


// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>TailorEase</h1>
//             <div className="navbar-links">
//                 <Link to="/">Home</Link>
//                 <Link to="/order">Order</Link>
//                 <Link to="/booking">Booking</Link>
//                 <Link to="/tracking">Tracking</Link>
//                 <Link to="/login">Login</Link>
//                 <Link to="/signup">Signup</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
