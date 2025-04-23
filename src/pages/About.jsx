import React from 'react';

const About = () => {
  return (
    <div className="about" style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>About PhotoGallery</h2>
      <p>
        <strong>PhotoGallery</strong> is a simple and responsive web app built with React that allows users to explore and enjoy beautiful, high-resolution photos from the <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash API</a>.
      </p>
      <p>
        You can view a curated set of random photos or search for specific themes like <em>nature</em>, <em>technology</em>, <em>people</em>, and more. Every photo comes with proper credit to the original photographer.
      </p>
      <p>
        This app is designed to demonstrate core React concepts including:
        <ul>
          <li>Functional Components</li>
          <li>Routing with React Router</li>
          <li>State Management using <code>useState</code></li>
          <li>Side Effects with <code>useEffect</code></li>
          <li>Fetching data from an external API (Unsplash)</li>
          <li>Responsive design with CSS Grid</li>
        </ul>
      </p>
      <p>
        Whether you're just exploring cool photos or testing out React projects, PhotoGallery is a fun and visually engaging way to see React in action.
      </p>
      <p>Built with love</p>
    </div>
  );
};

export default About;
