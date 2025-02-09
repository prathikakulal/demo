import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import { Link } from "react-router-dom"; // For navigation links
import './Home.css'; // Adjust the path as necessary

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }} // Replace with your image path
      >
        <div className="hero-content text-white text-center">
          <h1 className="text-5xl font-bold">Your Perfect Fit, Tailored Just for You!</h1>
          <p className="mt-4 text-lg">Order custom outfits, book appointments, and track your tailoring orders seamlessly.</p>
          <div className="mt-6">
            <Link to="/order" className="btn btn-primary mr-4">Start Your Order</Link>
            <Link to="/booking" className="btn btn-secondary">Book an Appointment</Link>
          </div>
        </div>
      </div>

      {/* Why Choose TailorEase? */}
      <section className="features py-10">
        <h2 className="text-3xl font-bold text-center">Why Choose TailorEase?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="feature text-center">
            <img src="/path/to/icon1.png" alt="Custom Tailoring" className="mx-auto mb-2" /> {/* Replace with your icon path */}
            <h3 className="font-semibold">Custom Tailoring</h3>
            <p>Users can input measurements & place orders.</p>
          </div>
          <div className="feature text-center">
            <img src="/path/to/icon2.png" alt="Order Tracking" className="mx-auto mb-2" /> {/* Replace with your icon path */}
            <h3 className="font-semibold">Order Tracking</h3>
            <p>Live updates on tailoring progress.</p>
          </div>
          <div className="feature text-center">
            <img src="/path/to/icon3.png" alt="Local Booking" className="mx-auto mb-2" /> {/* Replace with your icon path */}
            <h3 className="font-semibold">Local Booking</h3>
            <p>Find & book appointments with expert tailors.</p>
          </div>
          <div className="feature text-center">
            <img src="/path/to/icon4.png" alt="WhatsApp Integration" className="mx-auto mb-2" /> {/* Replace with your icon path */}
            <h3 className="font-semibold">WhatsApp Integration</h3>
            <p>Direct chat with tailors for updates.</p>
          </div>
          <div className="feature text-center">
            <img src="/path/to/icon5.png" alt="Secure Payments" className="mx-auto mb-2" /> {/* Replace with your icon path */}
            <h3 className="font-semibold">Secure Payments</h3>
            <p>Pay via QR Code at the shop.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="customer-steps">
            <h3 className="font-semibold">For Customers:</h3>
            <ol className="list-decimal list-inside">
              <li>Sign Up/Login.</li>
              <li>Choose a Service (Order Custom Outfit or Book an Appointment).</li>
              <li>Provide measurements/upload pattern (for custom orders).</li>
              <li>Track your order or visit a local tailor.</li>
              <li>Pay via QR Code scanner at the shop.</li>
            </ol>
          </div>
          <div className="tailor-steps">
            <h3 className="font-semibold">For Tailors:</h3>
            <ol className="list-decimal list-inside">
            <li>Register & Set Up Profile.</li>
              <li>Accept Orders & Manage Appointments.</li>
              <li>Update Customers on Order Progress.</li>
              <li>Receive Payments via QR Code.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Customer Reviews & Testimonials */}
      <section className="testimonials py-10">
        <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="testimonial text-center p-4 border rounded shadow">
            <p>"TailorEase made it so easy to get a custom outfit stitched! Highly recommended!"</p>
            <p className="font-semibold">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="testimonial text-center p-4 border rounded shadow">
            <p>"Loved the real-time tracking feature. I always knew when my dress was ready!"</p>
            <p className="font-semibold">⭐⭐⭐⭐⭐</p>
          </div>
          <div className="testimonial text-center p-4 border rounded shadow">
            <p>"The booking process was seamless, and the tailors were very professional!"</p>
            <p className="font-semibold">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section>

      {/* Shop Location */}
      <section className="shop-location py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Our Location</h2>
        <div className="text-center mt-4">
          <p className="font-semibold">TailorEase Shop</p>
          <p>123 Tailor Street, Fashion City</p>
          <p>Opening Hours: Mon-Sat, 9 AM - 6 PM</p>
          <p>Contact: (123) 456-7890</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs py-10">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-6">
          <details className="faq-item">
            <summary className="font-semibold">How does custom tailoring work?</summary>
            <p>Custom tailoring involves taking your measurements and creating a garment tailored specifically for you.</p>
          </details>
          <details className="faq-item">
            <summary className="font-semibold">How can I book an appointment?</summary>
            <p>You can book an appointment through our booking page or directly contact us via WhatsApp.</p>
          </details>
          <details className="faq-item">
            <summary className="font-semibold">What payment methods do you support?</summary>
            <p>We support various payment methods, including cash and QR code payments at the shop.</p>
          </details>
          <details className="faq-item">
            <summary className="font-semibold">How do I track my order?</summary>
            <p>You can track your order through our order tracking page, where you will receive live updates.</p>
          </details>
          <details className="faq-item">
            <summary className="font-semibold">Can I contact the tailor directly?</summary>
            <p>Yes, you can contact your assigned tailor directly via WhatsApp for any inquiries.</p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;