import React, { Component } from "react";
import Bookmark from "./Bookmark";


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [
        {
          title: "Google",
          shortDescription: "search engine",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52b3ef77b5d19b1ac5132",
          url: "https://www.google.com",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        }
      ]
    };
  }
  componentDidMount() {
    fetch("/api/bookmarks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlNGZlZDVmNzdiNWQxOWIxYWM1MTJjIiwiaWF0IjoxNTU4NTI4ODUzLCJleHAiOjE1NTg1MzI0NTN9.KnfWmzCkhYIfCHoCTIFFuQ5UxOKREAXIqTNbVSaYiHU"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data.data.bookmark
        });
        console.log(this.state.bookmarks)
      });
  }

  render() {
    return (
      <div>
        {this.state.bookmarks.map((bookmark, index) => (
          <Bookmark
            key={bookmark._id}
            title={bookmark.title}
            dis={bookmark.shortDescription}
            url={bookmark.url}
          />
        ))}

      </div>
    );
  }
}
