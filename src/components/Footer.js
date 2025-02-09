// import React from 'react';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 p-4 text-white text-center">
//             <p>&copy; 2025 Tailor Shop. All rights reserved.</p>
//         </footer>
//     );
// };

// export default Footer;

// import React from "react";
// import "../styles/NavbarFooter.css";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white p-4 text-center">
//       <p>&copy; {new Date().getFullYear()} TailorEase. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "../styles/NavbarFooter.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TailorEase. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

