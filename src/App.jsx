import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="p-6 text-center">
    <h1 className="text-2xl font-bold">Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div className="p-6 text-center">
    <h1 className="text-2xl font-bold">About Page</h1>
    <p>This is the about page of our React app.</p>
  </div>
);

const Contact = () => (
  <div className="p-6 text-center">
    <h1 className="text-2xl font-bold">Contact Page</h1>
    <p>Feel free to reach out to us.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex justify-center space-x-4 bg-gray-200 p-2 rounded-lg">
          <Link className="text-blue-600 hover:underline" to="/">Home</Link>
          <Link className="text-blue-600 hover:underline" to="/about">About</Link>
          <Link className="text-blue-600 hover:underline" to="/contact">Contact</Link>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
