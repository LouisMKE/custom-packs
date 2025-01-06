import React from "react";
import "./ResultsPage.css"; // Custom CSS file for styling

const ResultsPage = () => {
  return (
    <div className="results-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Your Logo</div>
        <div className="title">User Search Term</div>
      </header>

      {/* Suggestions Section */}
      <main className="content">
        <section className="suggestions">
          <h2>Suggestions</h2>
          <div className="categories">
            <div className="category">
              <h3>Movies</h3>
              <ul>
                <li>Movie 1</li>
                <li>Movie 2</li>
                <li>Movie 3</li>
              </ul>
            </div>
            <div className="category">
              <h3>Books</h3>
              <ul>
                <li>Book 1</li>
                <li>Book 2</li>
                <li>Book 3</li>
              </ul>
            </div>
            <div className="category">
              <h3>Songs</h3>
              <ul>
                <li>Song 1</li>
                <li>Song 2</li>
                <li>Song 3</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Similar Packs Section */}
        <section className="similar-packs">
          <h2>Similar Packs</h2>
          <div className="packs">
            <div className="pack">Pack 1</div>
            <div className="pack">Pack 2</div>
            <div className="pack">Pack 3</div>
          </div>
        </section>

        {/* Share Buttons */}
        <section className="share-buttons">
          <h2>Share This Page</h2>
          <div className="buttons">
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Instagram</button>
            <button>LinkedIn</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResultsPage;
