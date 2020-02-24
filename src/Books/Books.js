import React, {Component} from "react";
import "./Books.css";
import { BooksDisplay } from "./BooksDisplay.js";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id:1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id:2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id:3,
                    title: "Tiger's Curse",
                    author: "Colleen Houck",
                    isbn: "978-9478612776"
                },
                {
                    id:4,
                    title: "Pink Panther",
                    author: "Jerry Beck",
                    isbn: "978-4735861248"
                },
                {
                    id:5,
                    title: "Parry Hotter",
                    author: "J.K. Rowling",
                    isbn: "978-7698314297"
                },
                {
                    id:6,
                    title: "Parasite",
                    author: "Bong Joon Ho",
                    isbn: "978-3186975185"
                },
                {
                    id:7,
                    title: "Jane Eyre",
                    author: "Charlotte Bronte",
                    isbn: "978-6871654812"
                },
                {
                    id:8,
                    title: "Chocolate",
                    author: "Kinder Bueno",
                    isbn: "978-2291537654"
                }
            ]
            
        };
    }
    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BooksDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}

