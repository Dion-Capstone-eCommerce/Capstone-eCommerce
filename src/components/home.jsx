import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Crystal Clear Sounds</h1>
        <p>Your premier destination for acquiring premium car audio equipment!</p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Featured Items</h2>
          <p>Discover a wide range of items from different brands.</p>
        </div>
        <div className="feature">
          <h2>Buy</h2>
          <p>Purchase new items.</p>
        </div>
        <div className="feature">
          <h2>Connect</h2>
          <p>Communicate with my team through our messaging system.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2023 Crystal Clear Sounds Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}



export default Home;