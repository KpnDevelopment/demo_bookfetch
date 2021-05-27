import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Container } from "react-bootstrap";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const url = "https://www.anapioficeandfire.com/api/books";
  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setBooks(response.data);
  };
  return (
    <div className="App">
      <Row>
        {books.map((book, index) => {
          const cleanedDate = new Date(book.released).toDateString(); //convert date
          const authors = book.authors.join(", "); // map nest array
          return (
            <Card className="card" style={{ width: "35rem" }}>
              <h6>{index + 1}</h6>
              <h1>{book.name}</h1>
              <h2>{authors}</h2>
              <h2>{cleanedDate}</h2>
              <h2>{book.mediaType}</h2>
              <h2>{book.country}</h2>
              <h2>{book.publisher}</h2>
              <h2>{book.numberOfPages}</h2>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
