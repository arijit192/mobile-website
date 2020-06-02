import React, { Component } from "react";

export default class contact extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            fontFamily: "Satisfy",
            color: "white",
            fontSize: "larger",
            textAlign: "center",
            padding: "10%",
          }}
        >
          Working on it too. Have some patients..
        </p>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <button
            style={{
              textAlign: "center",
              backgroundColor: "#eb00ff",
              color: "white",
              border: "0px solid transparent",
            }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              Go to home
            </a>
          </button>
        </div>
      </div>
    );
  }
}
