import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
        <header className="header">
            <h1>My Website</h1>
        </header>
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <main className="main-content">
            <h2>Welcome to My Website</h2>
            <p>This is the main content area. Here you can put articles, images, and other media.</p>
        </main>
        <aside className="sidebar">
            <h3>Sidebar</h3>
            <p>This is a sidebar for additional content like links or ads.</p>
        </aside>
        <footer className="footer">
            <p>&copy; 2025 My Layout</p>
        </footer>
    </div>
    </>
  )
}

export default App
