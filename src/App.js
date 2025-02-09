
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   );
// }

// export default App;


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
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow">
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


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import Booking from "./pages/Booking";
import OrderTracking from "./pages/OrderTracking";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/NavbarFooter.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
