import React from "react";

const BookViewing = ({ item, props, setSuccess }) => (
  <button
    style={{ background: "darkred", color: "white" }}
    onClick={() => {
      fetch("/bookViewing", {
        method: "POST",
        body: JSON.stringify({ event: item, user: props.user }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(json => {
          setSuccess(true);
        })
        .catch(err => console.log(err));
    }}
  >
    Book
  </button>
);

export default BookViewing;
