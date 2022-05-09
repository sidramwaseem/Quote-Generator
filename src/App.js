import React from "react";
import Header from "./components/Header.js";
import Quote from "./components/Quote.js";
import Footer from "./components/Footer.js";

export default function App() {
  const [quote, setQuote] = React.useState({
    text: "Just as characteristic, perhaps, is the intellectual interdependence created through the development of the modern media of communication: post, telegraph, telephone, and popular press.",
    author: "Christian Lous Lange",
    genre: "communication",
  });

  React.useEffect(() => {
    async function getQuote() {
      const res = await fetch(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      const data = await res.json();
      const { quoteText, quoteAuthor, quoteGenre } = data.data[0];
      setQuote(() => {
        return {
          text: quoteText,
          author: quoteAuthor,
          genre: quoteGenre,
        };
      });
    }
    getQuote();
  }, []);

  async function toggleChange() {
    const res = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    const data = await res.json();
    const { quoteText, quoteAuthor, quoteGenre } = data.data[0];
    setQuote(() => {
      return {
        text: quoteText,
        author: quoteAuthor,
        genre: quoteGenre,
      };
    });
  }

  return (
    <div className="container">
      <Header handleClick={toggleChange} />
      <Quote text={quote.text} author={quote.author} genre={quote.genre} />
      <Footer />
    </div>
  );
}
