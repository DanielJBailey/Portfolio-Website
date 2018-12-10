import React from 'react';
import '../styles/app.scss';

const Home = () => (
    <div className = "site-wrapper">
        <section id="home" className = "section">
        <h1 className="name">Daniel Bailey</h1>
        <h3>Software Engineer | Salt Lake City, Utah</h3>
        </section>
        <section id="about" className = "section">
        About
        </section>
        <section id="portfolio" className = "section">
        Portfolio
        </section>
        <section id="experience" className = "section">
        Experience
        </section>
        <section id="contact" className = "section">
        Contact
        </section>
    </div>
)

export default Home;