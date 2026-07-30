import { useState, useEffect } from "react";
import "./App.css";

import quotes from "./data/quotes";
import QuoteCard from "./components/QuoteCard";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";

function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [...new Set(quotes.map((quote) => quote.category))];

  // Filter quotes based on category and search
  const filteredQuotes = quotes.filter((quote) => {
    const matchesCategory =
      selectedCategory === "All" ||
      quote.category === selectedCategory;

    const matchesSearch =
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Show a random quote whenever filter/search changes
  useEffect(() => {
    if (filteredQuotes.length === 0) {
      setCurrentQuote(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    setCurrentQuote(filteredQuotes[randomIndex]);
  }, [selectedCategory, searchTerm]);

  function getNewQuote() {
    if (filteredQuotes.length === 0) return;

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    } while (
      filteredQuotes.length > 1 &&
      filteredQuotes[randomIndex].id === currentQuote?.id
    );

    setCurrentQuote(filteredQuotes[randomIndex]);
  }

  return (
    <div className="app">
      <div className="hero">
        <p className="subtitle">
          Curated thoughts from the world's greatest minds.
        </p>

        <h1>QUOTES</h1>

        <div className="controls">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {currentQuote ? (
          <>
            <QuoteCard quote={currentQuote} />

            <button onClick={getNewQuote}>
              New Quote →
            </button>
          </>
        ) : (
          <div className="no-results">
            <h2>No quotes found!</h2>
            <p>Try another keyword or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;