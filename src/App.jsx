import { useState } from 'react';
import './App.css';
import "./index.css";

const sections = [
  { number: "01", name: "Drinks", description: "Cocktails. Made with care.", image: "photo-1514362545857-3bc16c4c7d1b" },
  { number: "02", name: "Food", description: "Plates. Made to share.", image: "photo-1551504734-5ee1c4a1479b" },
  { number: "03", name: "Music", description: "Good sound. Made for late nights.", image: "photo-1470229722913-7c0e2dbbafd3" },
];

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">PUB<span> / </span>G</a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>THE EXPERIENCE</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>WHAT'S ON</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>FIND US</a>
          <a className="nav-book" href="#visit" onClick={() => setMenuOpen(false)}>BOOK A TABLE ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">EST. 2026</p>
            <h1>Good drinks.
                <br />Great stories.<br />
                <span>Good music.</span>
            </h1>
            <p className="hero-description">
              Your little corner for the cocktails, enjoy the food and stay for the music.
            </p>
            <div className="hero-buttons">
              <a className="button button-light" href="#experience">EXPLORE THE BAR ↘</a>
              <a className="button button-outline" href="#visit">PLAN YOUR VISIT ↗</a>
            </div>
          </div>
          <div className="hero-footer">
            <h2>
            <span>LONDON - UNITED KINGDOM</span>
            <br />OPENING HOURS: 
            <span>MONDAY-SATURDAY 5PM - 2AM </span>
            <span>SUNDAY 3PM - 1AM </span>
            </h2>
          </div>
        </section>

        <section className="intro" id="experience">
          <p className="eyebrow">A PLACE TO LOSE TRACK OF TIME</p>
          <h2>NOT JUST A BAR.<br />A <span>STATE OF MIND.</span></h2>
          <p className="intro-text">
            A little escapism goes a long way. Thoughtful drinks, food
            worth sharing, music worth listening to and people worth
            meeting. Make yourself at home.
          </p>
        </section>

        <section className="experiences">
          {sections.map((section) => (
            <article className="experience-card" key={section.name}>
              <img
                src={`https://images.unsplash.com/${section.image}?auto=format&fit=crop&w=1000&q=85`}
                alt={section.name}
                loading="lazy"
              />
              <div className="card-shade" />
              <div className="card-content">
                <span className="card-number">{section.number} / DISCOVER</span>
                <h3>{section.name}</h3>
                <p>{section.description}</p>
                <a href="#visit" aria-label={`Discover ${section.name}`}>EXPLORE MORE ↗</a>
              </div>
            </article>
          ))}
        </section>

        <section className="events" id="events">
          <p className="eyebrow">SAVE YOURSELF A NIGHT</p>
          <h2>GOOD TIMES.<br /><span>ON REPEAT.</span></h2>
          <p>Gather your favourite people. We'll take care of the atmosphere.</p>
          <a className="button button-light" href="#visit">LET'S MAKE A PLAN ↗</a>
        </section>

        <section className="visit" id="visit">
          <div>
            <p className="eyebrow">YOUR NEXT FAVOURITE PLACE</p>
            <h2>COME ON<br /> <span>IN.</span></h2>
          </div>
          <div className="visit-details">
            <p>Great drinks. Good people. No rush to leave.</p>
            <a className="button button-light" href="mailto:hello@example.com">
              GET IN TOUCH - This is a demo website.
            </a>
            <p className="small-note">
              This is a demo website. 
            </p>
          </div>
        </section>

        <section className="events" id="events">
            <p className="photo-credit">
              Photos by 
              <ul>
                <li><a href="https://unsplash.com/@anil_sharma_india?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anil Sharma</a> on <a href="https://unsplash.com/photos/a-table-topped-with-lots-of-different-types-of-drinks-fE3uYk0Ri1U?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></li>
                <li><a href="https://unsplash.com/@joshuaearle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joshua Earle</a> on <a href="https://unsplash.com/photos/5NLCaz2wJXE?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></li>
              </ul>
            </p>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">PUB<span> / </span>G</a>
        <p>MADE FOR YOUR MOMENTS.</p>
        <a href="#home">BACK TO TOP ↑</a>
        <p>© {new Date().getFullYear()} · PUB G by LANIA</p>
      </footer>
    </>
  );
}


export default App
