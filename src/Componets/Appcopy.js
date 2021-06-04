import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Container } from "react-bootstrap";

import "./App.css";
import Search from "./Componets/Search";
import Forminser from "./Componets/Forminser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Appcopy() {
    const url = "https://www.anapioficeandfire.com/api/books";
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchData();
        console.log(searchTerm);
        console.log(numDifferentiation(100000));
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    function numDifferentiation(value) {
        var val = Math.abs(value);
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(2) + " Cr";
        } else if (val >= 100000) {
            val = (val / 100000).toFixed(2) + " Lac";
        }
        return val;
    }
    const fetchData = async () => {
        const response = await axios.get(url);
        console.log(response.data);
        setBooks(response.data);
    };
    return (
        <div className="App">
            {/* <Forminser /> */}

            {/* <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> */}
            <Row>
                {books
                    .filter((book) => book.name.includes(searchTerm))
                    .map((book, index) => {
                        const cleanedDate = new Date(book.released).toDateString(); //convert date
                        const authors = book.authors.join(", "); // map nest array
                        return (
                            <Card className="card" style={{ width: "35rem" }}>
                                <h6>{index + 1}</h6>
                                <FontAwesomeIcon icon="fa-solid fa-viruses" />
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

export default Appcopy;
