import React from 'react';

export default function Home() {
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
            <li><a href="/support" className="hover:text-purple-400">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto py-16 text-center">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          DIVERSION RP!
        </h1>
        <p className="mt-6 text-lg text-gray-300">We're moving to React.</p>
        <a href="https://discord.gg/diversionrp" target="_blank" rel="noreferrer">
          <button className="mt-8 bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-500">
            Join Today!
          </button>
        </a>
      </main>
    </div>
  );
}
