import React, { Component } from "react";
import Bookmark from "./Bookmark";


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [
        {
          title: "berlin",
          shortDescription: "info website",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52ad5f77b5d19b1ac5131",
          url: "https://www.berlin.de",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        },
        {
          title: "facebook",
          shortDescription: "social network",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52b3ef77b5d19b1ac5132",
          url: "https://www.facebook.com",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        },
        {
          title: "berlin",
          shortDescription: "info website",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52ad5f77b5d19b1ac5131",
          url: "https://www.berlin.de",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        },
        {
          title: "facebook",
          shortDescription: "social network",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52b3ef77b5d19b1ac5132",
          url: "https://www.facebook.com",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        },
        {
          title: "berlin",
          shortDescription: "info website",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52ad5f77b5d19b1ac5131",
          url: "https://www.berlin.de",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        },
        {
          title: "facebook",
          shortDescription: "social network",
          tag: [],
          createdAt: "2019-05-22T07:23:22.173Z",
          _id: "5ce52b3ef77b5d19b1ac5132",
          url: "https://www.facebook.com",
          userID: "5ce4fed5f77b5d19b1ac512c",
          __v: 0
        }
      ]
    };
  }
  // componentDidMount() {
  //   fetch("/api/bookmarks", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       token:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWNlNGZlZDVmNzdiNWQxOWIxYWM1MTJjIiwiaWF0IjoxNTU4NTE5Mzk0LCJleHAiOjE1NTg1MjI5OTR9.q6Lgrq7sUYQfvNDFlJoCWnlzy0Sz4I6MpaOlSMMUku0"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         bookmarks: data.data.bookmark
  //       });
  //       console.log(this.state.bookmarks)
  //     });
  // }

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
