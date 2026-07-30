function QuoteCard({ quote }) {
  return (
    <div className="quote-card">

      <p className="quote-text">
        “{quote.text}”
      </p>

      <p className="author">
        {quote.author}
      </p>

      <span className="category">
        {quote.category}
      </span>

    </div>
  );
}

export default QuoteCard;