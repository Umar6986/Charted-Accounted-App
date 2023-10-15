import React, { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/Searchbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [results, setResults] = useState("");
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
