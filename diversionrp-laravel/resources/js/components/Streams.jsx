import React from 'react';

/**
 * Streams page listing our community streamers.
 */
export default function Streams() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 p-6 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/rules" className="hover:text-purple-400">Rules</a></li>
            <li><a href="/streams" className="hover:text-purple-400">Streams</a></li>
            <li><a href="/showcase" className="hover:text-purple-400">Showcase</a></li>
            <li><a href="/support" className="hover:text-purple-400">Support</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Our Streamers</h1>
        <p className="text-gray-300">Find live streams and VODs on our Discord or Twitch channels.</p>
      </main>
    </div>
  );
}
