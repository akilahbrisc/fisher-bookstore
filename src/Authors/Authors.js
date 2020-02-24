import React, {Component} from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorsDisplay.js";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                id: 1,
                author: "John Doe",
                },
                {
                id: 2,
                author: "Jung Kook",
                },
                {
                id: 3,
                author: "Levi Ackerman",
                }
            ]
        };
    }
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorsDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}
