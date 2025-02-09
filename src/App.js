


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import OrderForm from "./pages/OrderForm";
// import Booking from "./pages/Booking";
// import OrderTracking from "./pages/OrderTracking";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./styles/NavbarFooter.css";

// function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/order" element={<OrderForm />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/tracking" element={<OrderTracking />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// //import Order from "./pages/Order";
// import Booking from "./pages/Booking";
// import Order from "./pages/OrderForm";
// import tracking from "./pages/OrderTracking";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar /> {/* Navbar should be here so that it's included across all pages */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/order" element={<Order />} />
//           <Route path="/booking" element={<Booking />} />
//         </Routes>
//         <Footer /> {/* Footer should be here so it's at the bottom of every page */}
//       </div>
//     </Router>
//   );
// }

// export default App;


// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";  // Ensure the correct path
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   );
// }
// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";  
import Navbar from "./components/Navbar";  

function App() {
  return (
    <>
      <Navbar /> {/* Ensure Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
