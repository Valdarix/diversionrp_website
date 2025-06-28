import React from 'react';

/**
 * Rules page migrated from static HTML.
 * Provides a placeholder for the server guidelines.
 */
export default function Rules() {
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
        <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Rules &amp; Guidelines</h1>
        <p className="text-gray-300">Refer to our Discord for the full rule set. This React page replaces the old <code>rules.html</code>.</p>
      </main>
    </div>
  );
}
