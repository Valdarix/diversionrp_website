import React, { useState } from 'react';

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 p-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
          <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/rules" className="hover:text-purple-400">Rules</a></li>
            <li><a href="/streams" className="hover:text-purple-400">Streams</a></li>
            <li><a href="/showcase" className="hover:text-purple-400">Showcase</a></li>
            <li><a href="/support" className="hover:text-purple-400">Supporters</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        <ul id="mobile-menu" className={`${open ? '' : 'hidden'} flex-col space-y-4 mt-4 md:hidden`}>
          <li><a href="/" className="block text-center hover:text-purple-400">Home</a></li>
          <li><a href="/rules" className="block text-center hover:text-purple-400">Rules</a></li>
          <li><a href="/streams" className="block text-center hover:text-purple-400">Streams</a></li>
          <li><a href="/showcase" className="block text-center hover:text-purple-400">Showcase</a></li>
          <li><a href="/support" className="block text-center hover:text-purple-400">Supporters</a></li>
          <li><a href="/contact" className="block text-center hover:text-purple-400">Contact</a></li>
        </ul>
      </header>

      <main className="container mx-auto flex-grow py-16 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Contact Us</h1>
        <form action="/contact" method="POST" className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-lg font-semibold mb-2">Reason</label>
            <select id="reason" name="reason" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white" required>
              <option value="" disabled selected>Select a reason</option>
              <option value="reason1">Reason 1</option>
              <option value="reason2">Reason 2</option>
              <option value="reason3">Reason 3</option>
              <option value="reason4">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="6" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-white" required></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-teal-400 to-blue-500 p-3 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500">Send Message</button>
        </form>
      </main>

      <footer className="bg-gray-800 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="http://play.justrp.cloud:40120/" className="hover:text-teal-400">TXAdmin</a>
            <a href="https://fivemanage.com/dashboard/ascendancerp" className="hover:text-teal-400">Fivemange</a>
          </div>
          <div className="flex space-x-6 text-2xl">
            <a href="https://discord.gg/JWJaBcpP8R" className="hover:text-teal-400"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
